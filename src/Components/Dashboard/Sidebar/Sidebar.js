import { Link } from 'react-router-dom';
import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh",backgroundColor:'blue' }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/home" className="text-white">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/:id" className="text-white">
                       Dashboard
                    </Link>
                </li>
              
                    <li>
                        <Link to="/review" className="text-white">
                            Review
                        </Link>
                    </li>
                    <li>
                        <Link to="/ordersList" className="text-white">
                           Orders List 
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white">
                        Add a admin
                        </Link>
                    </li>
                    <li>
                        <Link to="/mangeService" className="text-white">
                        Mange service
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-white" >
                           Add service
                        </Link>
                    </li>
                   
            </ul>
           
        </div>
    );
};

export default Sidebar;