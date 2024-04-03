import React, { useState } from 'react';
import "./index.css";
const FORM = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [registeredData, setRegisteredData] = useState([]);

  const FORM = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      dateOfBirth: dateOfBirth,
      checkbox: checkbox,
    };
    setRegisteredData([...registeredData, data]);
    alert("Registration Successful");
  };

  return (
    <div className='border'>
      <h3>Registration Form</h3>
      <form onSubmit={FORM}>
        <label className='text'>
          First Name:
          <input className='input'
            required
            type="text"
            placeholder='Enter your first name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            name="fname"
          />
        </label>
        <br />
        <label className='text'>
          Last Name:
          <input className='input'
            required
            type="text"
            placeholder='Enter your last name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            name="lname"
          />
        </label>
        <br />
        <label className='text'>
          Email:
          <input className='input'
            required
            type="email"
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
        </label>
        <br />
       
        <label className='text'>
          Password:
          <input className='input'
            required
            type="password"
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
        </label>
       
        <br />
        <label className='text'>
          <input 
            required
            type="checkbox"
            checked={checkbox}
            onChange={(e) => setCheckbox(e.target.checked)}
          />{" "}
          Are you from pakistan?
        </label>
        <br />
        <label className='text'>
          Date of Birth:
          <input className='input'
            required
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            name="dob"
          />
        </label>
        <button type="submit" className='btn'>Submit</button>
      </form>
      
      {registeredData.length > 0 && (
        <div>
          <h3>Registered Data</h3>
          <ul>
            {registeredData.map((data, index) => (
              <li key={index}>
                <strong>Name:</strong> {data.firstName} {data.lastName}, <strong>Email:</strong> {data.email}, <strong>Date of Birth:</strong> {data.dateOfBirth}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FORM;
