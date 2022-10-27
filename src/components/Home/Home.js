import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/flat-people-with-words-different-languages_23-2147860989.jpg?w=740&t=st=1666877581~exp=1666878181~hmac=7e1b4b985f332edb654840f215ee85b7bf6111e456c6135f921eb56434059b7a")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Do Your dream of being a DraGoMan? Unless you're one of the few lucky ones</p>
                    <Link to="/courses" className="btn btn-primary">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;