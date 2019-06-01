import React from 'react';
import classes from './NavigationItems.module.css';
import NavItemHash from './NavigationItem/NavItemHash'

const navigationItems = () => (
    <ul className = {classes.NavigationItems}>
        {/* <NavigationItem link="/" exact>Home</NavigationItem> */}
        
        <NavItemHash link="/#home" exact>Home</NavItemHash>
        <NavItemHash link="/#projects" exact>Projects</NavItemHash>
        <NavItemHash link="/#contact" exact>Contact</NavItemHash>
    </ul>
);

export default navigationItems;