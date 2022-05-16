import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'
import { Redirect, NavLink } from 'react-router-dom'

class FoodEdit extends Component {
  constructor(props) {
    super(props)
    this.state ={
      newFood: {
        dishname: "",
        genre: "",
        category: "",
        image: ""
      },
        submitted: false
      }
}
      handleChange = (e) => {
  let { newFood } = this.state
  newFood[e.target.name] = e.target.value
  this.setState({newFood: newFood})
}

  handleSubmit = () => {
    this.props.updateFood(this.state.newFood, this.props.food.id)
          this.setState({submitted: true})
  }

    render() {
        return (
            <div>
                
                <Form>
                <FormGroup>
                  <Label for="dishname">Dish Name</Label>
                  <Input
                    type="text"
                    name="dishname"
                    value={this.state.newFood.dishname}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="genre">Genre</Label>
                  <Input
                    type="text"
                    name="genre"
                    value={this.state.newFood.genre}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="category">Category</Label>
                  <Input
                    type="text"
                    name="category"
                    value={this.state.newFood.category}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="image">Image Url</Label>
                  <Input
                    type="text"
                    name="image"
                    value={this.state.newFood.image}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <Button
                 onClick={this.handleSubmit} >
                     Edit Food!
                     </Button>
              </Form>
              {this.state.submitted && <Redirect to={`/foodshow/${this.props.food.id}`} />}
            </div>
        );
    }
}

export default FoodEdit;
