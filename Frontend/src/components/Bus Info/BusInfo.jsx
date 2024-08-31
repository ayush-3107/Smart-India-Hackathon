import React, { useEffect, useState } from "react";


function BusInfo() {
    const [data, setData] = useState([]);
    const [filterData, setfilterdata] = useState([]);
    const entries = ["BusNum", "StartingPoint", "StartTime", "EndTime"];

    useEffect(() => {
        fetch('/bus_service_data.json')
            .then(res => res.json())
            .then(res => {
                setData(res);
                const filteredData = res.map(row => {
                    const filtered = {};
                    entries.forEach(key => {
                        filtered[key] = row[key];
                    });
                    return filtered;
                });
                setfilterdata(filteredData);
            })
            .catch(error => {
                console.error('Error fetching JSON data:', error);
            });
    }, []);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
            <img
                src="Bus_info.png"
                alt="Image Not Found"
                className="bg-cover bg-center h-80 w-screen mb-8"
            />

            <table id="busInfoTable" className="table-auto w-full">
                <thead>
                    <tr>
                        {Object.keys(filterData[0] || {}).map((val) => (
                            <th key={val} className="px-4 py-2 bg-gray-200 text-center">
                                {val.charAt(0).toUpperCase() + val.slice(1)}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filterData.map((row, index) => (
                        <tr key={index}>
                            {Object.values(row).map((value, i) => (
                                <td key={i} className="border px-4 py-2 text-center">{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BusInfo;
