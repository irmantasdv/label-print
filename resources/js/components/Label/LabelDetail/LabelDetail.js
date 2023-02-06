import React from 'react'
import { Link } from 'react-router-dom'
import Print from '../../Print/Print'
import { useLocation } from "react-router-dom";

const LabelDetail = () => {
    const location = useLocation();
    let label = location.state.label;
    console.log(label)

    // Cia reikia sujungti template su Labels one to many ir tada per props perduoti ir template param, tokius kaip width,heigth.
  return (
    <div className='container text-center'>
        <Link to='/labels'><button className='btn btn-secondary mt-4'>Back to Templates</button></Link>
        <Print>
        <div>Hi </div>
        <div className="card" style={{
            width: label.width,
            height: label.height,
            backgroundColor: label.backGroundColor,
            padding: '12px',
            backgroundImage: label.backgImage,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            {/* {props.imageUrl && <div style={{ minHeight: "50%" }}>
                <img src={props.imageUrl} className="card-img-top p-3" style={{ height: "100%", width: "100%", objectFit: "contain", borderStyle: imageBorder, margin: 0 }} alt="" />
            </div>}
            <div className="card-body">
                <p className={`"card-text" ${classes.cardText}`} style={{ color: colorSku, fontSize: sizeSku, fontWeight: fontWeightSku, borderStyle: skuBorder, margin: 0.2 }}>{sku}</p>
                <p className={`"card-text" ${classes.cardText}`} style={{ fontSize: sizeDescription, fontWeight: fontWeightDescription, color: descriptionTextColor, borderStyle: descriptionBorder, margin: 0.2 }}>{description}</p>
                <Barcode value={barcode} width={barcodeWidth} textMargin={1} fontSize={barcodeFontSize} height={barcodeHeight} />
            </div> */}
        </div>
        </Print>
    </div>
  )
}

export default LabelDetail