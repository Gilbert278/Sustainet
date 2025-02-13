import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [data, setData] = useState({
    totalInitiated: 0,
    totalAuthorised: 0,
    totalReviewed: 0,
    finalAuthorization: 0,
  });

  // Fetch the numbers from the server when the component mounts
  useEffect(() => {
    // Simulating an API call to fetch the data from the server
    const fetchData = async () => {
      try {
        // Replace this with your actual API endpoint
        const response = await fetch('/api/dashboard-data');
        const result = await response.json();
        setData(result); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="dashboard-container">
      <div className="tabs-container">
        <div className="tab">
          <Link to="/">
            <span>Total Initiated<br /><b> {data.totalInitiated}</b></span>
          </Link>
        </div>
        <div className="tab">
          <Link to="/">
            <span>Total Authorised<br /><b> {data.totalAuthorised}</b></span>
          </Link>
        </div>
        <div className="tab">
          <Link to="/">
            <span>Total Reviewed<br /> <b>{data.totalReviewed}</b></span>
          </Link>
        </div>
        <div className="tab">
          <Link to="/">
            <span>Final Authorization<br /><b> {data.finalAuthorization}</b></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
