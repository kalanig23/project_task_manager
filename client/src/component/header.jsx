import React from 'react';
import './header.css';

const Header = () => {
    return(
        <div className='header-container'>
            <h4 className='user-name'><span>Welcome!&nbsp; </span>Kumar</h4>
            <h4 className='date'>12th Jan, 2024</h4>
        </div>
    )
}

export default Header;