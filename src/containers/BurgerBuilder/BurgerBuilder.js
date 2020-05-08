import React, {useState} from 'react'
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';


const BurgerBuilder = () => {
    let [ingredientsState, setIngredientsState] = useState({
        ingredients : {
            salad : 0,
            bacon : 0,
            chese : 0,
            meat : 0    
        }
    });

    return(
        <Aux >
            <Burger ingredients = {ingredientsState.ingredients} />
            <div>Build controls</div>
        </Aux>
    );
}

export default BurgerBuilder;