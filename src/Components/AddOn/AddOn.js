import React from 'react'
import fries from '../../assets/fries.png'
import soda from '../../assets/soda.png'
import cookie from '../../assets/cookie.png'
import chips from '../../assets/chips.png'
import classes from './AddOn.module.css'

let addOnCategory = [fries, soda, cookie,chips]

let addOnValue = ["fries", "soda", "cookie", "chips"]

const addOn = (props) => {
    let addOnDisplay = addOnCategory.map((addOn, index) => {
        let item = addOnValue[index]
        return(
            <div key={item} className={classes.AddOn}>
             <img className={classes.AddOnImage} src={addOn} alt={item}></img>
             <button className={classes.Button}
             onClick={() => props.addAddOn(item)} 
             disabled={props.addOns[item].disabled}>Add @ {props.addOns[item].price.toFixed(2)}</button>
             <button className={classes.Button}
             onClick={() => props.removeAddOn(item)}
             disabled={!props.addOns[item].disabled}>Remove</button>
            </div>
        )
    })
 
    let totalPrice = props.finalPrice.sandwichPrice + props.finalPrice.addOnPrice
 
    let totalAmount = () => {
        if(props.finalPrice.sandwichPrice === 2 && props.finalPrice.addOnPrice > 0) {
            alert("Build your sandwich, addOn has been added")
           
        }
        else if(props.finalPrice.sandwichPrice === 2) {
            return " "
        }
        else {
            return "@ " + totalPrice.toFixed(2)
        }
    }

    
    return ( 
        <div>
            {addOnDisplay}
            <button  className={classes.OrderNow} 
            onClick={props.showsModal}
            >ORDER NOW {totalAmount()}</button>
        </div>
    )
}

export default addOn