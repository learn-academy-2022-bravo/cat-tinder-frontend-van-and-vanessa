import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
  //test area




// //   test area
class FoodIndex extends Component {

        constructor(props) {
            super(props);
            this.state = { activeIndex: 0 };
            this.next = this.next.bind(this);
            this.previous = this.previous.bind(this);
            this.goToIndex = this.goToIndex.bind(this);
            this.onExiting = this.onExiting.bind(this);
            this.onExited = this.onExited.bind(this);
          }
        


          onExiting() {
            this.animating = true;
          }
        
          onExited() {
            this.animating = false;
          }
        
          next() {
            if (this.animating) return;
            const nextIndex = this.state.activeIndex === this.props.foods.length - 1 ? 0 : this.state.activeIndex + 1;
            this.setState({ activeIndex: nextIndex });
          }
        
          previous() {
            if (this.animating) return;
            const nextIndex = this.state.activeIndex === 0 ? this.props.foods.length - 1 : this.state.activeIndex - 1;
            this.setState({ activeIndex: nextIndex });
          }
        
          goToIndex(newIndex) {
            if (this.animating) return;
            this.setState({ activeIndex: newIndex });
          }
        
          render() {
            const { activeIndex } = this.state;
        
            const slides = this.props.foods.map((item) => {
              return (
                <CarouselItem
                  onExiting={this.onExiting}
                  onExited={this.onExited}
                  key={item.src}
                >







            <a href="/foodshow/1">
            <img className= "d-sm-block w-50 mx-auto" src={item.image} alt={item.dishname} />
                 </a>
                  <CarouselCaption captionText={item.dishname} captionHeader={item.name} />
                </CarouselItem>
              );
            });
        
            return (
              <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
              >
                <CarouselIndicators items={this.props.foods} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
              </Carousel>
            );
          }
    }
    

     
        
        

// test area 2

/////////////


// <NavLink to={`/foodedit/${this.props.food.id}`}>
//                     <Button>Edit Food Profile</Button>
//                   </NavLink>

//                   <NavLink to= "/foodindex">
//                     <Button onClick={ () => this.props.readFood(this.props.food.id)}> Delete Food Profile </Button>
//                   </NavLink>


////////////////























// test area 2
//         class FoodIndex extends Component {
//             render() {
//             return (

//             <div>
//                 <h2>Select a Dish</h2>
//                 {this.props.foods && this.props.foods.map(food => {
//                 return(
//                   <p key={food.id}>
//                   <NavLink to={`/foodshow/${food.id}`}>{food.dishname}</NavLink>
//                   </p>
//                 )
//                 })}
//             </div>
//         )
//     }
// }

export default FoodIndex;
