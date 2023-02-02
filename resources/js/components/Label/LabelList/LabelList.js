import React from 'react';
import Label from '../Label/Label';
import classes from './LabelList.module.css';

const LabelList = (props) => {
    const labels = props.labels;
    return (
        <section className={classes.labelList}>
            {labels.map(label => {
                return (
                    <Label key={label.id}
                        title={label.title}/>
                )
            })}
        </section>
    )
}

export default LabelList
