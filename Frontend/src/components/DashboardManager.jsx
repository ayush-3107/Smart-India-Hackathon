import React, { useState, useEffect } from 'react';

const DashboardManager = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const entries = ["name", "id", "phoneNumber", "email", "address", "crewRole", "experience", "timingPreferences"];

  useEffect(() => {
    // Fetch the JSON file when the component mounts
    fetch('/mockCrewMembers.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(jsonData => {
        const filteredDta = jsonData.map(row => {
          const filteredRow = {};
          entries.forEach(key => {
              filteredRow[key] = row[key];
          });
          return filteredRow;
        });

        setData(jsonData);
        setFilteredData(filteredDta);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching JSON data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <>
      <div className="shadow-lg rounded-lg flex flex-col items-center justify-center">
        <img src="ScheduLine_Tagline_img.png" className='bg-cover bg-center ' alt="" />
        <h1
        className='text-center text-5xl p-8 font-semibold text-green-900'>Crew Details </h1>
        <table className="w-[90%] table-auto">
          <thead>
            <tr className="bg-[#F1F8E8]">
              {entries.map((key) => (
                <th key={key} className="py-4 px-6 text-left text-gray-600 font-bold uppercase whitespace-nowrap ">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {filteredData.map((row, index) => (
              <tr key={index}>
                {entries.map((key) => (
                  <td key={key} className="py-4 px-6 border-b border-gray-200 break-words">
                    {row[key] || '-'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardManager;
