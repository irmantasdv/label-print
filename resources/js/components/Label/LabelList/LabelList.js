import React, { useEffect, useState } from 'react';
import Barcode from 'react-barcode';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Print from '../../Print/Print';
import Label from '../Label/Label';
import classes from './LabelList.module.css';

const LabelList = (props) => {

    const labels = props.labels;
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
    // console.log("LABELS", labels)
    console.log("labelComponent Redux imageUrl", imageUrl)
    const barcodeWidth = (width / 100) * 0.56;
    const barcodeHeight = (height / 100) * 17.5;
    const barcodeFontSize = (width / 100) * 4;

    // const deleteLabelHandler = (id) => {

    //     fetch(`http://127.0.0.1:8000/api/labels/${id}`,
    //         {
    //             method: 'DELETE'
    //         }
    //     )
    //         // .then(dispatch(templateActions.removeTemplateFromItems(id)))
    //         .then(response => response.json)
    //         .catch(error => console.log(error))

    // }
    // useEffect(() => {

    // }, [deleteLabelHandler]);

    return (
        <>
            <div className='text-center m-4'> <Link to={'/templates'}><button className="btn btn-secondary">Change template</button></Link></div>
            <section className={classes.labelList}>
                {labels.map(label => {
                    return (
                        // <Label key={label.id}
                        //     title={label.title}
                        //     sku={label.sku}
                        //     height={label.height}
                        //     width={label.width}
                        //     backGroundColor={label.backGroundColor}
                        //     description={label.description}
                        //     sizeDescription={label.sizeDescription}
                        //     imageUrl={label.imageUrl}
                        //     imageBorder={label.imageBorder}
                        //     barcode={label.barcode}
                        //     backgImage={label.backgImage}
                        //     colorSku={label.colorSku}
                        //     sizeSku={label.sizeSku}
                        //     fontWeightSku={label.fontWeightSku}
                        //     fontWeightDescription={label.fontWeightDescription}
                        //     descriptionTextColor={label.descriptionTextColor}
                        //     descriptionBorder={label.descriptionBorder}
                        //     skuBorder={label.skuBorder}
                        // />
                        <div>
                            <div>
                                <Link to={`/labels/${label.id}`}><button className="btn btn-secondary">Edit</button></Link>
                                <button className="btn btn-danger m-2" onClick={() => props.deleteLabelHandler(label.id)}>Delete</button>
                            </div>
                            <Print>
                                <div className="card" style={{
                                    width: width,
                                    height: height,
                                    backgroundColor: backGroundColor,
                                    padding: '12px',
                                    backgroundImage: backgImage,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}>
                                    {/* If component (like sku or image) is missing in Template redux, then component if hidden there */}
                                    {imageUrl && <div style={{ minHeight: "50%" }}>
                                        <img src={label.imageUrl} className="card-img-top p-3" style={{ height: "100%", width: "100%", objectFit: "contain", borderStyle: imageBorder, margin: 0 }} alt="" />
                                    </div>}
                                    <div className="card-body">
                                        {sku && <p className={`"card-text" ${classes.cardText}`} style={{ color: colorSku, fontSize: sizeSku, fontWeight: fontWeightSku, borderStyle: skuBorder, margin: 0.2 }}>{label.sku}</p>}
                                        {description && <p className={`"card-text" ${classes.cardText}`} style={{ fontSize: sizeDescription, fontWeight: fontWeightDescription, color: descriptionTextColor, borderStyle: descriptionBorder, margin: 0.2 }}>{label.description}</p>}
                                        {barcode && <Barcode value={label.barcode} width={barcodeWidth} textMargin={1} fontSize={barcodeFontSize} height={barcodeHeight} />}

                                    </div>
                                </div>
                            </Print>
                        </div>

                    )
                })}
            </section>
        </>

    )
}

export default LabelList
