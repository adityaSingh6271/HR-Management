import React, { useState } from "react";
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
import AddCandidateModal from "./AddCandidateModal";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState("Candidates");
  const navigate = useNavigate();
  const [candidatesData, setCandidatesData] = useState([
    {
      id: "01",
      name: "Floyd Miles",
      email: "sara.cruz@example.com",
      phone: "(704) 555-0127",
      position: "Designer Intern",
      status: "New",
      experience: "Fresher",
    },
    {
      id: "02",
      name: "Cody Fisher",
      email: "deanna.curtis@example.com",
      phone: "(252) 555-0126",
      position: "Developer",
      status: "Rejected",
      experience: "1+",
    },
    {
      id: "03",
      name: "Guy Hawkins",
      email: "kenzi.lawson@example.com",
      phone: "(907) 555-0101",
      position: "Human Resource",
      status: "Ongoing",
      experience: "10+",
    },
    {
      id: "04",
      name: "Arlene McCoy",
      email: "michelle.rivera@example.com",
      phone: "(302) 555-0107",
      position: "Designer Full Time",
      status: "Selected",
      experience: "5+",
    },
    {
      id: "05",
      name: "Leslie Alexander",
      email: "willie.jennings@example.com",
      phone: "(207) 555-0119",
      position: "Developer Full Time",
      status: "Scheduled",
      experience: "0",
    },
  ]);

  const getStatusClass = (status) => {
    return `candidate-row ${status.toLowerCase()}`;
  };

  const [filters, setFilters] = useState({
    status: "all",
    position: "all",
    search: "",
  });

  const handleAddCandidate = (formData) => {
    const newCandidate = {
      id: String(candidatesData.length + 1).padStart(2, "0"),
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      position: formData.department,
      status: "New",
      experience: formData.experience,
    };

    setCandidatesData([...candidatesData, newCandidate]);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSearchChange = (e) => {
    setFilters({
      ...filters,
      search: e.target.value,
    });
  };

  const filteredCandidates = candidatesData.filter((candidate) => {
    const matchesStatus =
      filters.status === "all" ||
      candidate.status.toLowerCase() === filters.status.toLowerCase();
    const matchesPosition =
      filters.position === "all" ||
      candidate.position.toLowerCase().includes(filters.position.toLowerCase());
    const matchesSearch =
      candidate.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      candidate.email.toLowerCase().includes(filters.search.toLowerCase()) ||
      candidate.phone.toLowerCase().includes(filters.search.toLowerCase());

    return matchesStatus && matchesPosition && matchesSearch;
  });

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
          <h3>Candidates</h3>
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
            <img
              src={Recruitment}
              alt="Recruitment"
              onClick={() => setActiveIcon("Recruitment")}
              className={activeIcon === "Recruitment" ? "active" : ""}
            />
            <img
              src={Candidates}
              alt="Candidates"
              onClick={() => setActiveIcon("Candidates")}
              className={activeIcon === "Candidates" ? "active" : ""}
            />
            <img src={Organisation} alt="Organisation" />
            <img
              src={Employees}
              alt="Employees"
              onClick={() => {
                setActiveIcon("Employees");
                navigate("/Employees");
              }}
              className={activeIcon === "Employees" ? "active" : ""}
            />
            <img
              src={Attendance}
              alt="Attendance"
              onClick={() => setActiveIcon("Attendance")}
              className={activeIcon === "Attendance" ? "active" : ""}
            />
            <img
              src={leaves}
              alt="Leaves"
              onClick={() => setActiveIcon("leaves")}
              className={activeIcon === "leaves" ? "active" : ""}
            />
            <img src={Others} alt="Others" />
          </div>
          <div className="sidebar-footer">
            <img
              src={logout}
              alt="Logout"
              onClick={() => navigate("/login")}
              className={activeIcon === "logout" ? "active" : ""}
            />
          </div>
        </aside>

        <main className="content">
          <div className="content-header">
            <div className="filters">
              <div className="select-container">
                <select
                  name="status"
                  value={filters.status}
                  onChange={handleFilterChange}
                >
                  <option value="all">All</option>
                  <option value="new">New</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="selected">Selected</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
              <div className="select-container">
                <select
                  name="position"
                  value={filters.position}
                  onChange={handleFilterChange}
                >
                  <option value="all">All</option>
                  <option value="designer">Designer</option>
                  <option value="developer">Developer</option>
                  <option value="human resource">Human Resource</option>
                </select>
              </div>
              <div className="search-container">
                <img src={search} alt="search" className="search-icon" />
                <input
                  type="text"
                  placeholder="Search"
                  value={filters.search}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <button
              className="add-candidate-btn"
              onClick={() => setIsModalOpen(true)}
            >
              Add New Candidate
            </button>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Sr no.</th>
                  <th>Candidate Name</th>
                  <th>Email Address</th>
                  <th>Phone Number</th>
                  <th>Position</th>
                  <th>Status</th>
                  <th>Experience</th>
                  <th>Resume</th>
                </tr>
              </thead>
              <tbody>
                {filteredCandidates.map((candidate, index) => (
                  <tr
                    key={candidate.id}
                    className={`row-${candidate.status.toLowerCase()}`} // Add a dynamic class based on status
                  >
                    <td>{index + 1}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.email}</td>
                    <td>{candidate.phone}</td>
                    <td>{candidate.position}</td>
                    <td>
                      <span
                        className={`status-badge ${candidate.status.toLowerCase()}`}
                      >
                        {candidate.status}
                      </span>
                    </td>
                    <td>{candidate.experience}</td>
                    <td>
                      <button className="download-btn">↓</button>
                      <button className="view-btn">👁</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <AddCandidateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddCandidate}
      />
    </div>
  );
};

export default Dashboard;
