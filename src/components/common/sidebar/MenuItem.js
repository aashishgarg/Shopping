import React from 'react';
import {Link} from 'react-router-dom';

const MenuItem = ({item, icon, href, active}) => (
    <li className={`nav-item mT-30 ${active === 'true' ? 'active' : ''}`}>
        <Link to={'/admin/users'} className="sidebar-link">
            <span className="icon-holder">
                  <i className={`c-blue-500 ${icon}`}></i>
                </span>
            <span className="title">{item}</span>
        </Link>
    </li>
);

export default MenuItem;
