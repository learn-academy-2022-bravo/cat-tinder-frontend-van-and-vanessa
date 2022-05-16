
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import FoodEdit from './pages/FoodEdit.js'
import FoodIndex from './pages/FoodIndex.js'
import FoodNew from './pages/FoodNew.js'
import FoodShow from './pages/FoodShow.js'
import Home from './pages/Home.js'
import NotFound from './pages/NotFound.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foods: []
    }
  }

  componentDidMount(){
    this.readFood()
  }

readFood = () => {
  fetch("http://localhost:3000/foods")
  .then(response => response.json())
  .then(payload => this.setState({foods: payload}))
  .catch(errors => console.log("Food read errors:", errors))
} 

  createFood = (newlyCreatedFood) => {
    fetch("http://localhost:3000/foods", {
      body: JSON.stringify(newlyCreatedFood),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(() => this.readFood())
    .catch(errors => console.log("Food create errors:", errors))
  }

  updateFood = (food, id) => {
    fetch(`http://localhost:3000/foods/${id}`, {
        body: JSON.stringify(food),
        headers: {
          "Content-Type": "application/json"
        },
        method: "PATCH"
      })
      .then(response => response.json())
      .then(payload => this.readFood())
      .catch(errors => console.log("Food update errors:", errors))
    }

    deleteFood = (id) => {
      fetch(`http://localhost:3000/foods/${id}`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "DELETE"
      })
      .then(response => response.json())
      .then(payload => this.readFood())
      .catch(errors => console.log("delete errors:", errors))
    }


  render() {
    return (
      <Router>
        <Header />
         <Switch>
          
          <Route exact path="/" component={Home} />

          <Route path="/foodindex" render={(props) => <FoodIndex foods={this.state.foods} />} />

          <Route path="/foodedit/:id" render={(props) => {
            let id = props.match.params.id
            let food = this.state.foods.find(food => food.id === +id)
            return <FoodEdit updateFood={this.updateFood} food={food} />
          }} />

          <Route path="/foodnew"
            render={(props) => {
              return <FoodNew createFood={this.createFood} />
            }}
          />

          <Route path="/foodshow/:id" render={(props) => {
            let id = +props.match.params.id
            let food = this.state.foods.find(food => food.id === +id)
            return <FoodShow deleteFood={this.deleteFood} food={food} />
          }} />

          <Route component={NotFound} />
        </Switch>

        <Footer />
      </Router>
    );
  }
}

export default App;
