import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'
import { Redirect , NavLink } from 'react-router-dom'

class FoodShow extends Component {
    render() {
      console.log(this.props.food);
        return (
          
              <div> 
                {/* <h2>Food Show</h2> */}
                {this.props.food &&
                  <div >
                <p> {this.props.food.dishname}</p>
                <p> {this.props.food.genre}</p>
                <p> {this.props.food.category}</p>
                <img className= "d-sm-block w-50 mx-auto" src={this.props.food.image} 
                  />
                  <NavLink to={`/foodedit/${this.props.food.id}`}>
                    <Button>Edit Food Profile</Button>
                  </NavLink>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
                  <NavLink to="/foodindex">
                <Button onClick={() => this.props.deleteFood(this.props.food.id)} name= "submit">
                Delete Food Profile
               </Button>
               </NavLink>
                  </div>}
            </div>
        );
    }
}

export default FoodShow;
