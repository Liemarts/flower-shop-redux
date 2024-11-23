import { createSlice } from "@reduxjs/toolkit";

export const flowersSlice = createSlice ({

    name: 'flowers',
    
    initialState: {
        selectedCategory: "BOUQUET"

    },

    reducers: {

        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }

    }

})


export const getSelectedCategory = state => state.flowers.selectedCategory;

export const{filterCategory} = flowersSlice.actions;

export default flowersSlice.reducer;
