import { createSlice } from '@reduxjs/toolkit';
import { shopAPI } from '../api/api';


const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        products: []
    },
    reducers: {
        setAllProducts(state, action) {
            state.products = action.payload
        }
    }
});


export const getAllProducts = () => async (dispatch:Function) => {
    const response = await shopAPI.getAllProducts();
    console.log(response)
    dispatch(response)
};


export default shopSlice;