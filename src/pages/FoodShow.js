import React, { Component } from 'react';

class FoodShow extends Component {
    render() {
      console.log(this.props.food);
        return (
            <div>
                <h2> Food Show</h2>
                <p> {this.props.food.dishname}</p>
                <p> {this.props.food.genre}</p>
                <p> {this.props.food.category}</p>
                <img src={this.props.food.image} width="200" height="200" />
            </div>
        );
    }
}

export default FoodShow;
