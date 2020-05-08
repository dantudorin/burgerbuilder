import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])].map((_, index) => {
               return <BurgerIngredient key = {igKey + 1} type = {igKey}/>
            });
        }).reduce((arr, element) => {
            return arr.concat(element);
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients.push(<p>Please start adding ingredients</p>);
    }
    return (
        <div className = {classes.Burger}>
            <BurgerIngredient type = 'bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type = 'bread-bottom'/>
        </div>
    );
}

export default Burger;