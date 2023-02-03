import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import TemplateItem from './TemplateItem';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const TemplateDetails = () => {
    const [template, setTemplate] = useState([]);
    const [message, setMessage] = useState(null);
    const params = useParams();
    const templateId = params.templateId;

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/templates/${templateId}`)
            .then((response) => response.json())
            .then((response) => setTemplate(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className='container text-center'>
            <Link to='/templates'><button className='btn btn-secondary mt-4'>Back to Templates</button></Link>
            <div className='h-100 d-flex align-items-center justify-content-center mt-4'>
                <TemplateItem
                    width={template.width}
                    height={template.height}
                    sku={template.sku}
                    imageUrl={template.imageUrl}
                    labelDescription={template.description}
                    barcode={template.barcode}
                    backGroudColor={template.backGroundColor}
                    imageBorder={template.imageBorder}
                    sizeDescription={template.sizeDescription}
                    fontWeightDescription={template.fontWeightDescription}
                    descriptionTextColor={template.descriptionTextColor}
                    descriptionBorder={template.descriptionBorder}
                />
            </div>
        </div>



    )
}

export default TemplateDetails
