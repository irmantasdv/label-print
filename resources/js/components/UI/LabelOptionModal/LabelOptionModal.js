import classes from './LabelOptionModal.module.css';
import Card from "../Card/Card";

const LabelOptionModal = (props) => {

    return <Card className={classes.modal}>
    <header className={classes.header}><h2>{props.title}</h2></header>
        <div className={classes.content}>{props.children}</div>
        <footer className={classes.actions}>
            <button className='col-sm-3 btn btn-outline-secondary btn-sm m-2' onClick={props.onClick}>Close</button>
        </footer>
    </Card>
}

export default LabelOptionModal;
