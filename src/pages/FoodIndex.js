import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class FoodIndex extends Component {
    render() {
        return (
            <div>
                <h2>Food Index</h2>
                {this.props.foods && this.props.foods.map(food => {
                return(
                  <p key={food.id}>
                  <NavLink to={`/foodshow/${food.id}`}>{food.dishname}</NavLink>
                  </p>
                )
                })}
            </div>
        )
    }
}

export default FoodIndex;
