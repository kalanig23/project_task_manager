import React from 'react';
import formattedDate from '../utils/dateFormat';
import './header.css';

const Header = () => {
    return(
        <div className='header-container'>
            <h4 className='user-name'><span>Welcome!&nbsp; </span>Kumar</h4>
            <h4 className='date'>{formattedDate}</h4>
        </div>
    )
}

export default Header;