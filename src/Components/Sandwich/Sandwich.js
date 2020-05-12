import React from 'react'
import SandwichIngredients from '../SandwichIngredients/SandwichIngredients' 
import classes from './Sandwich.module.css'
import mainclasses from '../../MainStyleSheet.module.css'

const sandwich = (props) => {
    let count = 0;

    let transformedIndgredients = Object.keys(props.ingredients).map(igKey => {
        count += props.ingredients[igKey]
        return [...Array(props.ingredients[igKey])].map(
            ((_, i) => {
                return <SandwichIngredients key={igKey+i} ingredients={igKey}/>
            }
        ))
    })

    if(count === 0) {
        transformedIndgredients = <p className={classes.Text}>Add some ingredients</p>
    }
    return (
        <div className={mainclasses.OverallStyle}>
        <div className={classes.MainClass}>
            <SandwichIngredients ingredients={"breadTop"}/>
            {transformedIndgredients}
            <SandwichIngredients ingredients={"breadBottom"}/>
        </div>
        </div>
    )
}

export default sandwich