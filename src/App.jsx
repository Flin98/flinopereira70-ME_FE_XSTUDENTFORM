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
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Username validation (must be all lowercase)
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (/[A-Z]/.test(formData.username)) {
      newErrors.username = "Username must be lowercase only";
    }

    // College validation
    if (!formData.college.trim()) {
      newErrors.college = "College is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Password validation (at least 8 characters)
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // All validations passed
      alert("Registration successful!");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">
          Student
          <br />
          Registration Form
        </h1>

        <form onSubmit={handleSubmit} className="form" noValidate>
          {/* Name Field */}
          <div className="form-group">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              className="input"
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          {/* Username Field */}
          <div className="form-group">
            <label className="label">Username</label>
            <input
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

          {/* College Field */}
          <div className="form-group">
            <label className="label">College</label>
            <input
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

          {/* Email Field */}
          <div className="form-group">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label className="label">Password</label>
            <input
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

          {/* Address Field */}
          <div className="form-group">
            <label className="label">Address</label>
            <input
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

          {/* Submit Button */}
          <button type="submit" className="btn-register">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}