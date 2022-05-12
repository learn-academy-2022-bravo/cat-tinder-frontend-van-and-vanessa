import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class FoodNew extends Component {
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
  const { newFood } = this.state
  newFood[e.target.name] =e.target.value
  this.setState ({newFood: newFood})
}

handleSubmit = () => {
      this.props.createFood(this.state.newFood)
      this.setState({submitted: true})
}

    render() {
        return (
            <div>
                <h2>Food New</h2>

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
       Add a Food
       </Button>
</Form>
{ this.state.submitted && <Redirect to="/foodindex" />}

            </div>
        );
    }
}

export default FoodNew;