import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { templateActions } from '../../../store/template';
import TemplateItem from './TemplateItem';
import classes from './TemplateList.module.css'

const TemplateList = () => {
    const [message, setMessage] = useState(null);
    const templates = useSelector(state => state.template.templateList);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/templates')
            .then((response) => response.json())
            // .then((response) => setTemplateList(response.data))
            .then((response) => {
                dispatch(templateActions.fetchTemplateItems(response.data))
            })
            .catch(error => console.log(error))
    }, []);
    const ediTemplateHandler = (template) => {
        navigate(`/templates/${template.id}`);
    }


    const deleteTemplateHandler = (id) => {
        console.log(id);
        fetch(`http://127.0.0.1:8000/api/templates/${id}`,
            {
                method: 'DELETE'
            }
        )
            .then(response => response.json())
            .then(response => console.log(response), dispatch(templateActions.removeTemplateFromItems(id)))
            .catch(error => console.log(error))

    }
    useEffect(() => {

    }, [deleteTemplateHandler]);

    return (
        <div className='container'>
            <h1 className='text-center m-5'>Label Templates</h1>
            <div className={classes.templateList} >

                {templates.map(template => {
                    return (
                        <div className='col' key={template.id}>
                            <div>
                                <h2>{template.title}</h2>
                                {message && <p>{message}</p>}
                                <button onClick={() => ediTemplateHandler(template)} className="btn btn-secondary">Select</button>
                                <button className="btn btn-danger m-2" onClick={() => deleteTemplateHandler(template.id)}>Delete</button>
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
                })}
            </div>
        </div>
    )
}

export default TemplateList
