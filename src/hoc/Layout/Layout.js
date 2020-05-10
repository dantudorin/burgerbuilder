import React, {useState} from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from '../Layout/Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
    const [state, setState] = useState({
        showSideDrawer : false
    });

    const sideDrawerClosedHandler = () => {
        const newState = {...state.showSideDrawer};
        newState.showSideDrawer = false;

        setState(newState);
    }

    const sideDrawerToggleHandler = () => {
        const newState = {...state.showSideDrawer};
        newState.showSideDrawer = !newState.showSideDrawer;

        setState(newState);
        console.log(newState);
    }
    return (
        <Aux>
            <Toolbar drawerToggleClicked = {sideDrawerToggleHandler}/>
            <SideDrawer open = {state.showSideDrawer} closed = {sideDrawerClosedHandler}/>
            <main className = {classes.Content}>
                {props.children}
            </main>
        </Aux>
    );

}

export default Layout;