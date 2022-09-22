import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <div className='nav'>
            <Link className="nav-link" to='/'>Beam Me Home</Link>
        </div>
    )
}

export default Nav