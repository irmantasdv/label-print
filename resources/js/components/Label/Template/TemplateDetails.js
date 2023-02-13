
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import TemplateItem from './TemplateItem';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import LabelOptions from '../LabelOptions/LabelOptions';
import HomePage from '../../../pages/HomePage';
import { labelComponentActions } from '../../../store/labelComponent';
import { labelListActions } from '../../../store/labels';

const TemplateDetails = () => {

    const [template, setTemplate] = useState([]);
    const [message, setMessage] = useState(null);
    const dispatch = useDispatch();
    const params = useParams();
    const templateId = params.templateId;
    const templateComponent = useSelector(state => state.labelComponent.labelComponent);
    const {
        height,
        width,
        backGroundColor,
        sizeDescription,
        imageBorder,
        backgImage,
        colorSku,
        sizeSku,
        fontWeightSku,
        fontWeightDescription,
        descriptionTextColor,
        descriptionBorder,
        skuBorder
    } = templateComponent;

    const renderingTemplates =() => {

    }
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/templates/${templateId}`)
            .then((response) => response.json())
            .then((response) => {
                dispatch(labelComponentActions.changeTitle(response.data.title));
                dispatch(labelComponentActions.changeHeight(response.data.height));
                dispatch(labelComponentActions.changeWidth(response.data.width));
                dispatch(labelComponentActions.changeBackGroundColor(response.data.backGroundColor));
                dispatch(labelComponentActions.changeText(response.data.description));
                dispatch(labelComponentActions.changeTextSize(response.data.sizeDescription));
                dispatch(labelComponentActions.changeSku(response.data.sku));
                dispatch(labelComponentActions.changeImageUrl(response.data.imageUrl));
                dispatch(labelComponentActions.changeBarcode(response.data.barcode));
                dispatch(labelComponentActions.changeBackgroudImage(response.data.backgImage));
                dispatch(labelComponentActions.changeImageBorder(response.data.imageBorder));
                dispatch(labelComponentActions.changeSkuBorder(response.data.skuBorder));
                dispatch(labelComponentActions.changeSkuColor(response.data.colorSku));
                dispatch(labelComponentActions.changeSkuSize(response.data.sizeSku));
                dispatch(labelComponentActions.changeSkuWeight(response.data.fontWeightSku));
                dispatch(labelComponentActions.changeTextWeight(response.data.fontWeightDescription));
                dispatch(labelComponentActions.changeTextColor(response.data.descriptionTextColor));
                dispatch(labelComponentActions.changeDescriptionBorder(response.data.descriptionBorder));
                dispatch(labelComponentActions.changeBarcodeHeight(response.data.barcodeHeight));
                dispatch(labelComponentActions.changeBarcodeWidth(response.data.barcodeWidth));
                dispatch(labelComponentActions.changeBarcodeColor(response.data.barcodeColor));
                dispatch(labelComponentActions.changeBarcodeBackgroundColor(response.data.barcodeBackgroundColor));
                setTemplate(templateComponent);
                // console.log("TemDetails templateComponent: ", template)
            }
            )
            .catch(error => console.log(error))
    }, [dispatch]);

    return (
        <div className='container text-center'>
            <Link to='/templates'><button className='btn btn-secondary m-4'>Back to Templates</button></Link>
            <Link to='/labels'><button className='btn btn-success m-4' onClick={renderingTemplates}>Show Labels</button></Link>
            <div className='h-100 d-flex align-items-center justify-content-center mt-4'>
                <HomePage/>
            </div>
        </div>



    )
}

export default TemplateDetails
