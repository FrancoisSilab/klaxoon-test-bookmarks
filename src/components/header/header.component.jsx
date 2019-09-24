import React from 'react';
import {Link} from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <nav className='header'>
        <Link className="link" to='/'>List</Link>
        <Link className="link" to='/add-link'>Add Links</Link>
    </nav>
);

export default Header;
