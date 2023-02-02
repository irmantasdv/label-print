import {labelComponentActions} from "../store/labelComponent";
import {useDispatch, useSelector} from "react-redux";
import {split} from "lodash/string";

const useDispatchLabelActionByEventName = () => {

    const dispatch = useDispatch();
    const labelComponent = useSelector(state => state.labelComponent.labelComponent);
    const {imageBorder, descriptionBorder,skuBorder} = labelComponent;
    const handleColorChanges = (event) => {
        const name = event.target.name;
       const color = event.target.value;
        switch (name) {
            case 'changeBackGroundColor':
                dispatch(labelComponentActions.changeBackGroundColor(color));
                break;
            case 'changeSkuColor':
                dispatch(labelComponentActions.changeSkuColor(color));
                break;
            case 'changeTextColor':
                dispatch(labelComponentActions.changeTextColor(color));
            default:
                console.log(`Sorry, action ${name}. is not found`);
        }
    }
    const handlePixelChanges = (event) => {
        const name = event.target.name;
        const size = parseInt(event.target.value);
        switch (name) {
            case 'changeSkuSize':
                dispatch(labelComponentActions.changeSkuSize(size));
                break;
            case 'changeTextSize':
                dispatch(labelComponentActions.changeTextSize(size));
                break;
            case 'changeWidth':
                dispatch(labelComponentActions.changeWidth(size));
                break;
            case 'changeHeight':
                dispatch(labelComponentActions.changeHeight(size));
                break;

            default:
                console.log(`Sorry, action ${name}. is not found`);
        }
    }
    const handleBorderChanges = (event) => {
        const name = event.target.name;
        switch (name) {
            case 'changeImageBorder':
                const Imageborder = imageBorder === 'solid' ? 'none' : 'solid';
                dispatch(labelComponentActions.changeImageBorder(Imageborder));
                break;
            case 'changeDescriptionBorder':
                const borderDescription = descriptionBorder === 'solid' ? 'none' : 'solid';
                dispatch(labelComponentActions.changeDescriptionBorder(borderDescription));
                break;
            case 'changeSkuBorder':
                const borderSku = skuBorder === 'solid' ? 'none' : 'solid';
                dispatch(labelComponentActions.changeSkuBorder(borderSku));
                break;

            default:
                console.log(`Sorry, action ${name}. is not found`);
        }
    }

    return {
        handleColorChanges,
        handlePixelChanges,
        handleBorderChanges
    };
}

export default useDispatchLabelActionByEventName

