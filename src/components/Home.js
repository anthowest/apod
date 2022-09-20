import React from "react";
import { Link } from 'react-router-dom';
import Header from "./Header";

const Home = () => {
    return (
        <>
            <Header />
            <div className="home">
                <Link className="home-link" to='/apod'>Beam Me Up</Link>
            </div>
        </>
    )
}

export default Home