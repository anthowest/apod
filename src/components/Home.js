import React from "react";
import { Link } from 'react-router-dom';
import Header from "./Header";

const Home = () => {
    return (
        <div>
            <Header />
            <Link to='/apod'>Beam Me Up</Link>
        </div>
    )
}

export default Home