import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css'

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link = '/' active>BurgerBuilder</NavigationItem>
            <NavigationItem link = '/'>Checkout</NavigationItem>
        </ul>
    )
}
export default NavigationItems;