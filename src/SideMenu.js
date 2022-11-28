import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

class SideMenu extends React.Component {

    render() {
        return (
            <div>
                <Sidebar>
                    <Menu>
                    <MenuItem routerLink={<Link to="App" />}> Cats </MenuItem>
                    <MenuItem routerLink={<Link to="/Tensorflow" />}> Blank </MenuItem>
                    </Menu>
                </Sidebar>
            </div>
        );
    }
}

export default SideMenu;