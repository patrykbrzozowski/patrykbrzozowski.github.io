import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1>NATURA</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/nature1.jpg"
              title="Zorza polarna - Lorem ipsum dolor, sit amet consectetur adipisicing elit."
              path="/aurora"
            />
            <CardItem
              src="images/nature2.jpg"
              title="Burza - Lorem ipsum dolor, sit amet consectetur adipisicing elit."
              path="/storm"
            />
            <CardItem
              src="images/nature3.jpg"
              title="Jezioro - Lorem ipsum dolor, sit amet consectetur adipisicing elit."
              path="/lake"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
