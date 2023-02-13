import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { labelComponentActions } from '../../../store/labelComponent';
import useDispatchLabelActionByEventName from "../../../hooks/use-DispatchLabelActionByEventName";
import Card from "../../UI/Card/Card";
import LabelOptionModal from "../../UI/LabelOptionModal/LabelOptionModal";
import NewTemplate from "../Template/NewTemplate";
import { useLocation } from 'react-router';
import UpdateTemplate from '../Template/UpdateTemplate';


const LabelOptions = () => {
    const location = useLocation();
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
    const [toggleLabelSize, setToggleLabelSize] = useState(false)
    const [toggleLabelBackground, setToggleLabelBackground] = useState(false)
    const [toggleLabelSku, setToggleLabelSku] = useState(false)
    const [toggleLabelDescription, setToggleLabelDescription] = useState(false)
    const [toggleLabelImage, setToggleLabelImage] = useState(false)
    const [toggleLabelBarcode, setToggleLabelBarcode] = useState(false)
    const toggleSizeHandler = () => {
        setToggleLabelSize(!toggleLabelSize);
    }
    const toggleBackgroundHandler = () => {
        setToggleLabelBackground(!toggleLabelBackground);
    }
    const toggleSkuHandler = () => {
        setToggleLabelSku(!toggleLabelSku);
    }
    const toggleDescriptionHandler = () => {
        setToggleLabelDescription(!toggleLabelDescription);
    }
    const toggleImageHandler = () => {
        setToggleLabelImage(!toggleLabelImage);
    }
    const toggleBarcodeHandler = () => {
        setToggleLabelBarcode(!toggleLabelBarcode);
    }
    const {
        handleColorChanges: colorChange,
    } = useDispatchLabelActionByEventName();
    const dispatch = useDispatch();

    const {
        handleColorChanges,
        handlePixelChanges,
        handleBorderChanges
    } = useDispatchLabelActionByEventName();
    const handleTextChange = (e) => {
        const text = e.target.value;
        dispatch(labelComponentActions.changeText(text));
    }
    const handleSkuChange = (e) => {
        const sku = e.target.value;
        dispatch(labelComponentActions.changeSku(sku));
    }
    const handleImageUrlChange = (e) => {
        const imageUrl = e.target.value;
        dispatch(labelComponentActions.changeImageUrl(imageUrl));
    }
    const handleBarcodeChange = (e) => {
        const barcode = e.target.value;
        dispatch(labelComponentActions.changeBarcode(barcode));
    }
    const handleBackgroudImageChange = (e) => {
        const eUrl = e.target.value;
        const url = 'url(' + eUrl + ')';
        dispatch(labelComponentActions.changeBackGroundColor(''));
        dispatch(labelComponentActions.changeBackgroudImage(url));
    }
    const handleWeightChange = (e) => {
        const fontWeight = e.target.value;
        dispatch(labelComponentActions.changeSkuWeight(fontWeight));
    }

    const handleTextWeightChange = (e) => {
        const fontWeight = e.target.value;
        dispatch(labelComponentActions.changeTextWeight(fontWeight));
    }
    const handleBorderChange = (e) => {
        const what = e.target.name;
        const border = imageBorder === 'solid' ? 'none' : 'solid';
        dispatch(labelComponentActions.changeImageBorder(border));
    }
    return (
        <Card>
            <div className='noPrint'>
                <style>
                    {`@media print {.noPrint{display: none;}}`}
                </style>
                <div className="row align-items-center">
                    <div className="col-sm-4">
                        <label className='inline' htmlFor="backgroudImage">Image Backgr</label>
                        <input type="text" value={backgImage || ''} id='backgroudImage' className="form-control" onChange={handleBackgroudImageChange} placeholder="Backgroud Image" />
                    </div>
                    <button className="col-sm-3 btn btn-outline-secondary btn-sm m-2" onClick={toggleBackgroundHandler}>{toggleLabelBackground ? 'Hide' : 'More'}</button>
                    {toggleLabelBackground && <LabelOptionModal onClick={toggleBackgroundHandler} title={'Background Options'}>
                        <div className="col-sm-4">
                            <label htmlFor="colorpicker">Background Color: </label>
                            <input type="color" value={backGroundColor || 'white'} className="form-control" name="changeBackGroundColor" id="colorpicker" onChange={colorChange} />
                        </div>
                    </LabelOptionModal>}
                </div>
                <div className='row align-items-center'>
                    <div className="col-sm-4">
                        <label htmlFor="sku">SKU</label>
                        <input type="text" value={sku || ''} id="sku" onChange={handleSkuChange} />
                    </div>
                    <button className="col-sm-3 btn btn-outline-secondary btn-sm m-2"
                        onClick={toggleSkuHandler}>{toggleLabelSku ? 'Hide' : 'More'}</button>
                    {toggleLabelSku && <LabelOptionModal onClick={toggleSkuHandler} title={'SKU Options'}>
                        <>
                            <div className="col-sm-4">
                                <label htmlFor="sizeSku">SKU size</label>
                                <input type="number" min={6} max={60} value={sizeSku || 12} name="changeSkuSize" className="form-control" id="sizeSku" onChange={handlePixelChanges} />
                            </div>
                            <div className="col-sm-4">
                                <label htmlFor="colorpickerSku">SKU color</label>
                                <input type="color" value={colorSku || 'black'} className="form-control" name="changeSkuColor" id="colorpickerSku" onChange={handleColorChanges} />
                            </div>

                            <div className="col-sm-4">
                                <label htmlFor="weightSku">SKU text weight</label>
                                <select className="form-select" defaultValue="400" value={fontWeightSku || 400} aria-label="Default select example" type="number" min={100} max={900} id="weightSku" onChange={handleWeightChange}>
                                    <option value="400">400</option>
                                    <option value="500">500</option>
                                    <option value="600">600</option>
                                    <option value="700">700</option>
                                </select>
                            </div>
                            <div className="col-sm-2">
                                <label htmlFor="skuBorder">Sku border</label>
                                <input type="checkbox" value={skuBorder} id="skuBorder" name="changeSkuBorder" onChange={handleBorderChanges} />
                            </div></>
                    </LabelOptionModal>}
                </div>
                <div className='row align-items-center'>
                    <div className='col-sm-4'>
                        <label htmlFor="text">Description</label>
                        <input type="text" id="text" value={description || ''} onChange={handleTextChange} />
                    </div>
                    <button className="col-sm-3 btn btn-outline-secondary btn-sm m-2"
                        onClick={toggleDescriptionHandler}>{toggleLabelDescription ? 'Hide' : 'More'}</button>
                    {toggleLabelDescription && <LabelOptionModal onClick={toggleDescriptionHandler} title={'Description Options'}>
                        <><div className="col-sm-4">
                            <label htmlFor="textSize">Text size</label>
                            <input type="number" min={6} max={60} value={sizeDescription || 12} name="changeTextSize" className="form-control" id="textSize" onChange={handlePixelChanges} />
                        </div>

                            <div className="col-sm-4">
                                <label htmlFor="weightSku">Text weight</label>
                                <select className="form-select" defaultValue="400" value={fontWeightDescription || 400} aria-label="Default select example" type="number" min={100} max={900} id="weightSku" onChange={handleTextWeightChange}>
                                    <option value="400">400</option>
                                    <option value="500">500</option>
                                    <option value="600">600</option>
                                    <option value="700">700</option>
                                </select>
                            </div>

                            <div className="col-sm-4">
                                <label htmlFor="colorpickerSku">Description color</label>
                                <input type="color" value={descriptionTextColor || 'black'} className="form-control" name="changeTextColor" id="colorpickerSku" onChange={handleColorChanges} />
                            </div>

                            <div className="col-sm-2">
                                <label htmlFor="descriptionBorder">Description border</label>
                                <input type="checkbox" value={descriptionBorder} id="descriptionBorder" name="changeDescriptionBorder" onChange={handleBorderChanges} />
                            </div></>
                    </LabelOptionModal>}
                </div>
                <div className="row align-items-center">

                    <div className='col-sm-4'>
                        <label htmlFor="url">Image url</label>
                        <input type="text" value={imageUrl || ''} id="url" onChange={handleImageUrlChange} />
                    </div>
                    <button className="col-sm-3 btn btn-outline-secondary btn-sm m-2"
                        onClick={toggleImageHandler}>{toggleLabelImage ? 'Hide' : 'More'}</button>
                    {toggleLabelImage && <LabelOptionModal onClick={toggleImageHandler} title={'Image Options'}>
                        <div className='col-sm-2'>
                            <label htmlFor="imageBorder">Image border</label>
                            <input type="checkbox" id="imageBorder" name="changeImageBorder" onChange={handleBorderChanges} />
                        </div>
                    </LabelOptionModal>}
                </div>
                <div className="row align-items-center">
                    <div className='col-sm-4'>
                        <label htmlFor="barcode">Barcode</label>
                        <input type="text" value={barcode || 1245} id="barcode" onChange={handleBarcodeChange} />
                    </div>
                    <button className="col-sm-3 btn btn-outline-secondary btn-sm m-2"
                        onClick={toggleBarcodeHandler}>{toggleLabelBarcode ? 'Hide' : 'More'}</button>
                    {toggleLabelBarcode && <LabelOptionModal onClick={toggleBarcodeHandler} title={'Barcode Options'}>
                        {/*<p className="col-sm-4">*/}
                        {/*    <label htmlFor="sizeSku">Barcode Heigth</label>*/}
                        {/*    <input type="number" min={6} max={60} value={sizeText} name="changeTextSize" className="form-control" id="sizeSku" onChange={handlePixelChanges} />*/}
                        {/*</p>*/}
                        {/*<p className="col-sm-4">*/}
                        {/*    <label htmlFor="sizeSku">Barcode Width</label>*/}
                        {/*    <input type="number" min={6} max={60} value={sizeText} name="changeTextSize" className="form-control" id="sizeSku" onChange={handlePixelChanges} />*/}
                        {/*</p>*/}
                    </LabelOptionModal>}
                </div>

                <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-outline-secondary btn-sm m-2"
                        onClick={toggleSizeHandler}>{toggleLabelSize ? 'Hide' : 'Label Height & Width'}</button>
                    {toggleLabelSize && <LabelOptionModal onClick={toggleSizeHandler} title={'Label Size'}>
                        <div className="col-sm-4">
                            <label htmlFor="height">Height</label>
                            <input type="number" name="changeHeight" value={height || 300} className="form-control"
                                onChange={handlePixelChanges} placeholder="height" />
                        </div>
                        <div className="col-sm-4">
                            <label htmlFor="width">Width</label>
                            <input type="number" value={width || 400} className="form-control" name="changeWidth"
                                onChange={handlePixelChanges} placeholder="width" />
                        </div>
                    </LabelOptionModal>}
                    {location.pathname === "/home" ? <NewTemplate className={'btn btn-outline-success btn-sm m-2'} /> : <UpdateTemplate/>}
                </div>

            </div>
        </Card>
    )
}

export default LabelOptions
