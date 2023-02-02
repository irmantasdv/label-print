import {useDispatch, useSelector} from "react-redux";
import LabelOptionModal from "../UI/LabelOptionModal/LabelOptionModal";
import {useState} from "react";

const NewTemplate = (props) => {
    const auth = useSelector(state => state.auth.auth);
    const [toggleNotLoggedInModal, setToggleNotLoggedInModal] = useState(false)
    const toggleNewTemplateModaleNotLoggedIn =()=> {
        setToggleNotLoggedInModal(!toggleNotLoggedInModal);
    }
const SaveTemplateHandler = () => {
        if(!auth){
            setToggleNotLoggedInModal(!toggleNotLoggedInModal);
        }
}
    return <>
        <div>
            <button className={props.className} onClick={SaveTemplateHandler}>Save as Template</button>
        </div>
        {toggleNotLoggedInModal && <LabelOptionModal onClick={toggleNewTemplateModaleNotLoggedIn}>
            <p>Please Login</p>
        </LabelOptionModal>}
    </>




}
export default NewTemplate;
