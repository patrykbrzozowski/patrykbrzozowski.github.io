import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function MoreCards() {
  return (
    <div className="cards">
      <h1>Sprawdź ciekawe kierunki podróży!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/oslo-m.jpg"
              title="Oslo – atrakcje i miejsca, które warto zobaczyć"
              path="/oslo"
            />
            <CardItem
              src="images/maledives-m.jpg"
              title="Malediwy: 10 rzeczy które warto zrobić i zobaczyć"
              path="/maldives"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/madagascar.jpg"
              title="Madagaskar - co warto wiedzieć przed podróżą i co ze sobą zabrać"
              path="/madagascar"
            />
            <CardItem
              src="images/lake.jpg"
              title="10 miejsc w Szwajcari, które musisz zobaczyć"
              path="/switzerland"
            />
            <CardItem
              src="images/water.jpg"
              title="Nurkowanie z żółwiami na Teneryfie"
              path="/tenerife"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MoreCards;
