import React from 'react';

const NestedMenuItem = ({item, icon, href, active, subMenus}) => (
    <li className="nav-item dropdown">
        <a className="dropdown-toggle" href="javascript:void(0);">
        <span className="icon-holder">
            <i className={`c-orange-500 ${icon}`}></i>
        </span>
        <span className="title">Tables</span>
        <span className="arrow">
            <i className="ti-angle-right"></i>
        </span>
        </a>
        <ul className="dropdown-menu">
            {
                subMenus.map((subMenu) =>
                    <li>
                        <a className='sidebar-link' href={subMenu.href}>{subMenu.item}</a>
                    </li>
                )
            }
        </ul>
    </li>
);

export default NestedMenuItem;
