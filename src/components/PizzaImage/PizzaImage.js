import React from 'react'
import classes from './PizzaImage.css'
import PizzaImage from '../../assets/pizza.jpg'

const pizzaImage = (props) => {

    return (
        <div className={classes.pizzaImage}>
            <img src={PizzaImage} alt={} className={classes.PizzaImg}/>
        </div>
    )
}

export default pizzaImage