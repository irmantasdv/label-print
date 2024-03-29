import React from 'react'
import Barcode from "react-barcode";

// function IsPortraitOrLandscape(width, height) {
//     if (width > height) {
//         const difference = parseInt(width - height);
//         const newHeightPerCents = parseInt(difference / height * 100);
//         const newHeight = (300 / 100 * newHeightPerCents) + 300;
//         return {
//             width: 300,
//             height: newHeight
//         }
//     } else {
//         const difference = parseInt(height - width);
//         const newWidthPerCents = parseInt(difference / width * 100);
//         const newWidth = (300 / 100 * newWidthPerCents) + 300;
//         return {
//             width: newWidth,
//             height: 400
//         }
//     }
// }

const TemplateItem = (props) => {

    // const widthHeigthObj = IsPortraitOrLandscape(props.width, props.height);
    // const { width, height } = widthHeigthObj;
    const barcodeWidth = (props.width / 100) * 0.56;
    const barcodeHeight = (props.height / 100) * 17.5;
    const barcodeFontSize = (props.width / 100) * 4;
    const sizeSkuInt = parseInt(props.sizeSku);
    return (
        <div className="card text-center" style={{
            width: props.width,
            height: props.height,
            backgroundColor: props.backGroudColor,
            padding: '12px',
            backgroundImage: props.backgroundImage,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            {props.imageUrl && <div style={{ minHeight: "50%" }}>
                <img src={props.imageUrl} className="card-img-top p-3" style={{ height: "100%", width: "100%", objectFit: "contain", borderStyle: props.imageBorder, margin: 0 }} alt="" />
            </div>}
            <div className="card-body">
                <p className="card-text" style={{ color: props.colorSku, fontSize: props.sizeSkuInt, fontWeight: props.fontWeightSku, borderStyle: props.skuBorder, margin: 0.2 }}>{props.sku}</p>
                <p className="card-text" style={{ fontSize: props.sizeDescription, fontWeight: props.fontWeightDescription, color: props.descriptionTextColor, borderStyle: props.descriptionBorder, margin: 0.2 }}>{props.labelDescription}</p>
                <Barcode value={props.barcode ? props.barcode : '12345'} width={barcodeWidth} textMargin={1} fontSize={barcodeFontSize} height={barcodeHeight} />
            </div>
        </div>
    )
}

export default TemplateItem
