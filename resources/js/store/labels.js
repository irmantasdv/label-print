import { createSlice } from '@reduxjs/toolkit';

const labelsSlice = createSlice({
    name: 'labels',
    initialState: {
        labelsList: [],
        changed: false,
    }, reducers: {

        removeLabelFromItems(state, action) {
            const id = action.payload;
            const existingItem = state.labelsList.find((item) => item.id === id);
            state.changed = true;
            state.templateList = state.labelsList.filter((item) => item.id !== id);
        },
        fetchLabelItems(state, action) {
            const itemsFromApi = action.payload;
            state.changed = true;
            state.labelsList = itemsFromApi;
        }
    }
})
export const labelListActions = labelsSlice.actions;
export default labelsSlice.reducer;