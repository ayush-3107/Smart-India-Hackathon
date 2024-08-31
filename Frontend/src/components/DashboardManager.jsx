import React, { useState, useEffect } from 'react';

const DashboardManager = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 20;

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



  // Calculate the index of the first and last entry on the current page
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;

  // Get the current entries to display
  const currentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / entriesPerPage);

  // Change page handler
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <div className="shadow-lg rounded-lg flex flex-col items-center justify-center">
        <img src="ScheduLine_Tagline_img.png" className="bg-cover bg-center" alt="Banner" />
        <h1 className="text-center text-5xl p-8 font-semibold text-green-900">Crew Details</h1>
        <table className="w-[90%] table-auto">
          <thead>
            <tr className="bg-[#F1F8E8]">
              {Object.keys(data[0]).map((header) => (
                <th key={header} className="py-4 px-6 text-left text-gray-600 font-bold uppercase whitespace-nowrap text-center">
                  {header.charAt(0).toUpperCase() + header.slice(1)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {currentEntries.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value,i) => (
                  <td key={i} className="py-4 px-6 border-b border-gray-200 break-words text-center">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4 w-[90%]">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Previous
          </button>
          <span className="text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default DashboardManager;
