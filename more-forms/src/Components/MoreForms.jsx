import { useState } from "react";

function MoreForms() {
  const [firstName, setFirstName] = useState("");
  const [firstNameErrors, setFirstNameErrors] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameErrors, setLastNameErrors] = useState("");

  const [email, setEmail] = useState("");
  const [emailErrors, setEmailErrors] = useState("");

  const [password, setPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordErrors, setConfirmPasswordErrors] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.trim().length < 2) {
      setFirstNameErrors("First name must be at least 2 characters.");
    } else {
      setFirstNameErrors(null);
    }
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    if (e.target.value.trim().length < 2) {
      setLastNameErrors("Last name must be at least 2 characters.");
    } else {
      setLastNameErrors(null);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value.trim().length < 5) {
      setEmailErrors("Email must be at least 5 characters.");
    } else {
      setEmailErrors(null);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordErrors("Password must be at least 8 characters.");
    } else {
      setPasswordErrors(null);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordErrors("Passwords do not match.");
    } else {
      setConfirmPasswordErrors(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstNameErrors || lastNameErrors || emailErrors || passwordErrors || confirmPasswordErrors) {
      alert("Please fix the errors before submitting the form.");
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="card mt-3">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="form-control"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <label htmlFor="firstName">First Name:</label>
            {firstNameErrors && (
              <span className="form-text text-danger">{firstNameErrors}</span>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="form-control"
              value={lastName}
              onChange={handleLastNameChange}
            />
            <label htmlFor="lastName">Last Name:</label>
            {lastNameErrors && (
              <span className="form-text text-danger">{lastNameErrors}</span>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              value={email}
              onChange={handleEmailChange}
            />
            <label htmlFor="email">Email:</label>
            {emailErrors && (
              <span className="form-text text-danger">{emailErrors}</span>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="password"
              id="password"
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
            />
            <label htmlFor="password">Password:</label>
            {passwordErrors && (
              <span className="form-text text-danger">{passwordErrors}</span>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              className="form-control"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            {confirmPasswordErrors && (
              <span className="form-text text-danger">{confirmPasswordErrors}</span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export { MoreForms };
