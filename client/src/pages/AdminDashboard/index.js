import React, {Component} from "react";
import SideNav from "../../components/Admin/SideNav";


class AdminDashboard extends Component {

    render() {
        return (
            <div className="admin-dashboard-container">
                <SideNav />
                <div>Another thign</div>
                {/* this is wehre the page content will go */}
            </div>
        )
    }
}

export default AdminDashboard;