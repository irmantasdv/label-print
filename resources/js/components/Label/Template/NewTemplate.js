import { useDispatch, useSelector } from "react-redux";
import LabelOptionModal from "../../UI/LabelOptionModal/LabelOptionModal";
import { labelComponentActions } from "../../../store/labelComponent";
import { useRef, useState } from "react";


const NewTemplate = (props) => {
    const auth = useSelector(state => state.auth.auth);
    const template = useSelector(state => state.labelComponent.labelComponent);
    const dispatch = useDispatch();
    const templateTitleRef = useRef();
    const [toggleNotLoggedInModal, setToggleNotLoggedInModal] = useState(false)
    const toggleNewTemplateModaleNotLoggedIn = () => {
        setToggleNotLoggedInModal(!toggleNotLoggedInModal);
    }

    const changeTemplateTite = () => {
        const title = templateTitleRef.current.value;
        dispatch(labelComponentActions.changeTitle(title));

    }
    const SaveTemplateHandler = () => {

        const temArray = [];
        temArray.push(template);
        console.log(template);
    //     fetch('http://localhost:8000/api/templates', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Access-Control-Allow-Origin': '*',
    //         },
    //         body: {
    //             "title": "t1",
    //             "height": 400,
    //             "width": 300,
    //             "backGroundColor": "white",
    //             "description": "descr1",
    //             "sizeDescription": 12,
    //             "sku": "A232AR*",
    //             "imageUrl": "https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg",
    //             "barcode": "111111111",
    //             "backgImage": "none",
    //             "colorSku": "black",
    //             "sizeSku": 14,
    //             "fontWeightSku": "300",
    //             "fontWeightDescription": "300",
    //             "descriptionTextColor": "",
    //             "descriptionBorder": "none",
    //             "imageBorder": "none",
    //             "skuBorder": "none",
    //             "barcodeHeight": "",
    //             "barcodeWidth": "",
    //             "barcodeColor": "",
    //             "barcodeBackgroundColor": ""
    //           },
    //       })
    //         .then(response => console.log(response))
    //         // .catch(error => console.log(error))
    //     setToggleNotLoggedInModal(!toggleNotLoggedInModal);
    }
    const checkIfLogedIn = () => {
        setToggleNotLoggedInModal(!toggleNotLoggedInModal);

    }
    return <div className="row">
        <div className="col">
            <div>
                <button className={props.className} onClick={checkIfLogedIn}>Save as Template</button>
            </div>
            {toggleNotLoggedInModal && <LabelOptionModal title={auth ? "Enter template name" : "Please Login"} onClick={toggleNewTemplateModaleNotLoggedIn}>
                {auth ? <div className="form-group">
                    <input type='text'  ref={templateTitleRef} className="form-control" placeholder="enter template name" />
                    <button className="btn btn-success mt-2" onClick={SaveTemplateHandler}>Save</button>
                </div> : ""}
            </LabelOptionModal>}
        </div>
        <div className="row">

        </div>

    </div>




}
export default NewTemplate;
