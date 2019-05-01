import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => (
    <ul className="sidebar-menu scrollable pos-r">
        <MenuItem item='Users' icon='ti-home' href='index.html' active='true'/>
        <MenuItem item='Posts' icon='ti-home' href='index.html' active='false'
                  subMenus={[{item: 'Create', href: 'create.html'}, {item: 'List', href: 'list.html'}]}/>
    </ul>
);

export default Menu;
