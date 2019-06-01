import React, { Component } from 'react';
import Aux from '../Aux Container/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {

        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });

    }

    render () {
        return (
            <Aux>
        {/* higher order component as a wrapper */}
                <Toolbar 
                drawerToggleClicked = {this.sideDrawerToggleHandler}/>  
                <SideDrawer 
                open = {this.state.showSideDrawer}
                closed = {this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}
    


export default Layout;