import React from "react";
import DashboardLeftSide from '../component/dashboardLeftSide';
import DashboardRightSide from '../component/dashboardRightSide';
import './dashboard.css';

const Dashboard=()=>{
    return(
        <div className="dashboard-container">
            <div className="dashboard-left-container">
                <DashboardLeftSide/>
            </div>
            <div className="dashboard-right-container">
                <DashboardRightSide/>
            </div>
        </div>
    )
}

export default Dashboard;