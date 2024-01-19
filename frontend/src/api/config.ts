import axios from "axios";

export const URL = "https://fakestoreapi.com";

export const FormFetch = axios.create({

    baseURL: `${URL}`, 
    headers: {
        "Content-Type": "application/json",
    },
});