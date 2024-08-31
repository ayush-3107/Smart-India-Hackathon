const crewMembers = require('./mockCrewMembers'); // Import crew members mock data
const buses = require('./mockBuses'); // Import buses mock data
const preferredRoutes = require('./preferred_routes_mockCrewMembers.json'); // Import preferred routes mock data

const fs = require('fs');
const { Parser } = require('json2csv'); // Import json2csv package

const assignBusToCrew = (crewMember, allBuses, assignedBuses) => {
    const { id, preferredRoute, shift, crewRole } = crewMember;

    // Find buses that match the preferred route and shift
    const preferredBus = allBuses.find(
        bus => bus.routeNumber === preferredRoute && bus.timing === shift && !assignedBuses.some(assigned => assigned.busNumber === bus.busNumber && assigned.timing === shift && assigned.crewRole === crewRole)
    );

    if (preferredBus) {
        // Assign the preferred bus if available
        assignedBuses.push({ ...preferredBus, crewMemberId: id, crewRole });
    } else {
        // If preferred bus is not available, find the nearest available bus route
        const nearestBus = allBuses.find(
            bus => !assignedBuses.some(assigned => assigned.busNumber === bus.busNumber && assigned.timing === shift && assigned.crewRole === crewRole)
        );

        if (nearestBus) {
            assignedBuses.push({ ...nearestBus, crewMemberId: id, crewRole });
        }
    }
    return assignedBuses;
};

let assignedBuses = [];

preferredRoutes.forEach(route => {
    const crewMember = crewMembers.find(member => member.id === route.id);
    if (crewMember) {
        assignedBuses = assignBusToCrew({ ...crewMember, ...route }, buses, assignedBuses);
    }
});

// Convert assigned buses data to CSV
const fields = ['busNumber', 'routeNumber', 'timing', 'crewMemberId', 'crewRole'];
const opts = { fields };

try {
    const parser = new Parser(opts);
    const csv = parser.parse(assignedBuses);

    // Save CSV data to a file
    fs.writeFileSync('assigned_buses.csv', csv);
    console.log('Assigned buses data has been saved to assigned_buses.csv');
} catch (err) {
    console.error(err);
}

module.exports=assignBusToCrew;