import React, { useState } from "react";

export const MoreForms = () => {
  // Set up state to track form data
  

  const [firstName, setFirstName] = useState('')
  const [firstNameError, setFirstNameError] = useState('')

  const [lastName, setLastName] = useState('')
  const [lastNameError, setLastNameError] = useState('')

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  let formIsValid = false;
  formIsValid =
    firstNameError === "" &&
    lastNameError === "" &&
    emailError === "" &&
    passwordError === "" &&
    confirmPasswordError === "";

    const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.trim().length < 2) {
      setFirstNameError('First Name must be at least two characters.');
    } else {
      setFirstNameError('');
    }
  };
    const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    if (e.target.value.trim().length < 2) {
      setLastNameError('Last Name must be at least two characters.');
    } else {
      setLastNameError('');
    }
  };

    const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value.trim().length < 2) {
      setEmailError('Email must be at least two characters.');
    } else {
      setEmailError('');
    }
  };

    const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.trim().length < 2) {
      setPasswordError('Password must be at least two characters.');
    } else {
      setPasswordError('');
    }
  };

    const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value.trim().length < 2) {
      setConfirmPasswordError('Confirm password must be at least two characters.');
    } else {
      setConfirmPasswordError('');
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-md-4">
        <h1 className="mb-4">Form Data for MoreForms</h1>
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
                onChange={handleFirstNameChange}
                value={firstName}
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
                onChange={handleLastNameChange}
                value={lastName}
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
                onChange={handleEmailChange}
                value={email}
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
                onChange={handlePasswordChange}
                value={password}
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
                onChange={handleConfirmPasswordChange}
                value={confirmPassword}
              />
            </div>
          </div>
        </form>

        {/* Display form data in real-time */}
        <h2 className="mb-4 mt-4">Your Form Data:</h2>
        <ul>
          <li>First Name: {firstName}</li>
          <li>Last Name: {lastName}</li>
          <li>Email: {email}</li>
          <li>Password: {password}</li>
          <li>Confirm Password: {confirmPassword}</li>
        </ul>
      </div>
    </div>
  );
};

export default MoreForms;
