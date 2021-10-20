import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import Img from "../../Image/img-9.jpg";
import Imge from "../../Image/img-2.jpg";
import Imgs from "../../Image/img-3.jpg";
import Imges from "../../Image/img-4.jpg";
import Imgies from "../../Image/img-5.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Img}
              text="Explore the hidden waerfall deep inside
            the Amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={Imge}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="luxury"
              path="/services"
            />
            <CardItem
              src={Imgs}
              text="Explore the hidden waerfall deep inside
            the Amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={Imges}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="luxury"
              path="/services"
            />
            <CardItem
              src={Imgies}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
