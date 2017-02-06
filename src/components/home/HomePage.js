import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Appointment Scheduler</h1>
                <p>This is a small scheduling demo app </p>
                <Link to="scheduler" className="btn btn-primary btn-lg">Start Scheduling</Link>
            </div>
        );
    }
}

export default HomePage;