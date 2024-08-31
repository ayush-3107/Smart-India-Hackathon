import json
import csv

# Load JSON data
with open(r"C:/Users/Vansh Agrawal/Smart-India-Hackathon/Backend/AI_model/Busdb.json") as f:
    bus_data = json.load(f)

with open(r'C:\Users\Vansh Agrawal\Smart-India-Hackathon\Backend\AI_model\Data.json') as f:
    crew_data = json.load(f)

with open(r'C:\Users\Vansh Agrawal\Smart-India-Hackathon\Backend\AI_model\updated_crew_data.json') as f:
    updated_crew_data = json.load(f)

assignments = []
used_buses = set()

def find_crew_data(crew_id):
    for crew in crew_data:
        # Check for the correct key
        if 'CrewID' in crew and crew['CrewID'] == crew_id:
            return crew
    return None

def find_bus_for_route(route_id, preferred_shift):
    # Find buses for the given route
    for route in bus_data:
        if str(route['Route ID']) == route_id:
            for bus in route['bus_numbers']:
                if bus['shift'].lower() == preferred_shift.lower() and bus['number'] not in used_buses:
                    return bus, route
    return None, None

def find_alternate_bus(route_id):
    # Try to find an alternate bus on the same route but different shift
    for route in bus_data:
        if str(route['Route ID']) == route_id:
            for bus in route['bus_numbers']:
                if bus['number'] not in used_buses:
                    return bus, route
    return None, None

# Assign buses to crew members based on their preferences
for preference in crew_preferences:
    crew_id = preference['id']
    preferred_route_id = preference['preferredRoute']
    preferred_shift = preference['shift']
    
    assigned_bus, route_info = find_bus_for_route(preferred_route_id, preferred_shift)
    
    if not assigned_bus:
        assigned_bus, route_info = find_alternate_bus(preferred_route_id)
    
    if assigned_bus and route_info:
        used_buses.add(assigned_bus['number'])
        crew_info = find_crew_data(crew_id)
        if crew_info:
            assignments.append({
                "Name": crew_info.get('Name', crew_id),  # Fallback to ID if 'Name' is missing
                "CrewID": crew_info.get('CrewID', crew_id),
                "CrewRole": crew_info.get('crewRole', 'Unknown'),  # Fallback to 'Unknown' if not present
                "Bus Number": assigned_bus['number'],
                "Route Short Name": route_info['Route Short Name'],
                "Start Point": route_info['Start Point'],
                "End Point": route_info['End Point'],
                "Shift": assigned_bus['shift']
            })

# Save to JSON
with open('assignments.json', 'w') as f:
    json.dump(assignments, f, indent=4)

# Save to CSV
with open('assignments.csv', 'w', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=["Name", "CrewID", "CrewRole", "Bus Number", "Route Short Name", "Start Point", "End Point", "Shift"])
    writer.writeheader()
    for assignment in assignments:
        writer.writerow(assignment)

# Output file paths
print("Assignments saved to assignments.json and assignments.csv")
