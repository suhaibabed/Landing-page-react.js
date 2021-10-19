import React from "react";
import CardItem from "./CardItem";
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
            src='../../Image/img-9.jpg'
            text='Explore the hidden waerfall deep inside
            the Amazon jungle'
            label='Adventure'
            path='/services'
            />
            <CardItem 
            src='../../Image/img-2.jpg'
            text='Travel through the Islands of Bali in a Private Cruise'
            label='luxury'
            path='/services'
            />
             <CardItem 
            src='../../Image/img-9.jpg'
            text='Explore the hidden waerfall deep inside
            the Amazon jungle'
            label='Adventure'
            path='/services'
            />
            <CardItem 
            src='../../Image/img-2.jpg'
            text='Travel through the Islands of Bali in a Private Cruise'
            label='luxury'
            path='/services'
            />
             <CardItem 
            src='../../Image/img-2.jpg'
            text='Travel through the Islands of Bali in a Private Cruise'
            label='luxury'
            path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
