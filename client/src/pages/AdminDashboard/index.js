import React, {Component} from "react";
import SideNav from "../../components/Admin/Dashboard/SideNav";
import Schedule from "../../components/Admin/Dashboard/Scheduler"
import "./index.css";


class AdminDashboard extends Component {

    render() {
        return (
            <div className="admin-dashboard-container">
                <SideNav />
                <div className="home-dashboard">
                    <Schedule />
                </div>
                {/* this is wehre the page content will go */}
            </div>
        )
    }
}

export default AdminDashboard;