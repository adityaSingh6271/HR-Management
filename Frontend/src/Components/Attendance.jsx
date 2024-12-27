import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoreVertical } from "lucide-react";
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
import "./Attendance.css";

const initialEmployeesData = [
  {
    id: 1,
    profile: robertson,
    "Employee Name": "Darlene Robertson",
    Designation: "Team lead",
    department: "Backend Development",
    Task: "Mobile app login page integration",
    Status: "Work from home",
  },
  {
    id: 2,
    profile: leslie,
    "Employee Name": "Leslie Alexander",
    Designation: "Intern",
    department: "Designer",
    Task: "Dashboard Design",
    Status: "Present",
  },
  {
    id: 3,
    profile: ronald,
    "Employee Name": "Ronald Richards",
    Designation: "Senior designer",
    department: "Backend Development",
    Task: "Dashboard Login page design, Dashboard Home page design",
    Status: "Present",
  },
  {
    id: 4,
    profile: theresa,
    "Employee Name": "Theresa Webb",
    Designation: "Junior Developer",
    department: "Backend Development",
    Task: "Mobile App Home page updates/changes",
    Status: "Work from home",
  },
];

const statusOptions = ["Present", "Absent", "Medical Leave", "Work from home"];

const AttendanceDashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [employeesData, setEmployeesData] = useState(initialEmployeesData);

  const handleStatusChange = (employeeId, newStatus) => {
    setEmployeesData((employees) =>
      employees.map((emp) =>
        emp.id === employeeId ? { ...emp, Status: newStatus } : emp
      )
    );
  };

  const filteredEmployees = employeesData.filter((employee) => {
    const matchesSearch =
      employee["Employee Name"]
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDepartment =
      departmentFilter === "all" ||
      employee.department.toLowerCase() === departmentFilter.toLowerCase();

    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="dashboard">
      <nav className="top-navbar">
        <div className="nav-left">
          <div className="logo-container">
            <img src={LogoRectangle} alt="Logo" className="logo-rectangle" />
            <img src={LOGO} alt="LOGO" className="logo-text" />
          </div>
          <h3>Attendance</h3>
        </div>
        <div className="nav-right">
          <div className="nav-icon-wrapper">
            <img src={mail} alt="Mail" className="nav-icon" />
            <div className="notification-circle"></div>
          </div>
          <div className="nav-icon-wrapper">
            <img src={notifications} alt="Notifications" className="nav-icon" />
            <div className="notification-circle"></div>
          </div>
          <img src={Profile} alt="Profile" className="profile-icon" />
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
            <img
              src={Employees}
              alt="Employees"
              className="employee active"
              onClick={() => navigate("/Employees")}
            />
            <img
              src={Attendance}
              alt="Attendance"
              onClick={() => navigate("/Attendance")}
            />
            <img src={leaves} alt="Leaves" />
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
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="backend development">
                    Backend Development
                  </option>
                  <option value="designer">Designer</option>
                </select>
              </div>
              <div className="search-container">
                <img src={search} alt="Search" className="search-icon" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
                  <th>Designation</th>
                  <th>Department</th>
                  <th>Task</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td>
                      <img
                        src={employee.profile}
                        alt={employee["Employee Name"]}
                        className="employee-profile-pic"
                      />
                    </td>
                    <td>{employee["Employee Name"]}</td>
                    <td>{employee.Designation}</td>
                    <td>{employee.department}</td>
                    <td className="task-cell">{employee.Task}</td>
                    <td>
                      <span
                        className={`status-badge ${employee.Status.toLowerCase().replace(
                          " ",
                          "-"
                        )}`}
                      >
                        {employee.Status}
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="dropbtn">
                          <MoreVertical size={20} />
                        </button>
                        <div className="dropdown-content">
                          {statusOptions.map((status) => (
                            <button
                              key={status}
                              onClick={() =>
                                handleStatusChange(employee.id, status)
                              }
                            >
                              {status}
                            </button>
                          ))}
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
    </div>
  );
};

export default AttendanceDashboard;
