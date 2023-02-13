import { useDispatch, useSelector } from "react-redux";
import LabelOptionModal from "../../UI/LabelOptionModal/LabelOptionModal";
import { labelComponentActions } from "../../../store/labelComponent";
import { useRef, useState } from "react";
import { useParams } from 'react-router';

const UpdateTemplate = (props) => {

    const auth = useSelector(state => state.auth.auth);
    const template = useSelector(state => state.labelComponent.labelComponent);
    const dispatch = useDispatch();
    const templateTitleRef = useRef();
    const [toggleNotLoggedInModal, setToggleNotLoggedInModal] = useState(false)
    const toggleNewTemplateModaleNotLoggedIn = () => {
        setToggleNotLoggedInModal(!toggleNotLoggedInModal);
    }
    const params = useParams();
    const templateId = params.templateId;

    const changeTemplateTite = () => {
        const title = templateTitleRef.current.value;
        dispatch(labelComponentActions.changeTitle(title));

    }
    const updateTemplateHandler = () => {
        fetch(`http://localhost:8000/api/templates/${templateId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "title": template.title,
                "height": template.height,
                "width": template.width,
                "backGroundColor": template.backGroundColor,
                "description": template.description,
                "sizeDescription": template.sizeDescription,
                "sku": template.sku,
                "imageUrl": template.imageUrl,
                "barcode": template.barcode,
                "backgImage": template.backgImage,
                "colorSku": template.colorSku,
                "sizeSku": template.sizeSku,
                "fontWeightSku": template.fontWeightSku,
                "fontWeightDescription": template.fontWeightDescription,
                "descriptionTextColor": template.descriptionTextColor,
                "descriptionBorder": template.descriptionBorder,
                "imageBorder": template.imageBorder,
                "skuBorder": template.skuBorder,
                "barcodeHeight": template.barcodeHeight,
                "barcodeWidth": template.barcodeWidth,
                "barcodeColor": template.barcodeColor,
                "barcodeBackgroundColor": template.barcodeBackgroundColor
            })
        })
            .then(response => console.log(response))
            .catch(error => console.log(error))
        setToggleNotLoggedInModal(!toggleNotLoggedInModal);
    }
    const checkIfLogedIn = () => {
        setToggleNotLoggedInModal(!toggleNotLoggedInModal);

    }
    return <>
        <div>
            <button className={props.className} onClick={checkIfLogedIn}>Update Template</button>
        </div>
        {toggleNotLoggedInModal && <LabelOptionModal title={auth ? "Update Template" : "Please Login"} onClick={toggleNewTemplateModaleNotLoggedIn}>
            {auth ? <div className="form-group">
                <input type='text' onChange={changeTemplateTite} ref={templateTitleRef} className="form-control" placeholder="change template name" />
                <button className="btn btn-success mt-2" onClick={updateTemplateHandler}>Update Template</button>
            </div> : ""}
        </LabelOptionModal>}
    </>


}

export default UpdateTemplate