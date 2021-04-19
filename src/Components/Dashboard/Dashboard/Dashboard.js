import React from 'react';
import DashboardMain from '../DashboardMain/DashboardMain';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="row">
            <Sidebar></Sidebar>
            <DashboardMain></DashboardMain>
            
        </div>
    );
};

export default Dashboard;