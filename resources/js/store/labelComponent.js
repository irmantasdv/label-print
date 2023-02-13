import { createSlice } from '@reduxjs/toolkit';

const initialLabelComponentState = {
    labelComponent:
    {
        title: '',
        height: 400,
        width: 300,
        backGroundColor: "white",
        description: 'Description example',
        sizeDescription: 12,
        sku: 'Example sku',
        // imageUrl: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
        imageUrl: '',
        barcode: '3453434839211',
        backgImage: '',
        colorSku: '',
        sizeSku: 14,
        fontWeightSku: '',
        fontWeightDescription: '',
        descriptionTextColor: '',
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
        changeTitle(state, action) { state.labelComponent.title = action.payload },
        changeHeight(state, action) { state.labelComponent.height = action.payload },
        changeWidth(state, action) { state.labelComponent.width = action.payload },
        changeBackGroundColor(state, action) { state.labelComponent.backGroundColor = action.payload },
        changeText(state, action) { state.labelComponent.description = action.payload },
        changeTextSize(state, action) { state.labelComponent.sizeDescription = action.payload },
        changeSku(state, action) { state.labelComponent.sku = action.payload },
        changeImageUrl(state, action) { state.labelComponent.imageUrl = action.payload },
        changeImageBorder(state, action) { state.labelComponent.imageBorder = action.payload },
        changeSkuBorder(state, action) { state.labelComponent.skuBorder = action.payload },
        changeBarcode(state, action) { state.labelComponent.barcode = action.payload },
        changeBackgroudImage(state, action) { state.labelComponent.backgImage = action.payload },
        changeSkuColor(state, action) { state.labelComponent.colorSku = action.payload },
        changeSkuSize(state, action) { state.labelComponent.sizeSku = action.payload },
        changeSkuWeight(state, action) { state.labelComponent.fontWeightSku = action.payload },
        changeTextWeight(state, action) { state.labelComponent.fontWeightDescription = action.payload },
        changeTextColor(state, action) { state.labelComponent.descriptionTextColor = action.payload },
        changeDescriptionBorder(state, action) { state.labelComponent.descriptionBorder = action.payload },
        changeBarcodeHeight(state, action) { state.labelComponent.barcodeHeight = action.payload },
        changeBarcodeWidth(state, action) { state.labelComponent.barcodeWidth = action.payload },
        changeBarcodeColor(state, action) { state.labelComponent.barcodeColor = action.payload },
        changeBarcodeBackgroundColor(state, action) { state.labelComponent.textColor = action.payload },


    }
})
export const labelComponentActions = labelComponentSlice.actions;
export default labelComponentSlice.reducer;
