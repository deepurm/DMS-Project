import React, { useState } from "react";
import './HospitalForm.css';

const HospitalForm = () => {
  const [formData, setFormData] = useState({
    hospitalName: "",
    hospitalEmail: "",
    hospitalPhone: "",
    address: "",
    location: "",
    state: "",
    city: "",
    pincode: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };

  return (
    <div className="form-container">
      <h2>Add Hospital</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Hospital Name:</label>
          <input
            type="text"
            name="hospitalName"
            placeholder="Ex: Apollo Hospital"
            value={formData.hospitalName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Hospital Email:</label>
          <input
            type="email"
            name="hospitalEmail"
            placeholder="Ex: apollohospital@email.com"
            value={formData.hospitalEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Hospital Phone:</label>
          <input
            type="text"
            name="hospitalPhone"
            placeholder="Ex: 91 XXXXXXXXXX or 022-XXXXXXXX"
            value={formData.hospitalPhone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            placeholder="Ex: 154, Bannerghatta Rd..."
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            placeholder="Ex: Bannerghatta"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>State:</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Choose...</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
        <div className="form-group">
          <label>City:</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          >
            <option value="">Choose...</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
        <div className="form-group">
          <label>Pincode:</label>
          <input
            type="text"
            name="pincode"
            placeholder="Ex: 560056"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default HospitalForm;
