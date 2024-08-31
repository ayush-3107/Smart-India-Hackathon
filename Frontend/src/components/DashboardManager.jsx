import React, { useState, useEffect } from 'react';

const DashboardManager = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the JSON file when the component mounts
    fetch('/bus_service_data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(jsonData => {
        setData(jsonData);
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

  // Extract headers from the keys of the first data item
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <>
      <div className="shadow-lg rounded-lg flex flex-col items-center justify-center">
        <img src="ScheduLine_Tagline_img.png" className="bg-cover bg-center" alt="Banner" />
        <h1 className="text-center text-5xl p-8 font-semibold text-green-900">Crew Details</h1>
        <table className="w-[90%] table-auto">
          <thead>
            <tr className="bg-[#F1F8E8]">
              {headers.map((header) => (
                <th key={header} className="py-4 px-6 text-left text-gray-600 font-bold uppercase whitespace-nowrap">
                  {header.charAt(0).toUpperCase() + header.slice(1)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((row, index) => (
              <tr key={index}>
                {headers.map((header) => (
                  <td key={header} className="py-4 px-6 border-b border-gray-200 break-words">
                    {row[header] || '-'}
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
