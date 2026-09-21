import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    college: "",
    email: "",
    password: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // 1. Name required
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // 2. Username lowercase only
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (/[A-Z]/.test(formData.username)) {
      newErrors.username = "Username must be lowercase only";
    }

    // 3. College required
    if (!formData.college.trim()) {
      newErrors.college = "College is required";
    }

    // 4. Email valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // 5. Password at least 8 characters
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // 6. Address required
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  return (
    <div className="container">
      <div className="card">
        {/* Title must be a single uninterrupted text string without <br /> */}
        <h1 className="title">Student Registration Form</h1>

        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="form-group">
            <label className="label" htmlFor="name-input">Name</label>
            <input
              id="name-input"
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              className="input"
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label className="label" htmlFor="username-input">Username</label>
            <input
              id="username-input"
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              className="input"
            />
            {errors.username && (
              <span className="error-text">{errors.username}</span>
            )}
          </div>

          <div className="form-group">
            <label className="label" htmlFor="college-input">College</label>
            <input
              id="college-input"
              type="text"
              name="college"
              placeholder="Enter college"
              value={formData.college}
              onChange={handleChange}
              className="input"
            />
            {errors.college && (
              <span className="error-text">{errors.college}</span>
            )}
          </div>

          <div className="form-group">
            <label className="label" htmlFor="email-input">Email</label>
            <input
              id="email-input"
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label className="label" htmlFor="password-input">Password</label>
            <input
              id="password-input"
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="input"
            />
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </div>

          <div className="form-group">
            <label className="label" htmlFor="address-input">Address</label>
            <input
              id="address-input"
              type="text"
              name="address"
              placeholder="Enter address"
              value={formData.address}
              onChange={handleChange}
              className="input"
            />
            {errors.address && (
              <span className="error-text">{errors.address}</span>
            )}
          </div>

          <button type="submit" className="btn-register">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}