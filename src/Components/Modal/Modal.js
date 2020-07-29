import React from 'react'
import classes from './Modal.module.css'

let addOns = ["Fries", "Soda", "Cookie", "Chip"]
const modal = (props) => {

    const listOfIngredients = Object.keys(props.toDisplay.ingredients).map(igKey =>{
        return (
            <li key={igKey}>{igKey.toUpperCase()} : {props.toDisplay.ingredients[igKey]}</li>
        )
    })

    let counter = 0;
    const listOfAddOn = Object.keys(props.toDisplay.addOn).map((igKey, index) => {
        if(props.toDisplay.addOn[igKey].disabled === true) {
            counter++;
                return <li key={index}>{addOns[index]}</li>
        }
    })

    let placeOrder = () => {
        alert("Order has been placed sucessfully");
    }
    let totalPrice = 0

        if(props.toDisplay.sandwichPrice === 2.00) {
            totalPrice= 0
        }
        else {
            totalPrice = props.toDisplay.sandwichPrice + props.toDisplay.addOnPrice
        }
    
    return (
        <div className={classes.MainClass}>
            <div className={classes.Modal}>
                <div className={classes.Close} onClick={props.closeModal}>Close</div>
                <div className={classes.Title}>ORDER SUMMARY</div>
                <div className={classes.Title}>Total Amount : ${totalPrice.toFixed(2)}</div>
                {listOfIngredients}
                {"AddOns : "}
                {counter === 0? "None" : listOfAddOn}<br/>
                <button className={classes.Button} onClick={placeOrder}>Place Order</button>
                <button className={classes.Button} onClick={props.closeModal}>Cancel</button>
                <div className={classes.Title}>ENJOY YOU MEAL</div>
            </div>
        </div>
    )
}

export default modal