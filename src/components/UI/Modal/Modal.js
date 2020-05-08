import React from 'react';
import classes from './Modal.module.css';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';
const Modal = (props) => {
   return(
    <div className = {classes.Modal}>
        <OrderSummary ingredients = {props.ingredients}/>            
    </div>  
   ); 
}

export default Modal;