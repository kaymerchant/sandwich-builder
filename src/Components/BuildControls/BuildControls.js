import React from 'react'
import classes from './BuildControls.module.css'
import mainclasses from '../../MainStyleSheet.module.css'

const buildControls = (props) => {
    let controlPanel = Object.keys(props.ingredients).map(igKey => {
        return (
                <div key={igKey}>
                <div className={classes.Label}>{igKey.toUpperCase()}</div>
                <button className={classes.Button} onClick={() => props.addIndgredients(igKey)}>MORE</button>
                <button className={classes.Button} onClick={() => props.reduceIndgredients(igKey)}>LESS</button>
                </div>
        )
    })

    return (
        <div className={mainclasses.OverallStyle}>
        <div className={classes.MainClass}>
            <p>Sandwich Costs ${props.totalAmount.toFixed(2)}</p>
            {controlPanel}
        </div>
        </div>
    )
}

export default buildControls