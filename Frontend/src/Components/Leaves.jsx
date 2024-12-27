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
import AddLeaveModal from "./AddLeaveModal";
import "./Dashboard.css";

const Leaves = () => {
  const [selectedDate, setSelectedDate] = useState("10/09/24");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const leaveData = [
    {
      id: 1,
      name: "Esther Howard",
      role: "Designer",
      date: "10/09/24",
      reason: "Going to Home town",
      status: "Pending",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 2,
      name: "Wade Warren",
      role: "Senior Software",
      date: "10/09/24",
      endDate: "13/09/24",
      reason: "Had fever Dr. told to rest for 3 days",
      status: "Approved",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 3,
      name: "Jenny Wilson",
      role: "Developer",
      date: "11/09/24",
      reason: "Not feeling Well",
      status: "Rejected",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ];

  const navItems = [
    { name: "Recruitment", icon: Recruitment },
    { name: "Candidates", icon: Candidates },
    { name: "Organization", icon: Organisation },
    { name: "Employees", icon: Employees },
    { name: "Attendance", icon: Attendance },
    { name: "Leaves", icon: leaves, active: true },
    { name: "Others", icon: Others },
  ];

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
          <h3>Leave</h3>
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
            <img src={Candidates} alt="Candidates" className="active" />
            <img src={Organisation} alt="Organisation" />
            <img
              src={Employees}
              alt="Employees"
              onClick={() => navigate("/Employees")}
            />
            <img
              src={Attendance}
              alt="Attendance"
              onClick={() => navigate("/Attendance")}
            />
            <img
              src={leaves}
              alt="leaves"
              onClick={() => navigate("/Leaves")}
            />
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
                <select>
                  <option>Approved</option>
                  <option>Pending</option>
                  <option>Rejected</option>
                </select>
              </div>
              <div className="search-container">
                <img src={search} alt="Search" className="search-icon" />
                <input type="text" placeholder="Search" />
              </div>
            </div>
            <button
              className="add-candidate-btn"
              onClick={() => setIsModalOpen(true)}
            >
              Add New Leave
            </button>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <thead>
                  Applied Leaves
                  <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Reason</th>
                    <th>Status</th>
                    <th>Docs</th>
                  </tr>
                </thead>
              </thead>
              <tbody>
                {leaveData.map((leave) => (
                  <tr
                    key={leave.id}
                    className={`row-${leave.status.toLowerCase()}`}
                  >
                    <td>
                      <div className="employee-info">
                        <img src={leave.avatar} alt={leave.name} />
                        <div>
                          <div className="employee-name">{leave.name}</div>
                          <div className="employee-role">{leave.role}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {leave.date}
                      {leave.endDate && <div>{leave.endDate}</div>}
                    </td>
                    <td>{leave.reason}</td>
                    <td>
                      <span
                        className={`status-badge ${leave.status.toLowerCase()}`}
                      >
                        {leave.status}
                      </span>
                    </td>
                    <td>
                      <button className="view-btn">📄</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="calendar-container">
            <h4>Leave Calendar</h4>
            <div className="calendar-date">
              <button className="calendar-today-btn">Today</button>
              <button className="calendar-selected-date">{selectedDate}</button>
            </div>
            <div className="calendar-leaves">
              {leaveData.map((leave) =>
                leave.date === selectedDate ? (
                  <div key={leave.id} className="calendar-item">
                    <img src={leave.avatar} alt={leave.name} />
                    <div>
                      <div className="calendar-name">{leave.name}</div>
                      <div className="calendar-role">{leave.role}</div>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </main>
      </div>

      <AddLeaveModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Leaves;
