import React from 'react'
import classes from './SandwichIngredients.module.css'

const sandwichIngredients = (props) => {
    let ingredientsToAdd = null

        switch(props.ingredients) {
            case ('breadTop'):
                ingredientsToAdd = <div className={classes.BreadTop}></div>
                break;
            case ('breadBottom'):
                ingredientsToAdd = <div className={classes.BreadBottom}></div>
                break;
            case ('cheese'):
                ingredientsToAdd = <div className={classes.Cheese}></div>
                break;
            case ('meat'):
                ingredientsToAdd = <div className={classes.Meat}></div>
                break;  
            case ('salad'):
                ingredientsToAdd = <div className={classes.Salad}></div>
                break;
            case ('tomato'):
                ingredientsToAdd = <div className={classes.Tomato}></div>
                break;
            default:
                ingredientsToAdd = null;
                break;
    }
    return(
        ingredientsToAdd
    )
    }
    

export default sandwichIngredients