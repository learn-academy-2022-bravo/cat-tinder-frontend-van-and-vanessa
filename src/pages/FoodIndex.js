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

  const items = [
    {
        src: "https://cdn.pixabay.com/photo/2020/01/07/05/52/spaghetti-4746831_1280.jpg", 
     
      text: 'Spaghetti',
      
    
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Sushi_Roll.jpg",
        
        text: 'Sushi',
     
    },
    {
      src: "https://assets.rbl.ms/24962678/origin.jpg",
    
     text: 'Eggs Benedict',
     
    }
  ];





//   test area
class FoodIndex extends Component {
    // render() {
    //     return (
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
            const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
            this.setState({ activeIndex: nextIndex });
          }
        
          previous() {
            if (this.animating) return;
            const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
            this.setState({ activeIndex: nextIndex });
          }
        
          goToIndex(newIndex) {
            if (this.animating) return;
            this.setState({ activeIndex: newIndex });
          }
        
          render() {
            const { activeIndex } = this.state;
        
            const slides = items.map((item) => {
              return (
                <CarouselItem
                  onExiting={this.onExiting}
                  onExited={this.onExited}
                  key={item.src}
                >
                  <img className="d-sm-block w-50 mx-auto" src={item.src} alt={item.altText} />
                  <CarouselCaption captionText={item.text} captionHeader={item.caption} />
                </CarouselItem>
              );
            });
        
            return (
              <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
              >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
              </Carousel>
            );
          }
        }
        
        
        

// test area 2
















// test area 2

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


