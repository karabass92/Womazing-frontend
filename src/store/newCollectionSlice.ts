import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { mainPageAPI } from '../api/api';
import { IProduct } from './interfaces';


const initialState: IProduct[] = [];


export const getNewCollection = async (dispatch:Function) => {
    const data = await mainPageAPI.getNewCollection();
    dispatch(setNewCollection(data))
};


const newCollectionSlice = createSlice({
    name: 'newCollection',
    initialState,
    reducers: {
        setNewCollection: (state, action: PayloadAction<IProduct[]>) => {
            state = action.payload;
            return state;
        }
    },
});


export const { setNewCollection } = newCollectionSlice.actions;
export const selectNewCollection = (state: RootState) => state.newCollection;


export default newCollectionSlice.reducer;