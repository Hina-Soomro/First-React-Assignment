import React, { useState } from 'react';
import './index.css'
// Custom hook for managing input state and functionality 
const useInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

   const handleDelete = () => {
     setInputValue('');
   };

  // Return state and functions as an object
  return {
    value: inputValue,
    onChange: handleChange,
    onDelete: handleDelete
  };
};

// Input component using the custom hook
const Input = () => {
  const { value, onChange, onDelete } = useInput(); 
  const [addedValues, setAddedValues] = useState([]);

  const handleAdd = () => {
    if (value.trim() !== '') {
      setAddedValues([...addedValues, value]);
      // Clear input after adding
      onDelete(); 
    }
  };

  const handleDeleteValue = (index) => {
    setAddedValues(addedValues.filter((_, i) => i !== index));
  };

  return (
    <div className='border'> 
      <input className='input'
        type="text"
        value={value}
        onChange={onChange}
        placeholder='Enter text' />

      <button onClick={handleAdd} className='btn'>Add</button>
       <button onClick={onDelete} className='btn'>Cancel</button>
     
       <ul>
        {addedValues.map((addedValue, index) => (
          <li key={index}>
            {addedValue}
            <button onClick={() => handleDeleteValue(index)} className='btn'>Delete</button>
          </li>
        ))}
      </ul>
      

     
    </div>
  );
};

export default Input;

