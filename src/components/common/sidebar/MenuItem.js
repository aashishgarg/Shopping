import React from 'react';

const MenuItem = ({item, icon, href, active}) => (
    <li className={`nav-item mT-30 ${active == 'true' ? 'active' : ''}`}>
        <a className="sidebar-link" href={href}>
                <span className="icon-holder">
                  <i className={`c-blue-500 ${icon}`}></i>
                </span>
            <span className="title">{item}</span>
        </a>
    </li>
);

export default MenuItem;
