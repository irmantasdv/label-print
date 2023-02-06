import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Label from '../Label/Label';
import classes from './LabelList.module.css';

const LabelList = (props) => {
    const labels = props.labels;
    const navigate = useNavigate();
    const showLableHandler = (label) => {
        navigate(`/labels/${label.id}`,{
            state:{
                label: label
            } 
        })
    }
    return (<div className='container'>
        <div className='row text-center m-5'>
        <Link to={'/templates'}><button className='btn btn-success'>Choose Template</button></Link>
        </div>
        <section className={classes.labelList}>
            
            {labels.map(label => {
                return (
                    <div key={label.id} onClick={() =>showLableHandler(label)} to={`/labels/${label.id}`}>
                    <Label 
                        title={label.title}/>
                    </div>

                )
            })}
        </section>
    </div>
      
    )
}

export default LabelList
