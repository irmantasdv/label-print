import classes from './Label.module.css';
import { useSelector } from "react-redux";
import Barcode from 'react-barcode';

const Label = (props) => {

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

    const barcodeWidth = (width / 100) * 0.56;
    const barcodeHeight = (height / 100) * 17.5;
    const barcodeFontSize = (width / 100) * 4;
    return (

        <div className="card" style={{
            width: width,
            height: height,
            backgroundColor: backGroundColor,
            padding: '12px',
            backgroundImage: backgImage,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            {props.imageUrl && <div style={{ minHeight: "50%" }}>
                <img src={props.imageUrl} className="card-img-top p-3" style={{ height: "100%", width: "100%", objectFit: "contain", borderStyle: imageBorder, margin: 0 }} alt="" />
            </div>}
            <div className="card-body">
                <p className={`"card-text" ${classes.cardText}`} style={{ color: colorSku, fontSize: sizeSku, fontWeight: fontWeightSku, borderStyle: skuBorder, margin: 0.2 }}>{sku}</p>
                <p className={`"card-text" ${classes.cardText}`} style={{ fontSize: sizeDescription, fontWeight: fontWeightDescription, color: descriptionTextColor, borderStyle: descriptionBorder, margin: 0.2 }}>{description}</p>
                <Barcode value={barcode} width={barcodeWidth} textMargin={1} fontSize={barcodeFontSize} height={barcodeHeight} />
            </div>
        </div>

    )
}

export default Label
