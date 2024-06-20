import React from "react";
import Header from "./header";
import ToDoBoard from "../component/todoBoard";
import AddPeopleIcon from '../assets/addpeople.png';
import "./dashboardRightSide.css";

const DashboardRightSide = () => {
  return (
    <div className="dashboard-right-side-container">
      <Header />
      <div className="dashboard-right-side-section">
        <div className="section-title-addpeople">
            <h3 className="section-title">Board</h3>
            <ul className="addpeople-list">
            <li className="addpeople">
                <img src={AddPeopleIcon} alt="addpeople-logo" className="addpeople-logo-img" />
                &nbsp;<span className="addpeople-title">Add People</span>
            </li>
            </ul>
        </div>
        <select className="duration-select">
            <option>Select duration</option>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
        </select>
      </div>
      <div className="to-do-board-list">
        <div>
          <ToDoBoard />
          <ToDoBoard />
          <ToDoBoard />
          <ToDoBoard />
        </div>
      </div>
    </div>
  );
};

export default DashboardRightSide;
