import React, { useState } from "react";
import { X, Upload } from "lucide-react";
import "./AddCandidateModal.css";

const AddCandidateModal = ({ isOpen, onClose, onSave }) => {
  const initialFormData = {
    fullName: "",
    email: "",
    phone: "",
    department: "",
    experience: "",
    resume: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
      setErrors((prev) => ({
        ...prev,
        resume: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Required";
    if (!formData.email) newErrors.email = "Required";
    if (!formData.phone) newErrors.phone = "Required";
    if (!formData.department) newErrors.department = "Required";
    if (!formData.experience) newErrors.experience = "Required";
    if (!formData.resume) newErrors.resume = "Required";
    if (!agreed) newErrors.agreed = "Please agree to the declaration";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSave(formData);

    // Reset the form after saving
    setFormData(initialFormData);
    setAgreed(false);
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add New Candidate</h2>
          <button onClick={onClose} className="close-button">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="add-candidate-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="fullName">
                Full Name<span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.fullName ? "error" : ""}
              />
              {errors.fullName && (
                <span className="error-message">{errors.fullName}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email Address<span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Phone Number<span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "error" : ""}
              />
              {errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="department">
                Department<span className="required">*</span>
              </label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className={errors.department ? "error" : ""}
              />
              {errors.department && (
                <span className="error-message">{errors.department}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="experience">
                Experience<span className="required">*</span>
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className={errors.experience ? "error" : ""}
              />
              {errors.experience && (
                <span className="error-message">{errors.experience}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="resume">
                Resume<span className="required">*</span>
              </label>
              <div className="resume-upload">
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  className={errors.resume ? "error" : ""}
                  style={{ display: "none" }}
                />
                <div
                  className={`upload-box ${errors.resume ? "error" : ""}`}
                  onClick={() => document.getElementById("resume").click()}
                >
                  {formData.resume ? formData.resume.name : "Upload Resume"}
                  <Upload size={20} />
                </div>
              </div>
              {errors.resume && (
                <span className="error-message">{errors.resume}</span>
              )}
            </div>
          </div>

          <div className="declaration">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <span className="checkmark"></span>
              <span className="declaration-text">
                I hereby declare that the above information is true to the best
                of my knowledge and belief
              </span>
            </label>
            {errors.agreed && (
              <span className="error-message">{errors.agreed}</span>
            )}
          </div>

          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCandidateModal;
