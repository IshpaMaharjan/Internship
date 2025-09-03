import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="home-content">
                <h2>Welcome!</h2>
                <p>You have successfully logged in.</p>
                <button onClick={() => navigate('/')} className="home-button">
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default Home;