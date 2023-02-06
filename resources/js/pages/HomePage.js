import { Fragment } from "react";
import { useSelector } from "react-redux";
import Label from "../components/Label/Label/Label";
import LabelOptions from "../components/Label/LabelOptions/LabelOptions";
import Print from "../components/Print/Print";
import classes from './HomePage.module.css';

const HomePage = () => {
    const labelComponent = useSelector(state => state.labelComponent.labelComponent);
    const {
        height,
        width,
        backGroundColor,
        description,
        sizeDescription,
        sku,
        imageUrl,
        imageBorder,
        barcode,
        backgImage,
        colorSku,
        sizeSku,
        fontWeightSku,
        fontWeightDescription,
        descriptionTextColor,
        descriptionBorder,
        skuBorder
    } = labelComponent;
    return (
        <Fragment>
            <main className={classes.main}>
                <LabelOptions />
                <Print>
                <Label 
                imageUrl={imageUrl}
                />
                </Print>
            </main>
        </Fragment>
    );
}

export default HomePage;
