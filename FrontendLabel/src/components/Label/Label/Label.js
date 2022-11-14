import React from 'react';
import Card from '../../UI/Card/Card';
import classes from './Label.module.css';

const Label = (props) => {

    const height = props.heightLabel;
    const width = props.widthLabel;
  
  return (
    <Card>
        <div>
        <h2>Label</h2>
        </div>
        <div className={classes.labelContent} style={{width: width, height: height}}>

</div>
        
    </Card>
  )
}

export default Label