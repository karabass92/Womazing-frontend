import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import shopSlice from "./shopSlice";
import newCollectionSlice from "./newCollectionSlice";
import productSlice from "./productSlice";


export const store = configureStore({
    reducer: {
        shop: shopSlice,
        newCollection: newCollectionSlice,
        product: productSlice,
    },
    devTools: true
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;