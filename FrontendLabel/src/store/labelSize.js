import { createSlice} from '@reduxjs/toolkit';

const initialLabelSizeState = { labelSize: { height: 400, width: 300 } };

const labelSizeSlice = createSlice({
    name: 'labelSize',
    initialState: initialLabelSizeState,
    reducers: {
        changeHeight(state, action) { state.labelSize.height = action.payload },
        changeWidth(state, action) { state.labelSize.width = action.payload }
    }
})
export const labelSizeActions = labelSizeSlice.actions;
export default labelSizeSlice.reducer;
