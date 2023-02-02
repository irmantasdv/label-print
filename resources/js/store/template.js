import { createSlice } from '@reduxjs/toolkit';

const templateSlice = createSlice({
    name: 'template',
    initialState: {
        templateList: [],
        changed: false,
    }, reducers: {

        removeTemplateFromItems(state, action) {
            const id = action.payload;
            const existingItem = state.templateList.find((item) => item.id === id);
            state.changed = true;
            state.templateList = state.templateList.filter((item) => item.id !== id);
        },
        fetchTemplateItems(state, action) {
            const itemsFromApi = action.payload;
            state.changed = true;
            state.templateList = itemsFromApi;
        }
    }
})
export const templateActions = templateSlice.actions;
export default templateSlice.reducer;