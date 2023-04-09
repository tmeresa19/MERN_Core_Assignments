import React, { useState } from "react";

function FormHook() {
  // Set up state to track form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Define function to handle input changes and update state accordingly
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value }); // spread operator to update the state
  };

  return (
    <div className="container mt-5">
      <h1>Real-Time Form Data</h1>
      <form>
        {/* First Name input field */}
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            onChange={handleInputChange}
            value={formData.firstName}
          />
        </div>

        {/* Last Name input field */}
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            onChange={handleInputChange}
            value={formData.lastName}
          />
        </div>

        {/* Email input field */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={handleInputChange}
            value={formData.email}
          />
        </div>

        {/* Password input field */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={handleInputChange}
            value={formData.password}
          />
        </div>

        {/* Confirm Password input field */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleInputChange}
            value={formData.confirmPassword}
          />
        </div>
      </form>

      {/* Display form data in real-time */}
      <h2>Form Data:</h2>
      <ul>
        <li>First Name: {formData.firstName}</li>
        <li>Last Name: {formData.lastName}</li>
        <li>Email: {formData.email}</li>
        <li>Password: {formData.password}</li>
        <li>Confirm Password: {formData.confirmPassword}</li>
      </ul>
    </div>
  );
}

export default FormHook;
