import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'
import { Redirect , NavLink } from 'react-router-dom'

class FoodShow extends Component {
    render() {
      console.log(this.props.food);
        return (
            <div>
                <h2>Food Show</h2>
                {this.props.food &&
                  <div>
                <p> {this.props.food.dishname}</p>
                <p> {this.props.food.genre}</p>
                <p> {this.props.food.category}</p>
                <img src={this.props.food.image} width="200" height="200" />
                  <NavLink to={`/foodedit/${this.props.food.id}`}>
                    <Button>Edit Food Profile</Button>
                  </NavLink>

                  <NavLink to={`/foodindex/${this.props.food.id}`}>
                    <Button> Delete Food Profile </Button>
                  </NavLink>
                  
                  </div>}
            </div>
        );
    }
}

export default FoodShow;
