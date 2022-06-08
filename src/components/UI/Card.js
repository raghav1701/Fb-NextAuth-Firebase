import React from 'react';

import './Card.css';

const Card = (props) => {
  //since we are passing the content to our wrapper component so we need to render all className inside opening and closing
  const classes = 'card ' + props.className;

  //props.children for getting all the contnet b/w wrapper class card
  return <div className={classes}>{props.children}</div>;
};

export default Card;
