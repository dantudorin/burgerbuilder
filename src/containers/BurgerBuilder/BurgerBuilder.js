import React, {useState} from 'react'
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese : 0.4,
    meat : 1.3,
    bacon : 0.3
};

const BurgerBuilder = () => {
    let [ingredientsState, setIngredientsState] = useState({
        ingredients : {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0    
        },
        totalPrice: 4,
        purchasable : false
    });

    const purchasableBurger = (ingredients) => {
        let sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, element)=> sum + element, 0);
        console.log(sum);
        if(sum > 0 ) return true;

        return false;
    }

    const addIngredientHandler = (type) => {
        ingredientsState.ingredients[type] = ingredientsState.ingredients[type] + 1;
        const priceAddition = INGREDIENT_PRICES[type];
        ingredientsState.totalPrice = ingredientsState.totalPrice + priceAddition;
        const newState = {
            ingredients : ingredientsState.ingredients,
            totalPrice : ingredientsState.totalPrice,
        }
        newState.puchasable = purchasableBurger(newState.ingredients);
        setIngredientsState(newState);
        console.log(newState);

    }

    const removeIngredientHandler = (type) => {
        
        if(ingredientsState.ingredients[type] - 1 < 0 ) {
            ingredientsState.ingredients[type] = 0;

        } else {
            ingredientsState.ingredients[type] = ingredientsState.ingredients[type] - 1;
            const priceRemoval = INGREDIENT_PRICES[type];
            ingredientsState.totalPrice = ingredientsState.totalPrice - priceRemoval;
        }
        const newState = {
            ingredients : ingredientsState.ingredients,
            totalPrice : ingredientsState.totalPrice,
        };
        newState.puchasable = purchasableBurger(newState.ingredients);
        setIngredientsState(newState);
        console.log(newState);
    }

    let disabledInfo = {...ingredientsState.ingredients};
    for(let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return(
        <Aux >
            <Modal ingredients = {ingredientsState.ingredients}/>
            <Burger ingredients = {ingredientsState.ingredients} />
            <BuildControls 
                ingredientAdded = {addIngredientHandler}
                ingredientSubstract = {removeIngredientHandler}
                disabled = {disabledInfo}
                price = {ingredientsState.totalPrice}
                purchasable = {!ingredientsState.puchasable}
            />
        </Aux>
    );
}

export default BurgerBuilder;