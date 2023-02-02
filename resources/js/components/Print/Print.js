import React from 'react';
import classes from './Print.module.css';

const Print = (props) => {
    return (

            <button className={classes.printButton} onClick={() => window.print()}>{props.children}</button>

    )
}

export default Print
