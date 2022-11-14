import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button disabled={props.disabled} type={props.type} onClick={props.onClick} className={`${classes.button} ${props.className}`}>{props.children}</button>
  )
}

export default Button