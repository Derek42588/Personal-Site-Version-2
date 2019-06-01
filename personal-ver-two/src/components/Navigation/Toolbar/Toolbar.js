import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className = {classes.Toolbar}>
        <div className = {classes.MenuButton}>
            <DrawerToggle clicked = {props.drawerToggleClicked}/>
        </div>
        <nav className = {classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;