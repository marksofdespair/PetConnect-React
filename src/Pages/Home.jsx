import React from 'react';
import { Link } from 'react-router-dom';
import PetConnectLogo from '../assets/PetConnectLogo.png';

const Home = () => {
    return (
        <div>
            <div>
                <img src={PetConnectLogo} alt="Team Laika logo" />
                <h1>Welcome to PetConnect!</h1>
                <nav>
                    <ul id="simplenav">
                        <li>
                            <Link to="/UserHome">User Panel</Link> {/* Link to UserHome page */}
                        </li>
                        <li>
                            <Link to="/ServiceSearch">Find a Service</Link> {/* Link to ServiceSearch page */}
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                Not a member yet? <Link to="/Login">Join now or Login!</Link>
            </div>
        </div>
    );
};

export default Home;
