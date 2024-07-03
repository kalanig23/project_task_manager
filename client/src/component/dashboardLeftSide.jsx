import React from "react";
import { useNavigate } from "react-router-dom";
import BrandLogo from "../assets/brandlogo.png";
import BoardIcon from "../assets/boardlogo.png";
import AnalyticsIcon from "../assets/analyticslogo.png";
import SettingIcon from "../assets/settingslogo.png";
import LoggedOutIcon from "../assets/Logout.png";
import "./dashboardLeftSide.css";

const DashboardLeftSide = ({ handleSwitchLeftRigthComponent }) => {
  const navigate = useNavigate();

  const handleLoggedOut = () => {
    navigate("/login");
  };

  return (
    <div className="dashboard-left-side-container">
      <ul className="brand-name-list">
        <li className="brand-name">
          <img src={BrandLogo} alt="brand-logo" className="brand-logo-img" />
          &nbsp; &nbsp; <span className="brand-title">Pro Manage</span>
        </li>
      </ul>
      <ul className="brand-section-list">
        <li
          className="brand-section"
          onClick={() => handleSwitchLeftRigthComponent("Board")}
        >
          <img src={BoardIcon} alt="board-icon" />
          &nbsp; &nbsp; <span className="brand-section-name">Board</span>
        </li>
        <li
          className="brand-section"
          onClick={() => handleSwitchLeftRigthComponent("Analytics")}
        >
          <img src={AnalyticsIcon} alt="analytics-icon" />
          &nbsp; &nbsp; <span className="brand-section-name">Analytics</span>
        </li>
        <li
          className="brand-section"
          onClick={() => handleSwitchLeftRigthComponent("Settings")}
        >
          <img src={SettingIcon} alt="setting-icon" />
          &nbsp; &nbsp; <span className="brand-section-name">Settings</span>
        </li>
      </ul>
      <ul className="logged-out-list">
        <li className="loggedout-name" onClick={handleLoggedOut}>
          <img
            src={LoggedOutIcon}
            alt="loggedout-logo"
            className="loggedout-icon"
          />
          &nbsp; &nbsp; <span className="loggedout-title">Log out</span>
        </li>
      </ul>
    </div>
  );
};

export default DashboardLeftSide;
