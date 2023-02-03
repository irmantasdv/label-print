import { Fragment } from "react";
import Label from "../components/Label/Label/Label";
import LabelOptions from "../components/Label/LabelOptions/LabelOptions";
import classes from './HomePage.module.css';

const HomePage = () => {

    return (
        <Fragment>
            <main className={classes.main}>
                <LabelOptions />
                <Label />
            </main>
        </Fragment>
    );
}

export default HomePage;
