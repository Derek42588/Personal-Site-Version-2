import React from 'react';
import {NavHashLink as NavLink} from 'react-router-hash-link';
import classes from './NavItemHash.module.css';

const navItemHash = (props) => (
    <li className = {classes.NavigationItem}>
        <NavLink
        smooth
        exact = {props.exact}
        // activeClassName = {classes.active}
        to={props.link}
        location={{pathname: document.location.pathname + document.location.hash}}
        >{props.children}
        
        </NavLink>
    </li>
);

export default navItemHash;