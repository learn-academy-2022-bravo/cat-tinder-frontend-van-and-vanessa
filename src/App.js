import React, { Component } from 'react'
import foods from './mockFood.js'
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
  constructor(props){
    super(props)
    this.state = {
      foods: foods
    }
  }

  render() {
    console.log(this.state.foods)
    return (
      <Router>
       <Header/>

       <Switch>
        <Route exact path="/" component= {Home}/>

        <Route path="/foodindex" render={(props) => <FoodIndex foods={this.state.foods} />} />

        <Route path="/foodedit" component={FoodEdit}/>



        <Route path="/foodnew" component={FoodNew}/>

        <Route path="/foodshow/:id" render={(props) => {
          let id = +props.match.params.id
          let food = this.state.foods.find(foodObject => foodObject.id === id)
          return <FoodShow food={food}/>
        }}/>

        <Route component={NotFound}/>
      </Switch>

      <Footer/>
      </Router>
    );
  }
}

export default App;
