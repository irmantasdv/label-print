import React from 'react';
import Card from '../../UI/Card/Card';
import classes from './Label.module.css';
import { useSelector } from "react-redux";

const Label = () => {
    const labelSize = useSelector(state => state.labelSize.labelSize);
    const{height,width} = labelSize;
    console.log(height);
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