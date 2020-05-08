import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label : 'Salad', type : 'salad'},
    {label : 'Bacon', type : 'bacon'},
    {label : 'Cheese', type : 'cheese'},
    {label : 'Meat', type : 'meat'},
];

const BuildControls = (props) => {
    return(
        <div className={classes.BuildControls}>
            <p>Current price : <strong>{props.price.toFixed(2)} </strong> &#36;</p>
            {controls.map(ctrl => (
                <BuildControl key = {ctrl.label} 
                              label={ctrl.label} 
                              add={() => props.ingredientAdded(ctrl.type)}
                              remove = {() => props.ingredientSubstract(ctrl.type)}
                              disabled = {props.disabled[ctrl.type]}
                              />
            ))}
            <button className = {classes.OrderButton} disabled = {props.purchasable}>ORDER NOW!</button>
        </div>
    );
}

export default BuildControls;