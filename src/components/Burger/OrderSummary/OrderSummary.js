import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                        <span style = {{textTransform : 'capitalize'}}>
                            {igKey}
                        </span>
                        : {props.ingredients[igKey]}
                    </li>
        });
    

    return (
        <Auxiliary>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
        </Auxiliary>
    );
};

export default OrderSummary;