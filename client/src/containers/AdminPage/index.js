import React, { Component } from 'react';

import './index.scss';
import Navbar from './Navbar';

class AdminPage extends Component {
    render() {
        return (
            <div className="admin-page">
                <Navbar />
            </div>
        );
    }
}

export default AdminPage;
