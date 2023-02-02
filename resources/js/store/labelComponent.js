import { createSlice } from '@reduxjs/toolkit';

const initialLabelComponentState = {
    labelComponent:
        {
            height:400,
            width: 300,
            backGroundColor: "white",
            labelText: 'Testing barcode position in label. No overborder',
            sizeText: 12,
            labelSku: 'ASDF5778-78',
            imageUrl: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
            barcode: '3453434839211',
            backgImage: 'none',
            colorSku: 'black',
            sizeSku: 14,
            fontWeightSku: '300',
            fontWeightText: '300',
            textColor: '',
            descriptionBorder: 'none',
            imageBorder: 'none',
            skuBorder: 'none',
            barcodeHeight: '',
            barcodeWidth: '',
            barcodeColor: '',
            barcodeBackgroundColor: ''

        }
};

const labelComponentSlice = createSlice({
    name: 'labelComponent',
    initialState: initialLabelComponentState,
    reducers: {
        changeHeight(state, action) { state.labelComponent.height = action.payload },
        changeWidth(state, action) { state.labelComponent.width = action.payload },
        changeBackGroundColor(state, action) { state.labelComponent.backGroundColor = action.payload },
        changeText(state, action) { state.labelComponent.labelText = action.payload },
        changeTextSize(state, action) { state.labelComponent.sizeText = action.payload },
        changeSku(state, action) { state.labelComponent.labelSku = action.payload },
        changeImageUrl(state, action) { state.labelComponent.imageUrl = action.payload },
        changeImageBorder(state, action) { state.labelComponent.imageBorder = action.payload},
        changeSkuBorder(state, action) { state.labelComponent.skuBorder = action.payload},
        changeBarcode(state, action) { state.labelComponent.barcode = action.payload },
        changeBackgroudImage(state, action) { state.labelComponent.backgImage = action.payload },
        changeSkuColor(state, action) { state.labelComponent.colorSku = action.payload },
        changeSkuSize(state, action) { state.labelComponent.sizeSku = action.payload },
        changeSkuWeight(state, action) { state.labelComponent.fontWeightSku = action.payload },
        changeTextWeight(state, action) { state.labelComponent.fontWeightText = action.payload },
        changeTextColor(state, action) { state.labelComponent.textColor = action.payload },
        changeDescriptionBorder(state, action) { state.labelComponent.descriptionBorder = action.payload },
        changeBarcodeHeight(state, action) { state.labelComponent.barcodeHeight = action.payload },
        changeBarcodeWidth(state, action) { state.labelComponent.barcodeWidth = action.payload },
        changeBarcodeColor(state, action) { state.labelComponent.barcodeColor = action.payload },
        changeBarcodeBackgroundColor(state, action) { state.labelComponent.textColor = action.payload },


    }
})
export const labelComponentActions = labelComponentSlice.actions;
export default labelComponentSlice.reducer;
