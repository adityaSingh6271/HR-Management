import React, { useState } from "react";
import "./AddLeaveModal.css";

const AddLeaveModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    leaveDate: "",
    reason: "",
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add New Leave</h2>
          <button className="close-button" onClick={onClose}>
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name*"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="designation"
                placeholder="Designation*"
                value={formData.designation}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <div className="date-input-container">
                <input
                  type="text"
                  name="leaveDate"
                  placeholder="Leave Date*"
                  value={formData.leaveDate}
                  onChange={handleChange}
                  required
                />
                <span className="calendar-icon">📅</span>
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="reason"
                placeholder="Reason*"
                value={formData.reason}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <div className="attachment-input-container">
                <input
                  type="text"
                  name="attachment"
                  placeholder="Attachment"
                  value={formData.attachment || ""}
                  onChange={handleChange}
                />
                <span className="attachment-icon">🔗</span>
              </div>
            </div>
          </div>
          <div className="form-footer">
            <button type="submit" className="save-button">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLeaveModal;
