import React, { useState } from "react";

export const TestFormFloating = () => {
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
      <div className="col-md-4">
        <h1 className="mb-4">Form Data</h1>
        <form>
          {/* First Name input field */}
          <div className="form-group row mb-3">
            <label htmlFor="firstName" className="col-sm-3">
              First Name:
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                onChange={handleInputChange}
                value={formData.firstName}
              />
            </div>
          </div>
          {/* Last Name input field */}
          <div className="form-group row mb-3">
            <label htmlFor="lastName" className="col-sm-3">
              Last Name:
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                onChange={handleInputChange}
                value={formData.lastName}
              />
            </div>
          </div>
          {/* Email input field */}
          <div className="form-group row mb-3">
            <label htmlFor="email" className="col-sm-3">
              Email:
            </label>
            <div className="col-sm-9">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={handleInputChange}
                value={formData.email}
              />
            </div>
          </div>
          {/* Password input field */}
          <div className="form-group row mb-3">
            <label htmlFor="password" className="col-sm-3">
              Password:
            </label>
            <div className="col-sm-9">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={handleInputChange}
                value={formData.password}
              />
            </div>
          </div>
          {/* Confirm Password input field */}
          <div className="form-group row mb-3">
            <label htmlFor="confirmPassword" className="col-sm-3">
              Confirm Password:
            </label>
            <div className="col-sm-9">
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                onChange={handleInputChange}
                value={formData.confirmPassword}
              />
            </div>
          </div>

          {/* Testing form-floating bootstrap for input field */}

          <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                id="testFloat"
                name="testFloat"
                onChange={handleInputChange}
                value={formData.testFloat}
              />
              <label htmlFor="testFloat">Test Title</label>
            </div>

            <div className="text-end">
              <button type="submit" className="btn btn-outline-success">
                Add User
              </button>
            </div>
        </form>

        {/* Display form data in real-time */}
        <h2 className="mb-4 mt-4">Your Form Data:</h2>
        <ul>
          <li>First Name: {formData.firstName}</li>
          <li>Last Name: {formData.lastName}</li>
          <li>Email: {formData.email}</li>
          <li>Password: {formData.password}</li>
          <li>Confirm Password: {formData.confirmPassword}</li>
        </ul>
      </div>
    </div>
  );
};


export default TestFormFloating;