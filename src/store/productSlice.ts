import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { productAPI } from '../api/api';
import { IProduct } from './interfaces';


const initialState: IProduct = {
    id: 1,
    img: '',
    name: '',
    price: 'string',
    type: ''
};


export const getProduct = (id:string) => async (dispatch:Function) => {
    const data = await productAPI.getOneProduct(id);
    dispatch(setProduct(data))
};


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<IProduct>) => {
            return action.payload;
        }
    },
});


export const { setProduct } = productSlice.actions;
export const selectProduct = (state: RootState) => state.product;


export default productSlice.reducer;