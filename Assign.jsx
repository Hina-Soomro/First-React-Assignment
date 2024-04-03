import React, { useState } from 'react';
import Input from './Input'; // Importing the Input component
import FORM from './FORM'
import "./index.css";
const Assign = () => {
  //*********Task one create array of 20 elements***********/
  const countries = [
    "Afghanistan", "Pakistan", "Oman", "Italy", "India", "Germany",
    "Iraq", "Iran", "Japan", "China", "Sudan", "Sri Lanka", "Switzerland",
    "Russia", "Qatar", "Spain", "Egypt", "South Africa", "Malaysia", "Mexico"
  ];

  // State to keep track of the number of elements to display more 2 items
  const [displayCount, setDisplayCount] = useState(10);

  const showMore = () => {
    setDisplayCount(prevCount => prevCount + 2);
  };

  return (
    <div className='border'>
      <h1>Task one</h1>
      
      <h2>List of country names</h2>

      {/* Display the elements using slice means (initialy display 10 elements)*/}
      {countries.slice(0, displayCount).map((country, index) => (
        <div key={index}>{country}</div>
      ))}
      
      {/* Button to show more elements */}
      <button onClick={showMore} className='btn'>Show More Names</button>
       <br />
       <h1>Task Two</h1>
       {/* Render the input component */}
      <Input />
      <br />
      <h1>Task Three</h1>
       {/* Render the FORM component */}

      <FORM />
    </div>
  );
};

export default Assign;
