import React, { Component } from 'react'
import BuildControls from '../../Components/BuildControls/BuildControls'
import Sandwich from '../../Components/Sandwich/Sandwich'
import AddOn from '../../Components/AddOn/AddOn'
import Modal from '../../Components/Modal/Modal'
import NavBar from '../../Components/NavBar/NavBar'
import classes from './SandwichBuilder.module.css'

class SandwichBuilder extends Component {
    state = {
        ingredients : {
            cheese : 0,
            meat : 0,
            salad : 0,
            tomato : 0
        },
        ingredientsPrice : {
            cheese: 0.75,
            meat : 1.00,
            salad : 0.50,
            tomato : 0.25
        },
        addOn : {
            fries : {
                price : 2.50,
                disabled : false
            },
            soda : {
                price : 1.50,
                disabled : false
            },
            cookie : {
                price : 2.00,
                disabled : false
            },
            chips : {
                price : 2.00,
                disabled : false
            }
        },
        sandwichPrice : 2.00,
        addOnPrice : 0.00,
        modalStatus : false
    }

    componentDidMount() {
        document.title = "Sandwich Express"
      }

    ingredientsAddHandler = (type) => {
        let updatedCount = this.state.ingredients[type] + 1;
        let indgredientsToUpdate = {...this.state.ingredients}
        indgredientsToUpdate[type] = updatedCount
        this.setState({ingredients : indgredientsToUpdate})

        let originalPrice = this.state.sandwichPrice
        let updatedPrice = originalPrice + this.state.ingredientsPrice[type]
        this.setState({sandwichPrice : updatedPrice})
    }

    ingredientsRemoveHandler = (type) => {
        let actaulCount = this.state.ingredients[type];
        if(actaulCount === 0) {
            return
        }
        let updatedCount = actaulCount - 1;
     
        let indgredientsToUpdate = {...this.state.ingredients}
        indgredientsToUpdate[type] = updatedCount
        this.setState({ingredients : indgredientsToUpdate})
      

        let originalPrice = this.state.sandwichPrice
        let updatedPrice = originalPrice - this.state.ingredientsPrice[type]
        this.setState({sandwichPrice : updatedPrice})
    }

    addAddOnHandler = (type) => {
        let priceOfAddOn = this.state.addOn[type].price
        let updatedAddOnPrice = this.state.addOnPrice + priceOfAddOn
        let disabledStatus ={...this.state.addOn}
        disabledStatus[type].disabled = true
        this.setState({addOn : disabledStatus})
        this.setState({addOnPrice : updatedAddOnPrice})
    }

    removeAddOnHandler = (type) => {
        let priceToDelete = this.state.addOn[type].price
        let updatedAddOnPrice = this.state.addOnPrice - priceToDelete
        let disabledStatus ={...this.state.addOn}
        disabledStatus[type].disabled = false
        this.setState({addOn : disabledStatus})
        this.setState({addOnPrice : updatedAddOnPrice})

    }

    displayModalHandler = () => {
      
        this.setState({modalStatus:true})
    }

    closeModalhandler = () => {
       
        this.setState({modalStatus:false})
    }
    render () { 
        return (
            <div>
                <div className={classes.Main}>Express Sandwich</div>
            <NavBar showModal = {this.displayModalHandler}/>
            <Sandwich ingredients={this.state.ingredients}/>
            <BuildControls ingredients={this.state.ingredients}
            addIndgredients={this.ingredientsAddHandler}
            reduceIndgredients={this.ingredientsRemoveHandler}
            totalAmount={this.state.sandwichPrice}/>
            <AddOn addOns={this.state.addOn}
            addAddOn={this.addAddOnHandler}
            removeAddOn={this.removeAddOnHandler}
            finalPrice = {this.state}
            showsModal = {this.displayModalHandler}/>
            {this.state.modalStatus ?
            <Modal toDisplay={this.state}
            closeModal={this.closeModalhandler}/> : null}
        </div>
        ) 
    }
}

export default SandwichBuilder