import { Fragment } from "react";
import { useSelector } from "react-redux";
import Label from "../components/Label/Label/Label";
import LabelOptions from "../components/Label/LabelOptions/LabelOptions";
import classes from './HomePage.module.css';

const HomePage = () => {
    const labelComponent = useSelector(state => state.labelComponent.labelComponent);


    const { backGroundColor, labelText, labelSku, imageUrl, imageBorder } = labelComponent;
    return (
        <Fragment>
            <main className={classes.main}>
                <LabelOptions />
                <Label/>
            </main>
        </Fragment>
    );
}

export default HomePage;
