import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'
import { React } from 'react-router-dom'

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
}

    render() {
        return (
            <div>
                <h2> Food New</h2>

  <Form>
  <FormGroup>
    <Label for="dishname">Dish Name</Label>
    <Input
      type="text"
      name="dishname"
      onChange={this.handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="genre">Genre</Label>
    <Input
      type="text"
      name="genre"
      onChange={this.handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="category">Category</Label>
    <Input
      type="text"
      name="category"
      onChange={this.handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="image">Image Urgl</Label>
    <Input
      type="text"
      name="image`"
      onChange={this.handleChange}
    />
  </FormGroup>
</Form>
<Button onClick={this.handleSubmit} name ="submit"}
</Button>
{ this.state.submitted && <Redirect to="/foodindex"}
            </div>
        );
    }
}

export default FoodNew;
