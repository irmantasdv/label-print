import { Fragment } from "react";
import { useSelector } from "react-redux";
import Label from "../components/Label/Label/Label";
import LabelOptions from "../components/Label/LabelOptions/LabelOptions";
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
                <Label 
                sku={sku}
                height={height}
                width={width}
                backGroundColor={backGroundColor}
                description={description}
                sizeDescription={sizeDescription}
                imageUrl={imageUrl}
                imageBorder={imageBorder}
                barcode={barcode}
                backgImage={backgImage}
                colorSku={colorSku}
                sizeSku={sizeSku}
                fontWeightSku={fontWeightSku}
                fontWeightDescription={fontWeightDescription}
                descriptionTextColor={descriptionTextColor}
                descriptionBorder={descriptionBorder}
                skuBorder={skuBorder}
                />
            </main>
        </Fragment>
    );
}

export default HomePage;
