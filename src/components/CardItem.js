import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img
              className="cards__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__title">{props.title}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
