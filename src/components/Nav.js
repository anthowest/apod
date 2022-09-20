import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <div className='nav'>
            <ul>
            <Link to='/'>Beam Me Home</Link>
            </ul>
        </div>
    )
}

export default Nav