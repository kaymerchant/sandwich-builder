import React from 'react'
import sandwich from '../../assets/sandwich.png'
import classes from './NavBar.module.css'

const navBar = (props) => {
    return (
        <div className={classes.MainClass}>
            <img className={classes.Logo} src={sandwich} alt={"Sandwich"}></img>
            <div className={classes.Button} onClick={props.showModal}>Order Now</div>
        </div>
    )
}

export default navBar