import React, { useState } from "react";
import DashboardLeftSide from '../component/dashboardLeftSide';
import DashboardRightSide from '../component/dashboardRightSide';
import './dashboard.css';

const Dashboard=()=> {
    const [selectedElement, setSelectedElement] = useState('Board');
    return(
        <div className="dashboard-container">
            <div className="dashboard-left-container">
                <DashboardLeftSide handleSwitchLeftRigthComponent={setSelectedElement}/>
            </div>
            <div className="dashboard-right-container">
                <DashboardRightSide selectedElement={selectedElement}/>
            </div>
        </div>
    )
}

export default Dashboard;