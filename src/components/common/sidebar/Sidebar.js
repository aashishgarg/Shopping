import React, {Component} from 'react'
import Logo from './Logo'
import Menu from "./Menu";

class Sidebar extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-inner">
                    <Logo/>
                    <Menu/>
                </div>
            </div>
        );
    }
}

export default Sidebar;
