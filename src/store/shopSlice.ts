import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { shopAPI } from '../api/api';
import { IProduct } from './interfaces';


const initialState: IProduct[] = [];


export const getAllProducts = () => async (dispatch:Function) => {
    const data = await shopAPI.getAllProducts();
    dispatch(setAllProducts(data))
};


const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        setAllProducts: (state, action: PayloadAction<IProduct[]>) => {
            state = action.payload;
            return state;
        }
    },
});


export const { setAllProducts } = shopSlice.actions;
export const selectShop = (state: RootState) => state.shop;


export default shopSlice.reducer;