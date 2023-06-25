import axios from "axios";
import { baseUrl } from "../constants/api";


const instance = axios.create (
    {baseURL: baseUrl}
);


export const productAPI = {
    getOneProduct(productId:string) {
        try {
            return instance.get(`product/${productId}`)
                .then(response => response.data)
        } catch (e) {
            console.log(e)
        }
    }
};


export const shopAPI = {
    getAllProducts() {
        try {
            return instance.get(`product`)
                .then(response => response.data.rows)
        } catch (e) {
            console.log(e)
        }
    }
};


export const mainPageAPI = {
    getNewCollection() {
        try {
            return instance.get(`product`)
                .then(response => response.data.rows.slice(-3))
        } catch (e) {
            console.log(e)
        }
    }
};