import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className} noPrint`}>{props.children}
        <style>
            {`@media print {.noPrint{display: none;}}`}
        </style>
    </div>
  )
}

export default Card
