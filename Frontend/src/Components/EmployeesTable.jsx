import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoreVertical, X } from "lucide-react";
import LogoRectangle from "../assets/LogoRectangle.png";
import LOGO from "../assets/LOGO.png";
import mail from "../assets/mail.png";
import notifications from "../assets/notifications.png";
import Profile from "../assets/Profile.png";
import search from "../assets/Search.png";
import Recruitment from "../assets/Recruitment.png";
import Candidates from "../assets/Candidates.png";
import Organisation from "../assets/Organisation.png";
import Employees from "../assets/Employee.png";
import Attendance from "../assets/Attendance.png";
import leaves from "../assets/leaves.png";
import Others from "../assets/Others.png";
import logout from "../assets/logout.png";
import robertson from "../assets/robertson.png";
import leslie from "../assets/leslie.png";
import ronald from "../assets/ronald.png";
import theresa from "../assets/theresa.png";
import "./EmployeesTable.css";

const initialEmployeesData = [
  {
    id: 1,
    profile: robertson,
    name: "Darlene Robertson",
    email: "michael.mitc@example.com",
    phone: "(603) 555-0123",
    position: "Team Lead",
    department: "Backend Development",
    dateOfJoining: "10/06/17",
  },
  {
    id: 2,
    profile: leslie,
    name: "Leslie Alexander",
    email: "felicia.reid@example.com",
    phone: "(229) 555-0109",
    position: "Intern",
    department: "Designer",
    dateOfJoining: "08/15/17",
  },
  {
    id: 3,
    profile: ronald,
    name: "Ronald Richards",
    email: "debra.holt@example.com",
    phone: "(907) 555-0101",
    position: "Senior designer",
    department: "Backend Development",
    dateOfJoining: "12/04/17",
  },
  {
    id: 4,
    profile: theresa,
    name: "Theresa Webb",
    email: "alma.lawson@example.com",
    phone: "(303) 555-0105",
    position: "Junior Developer",
    department: "Employee Name",
    dateOfJoining: "11/07/16",
  },
  // ... any additional employees
];

const EmployeesTable = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [employeesData, setEmployeesData] = useState(initialEmployeesData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const filteredEmployees = employeesData.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.phone.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDepartment =
      selectedDepartment === "all" ||
      employee.department.toLowerCase() === selectedDepartment.toLowerCase();

    return matchesSearch && matchesDepartment;
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setIsModalOpen(true);
  };

  const handleDelete = (employeeId) => {
    setEmployeesData(employeesData.filter((emp) => emp.id !== employeeId));
  };

  const handleSave = (updatedEmployee) => {
    setEmployeesData(
      employeesData.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
    setIsModalOpen(false);
    setEditingEmployee(null);
  };

  return (
    <div className="dashboard">
      <nav className="top-navbar">
        <div className="nav-left">
          <div className="logo-container">
            <img
              src={LogoRectangle}
              alt="LogoRectangle"
              className="logo-rectangle"
            />
            <img src={LOGO} alt="LOGO" className="logo-text" />
          </div>
          <h3>Employees</h3>
        </div>
        <div className="nav-right">
          <div className="nav-icon-wrapper">
            <img src={mail} alt="mail" className="nav-icon" />
            <div className="notification-circle"></div>
          </div>
          <div className="nav-icon-wrapper">
            <img src={notifications} alt="notifications" className="nav-icon" />
            <div className="notification-circle"></div>
          </div>
          <img src={Profile} alt="profile" className="profile-icon" />
        </div>
      </nav>

      <div className="main-container">
        <aside className="sidebar">
          <div className="sidebar-menu">
            <img src={Recruitment} alt="Recruitment" />
            <img
              src={Candidates}
              alt="Candidates"
              onClick={() => navigate("/dashboard")}
            />
            <img src={Organisation} alt="Organisation" />
            <img src={Employees} alt="Employees" className="employee active" />
            <img src={Attendance} alt="Attendance" />
            <img src={leaves} alt="leaves" />
            <img src={Others} alt="Others" />
          </div>
          <div className="sidebar-footer">
            <img src={logout} alt="Logout" onClick={() => navigate("/login")} />
          </div>
        </aside>

        <main className="content">
          <div className="content-header">
            <div className="filters">
              <div className="select-container">
                <select
                  name="department"
                  value={selectedDepartment}
                  onChange={handleDepartmentChange}
                >
                  <option value="all">All</option>
                  <option value="backend development">
                    Backend Development
                  </option>
                  <option value="designer">Designer</option>
                  <option value="employee name">Employee Name</option>
                </select>
              </div>
              <div className="search-container">
                <img src={search} alt="search" className="search-icon" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Profile</th>
                  <th>Employee Name</th>
                  <th>Email Address</th>
                  <th>Phone Number</th>
                  <th>Position</th>
                  <th>Department</th>
                  <th>Date of Joining</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td>
                      <img
                        src={employee.profile}
                        alt={employee.name}
                        className="employee-profile-pic"
                      />
                    </td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.position}</td>
                    <td>{employee.department}</td>
                    <td>{employee.dateOfJoining}</td>
                    <td>
                      <div className="actions">
                        <div className="dropdown">
                          <button className="dropbtn">
                            <MoreVertical size={20} />
                          </button>
                          <div className="dropdown-content">
                            <button onClick={() => handleEdit(employee)}>
                              Edit
                            </button>
                            <button onClick={() => handleDelete(employee.id)}>
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {isModalOpen && (
        <EditEmployeeModal
          employee={editingEmployee}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

const EditEmployeeModal = ({ employee, onClose, onSave }) => {
  const [formData, setFormData] = useState(employee);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Edit Employee Details</h2>
          <button onClick={onClose} className="close-button">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="edit-employee-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="position">Position</label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="department">Department</label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="dateOfJoining">Date of Joining</label>
              <input
                type="text"
                id="dateOfJoining"
                name="dateOfJoining"
                value={formData.dateOfJoining}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="save-button">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeesTable;
