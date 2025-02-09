import axios from "axios";
import { Order } from "../types/types";

const API_URL = "http://localhost:3000";

export const get = async (endpointUrl: string) => {
    const response = await axios.get(`${API_URL}/${endpointUrl}`);
    return response.data;
};

export const fetchData = async (): Promise<Order[]> => {
    const response = await axios.get(`${API_URL}/dataTable`);
    return response.data;
};

export const fetchDataById = async (orderNo: number): Promise<Order[] | null> => {
    const response = await axios.get(`${API_URL}/dataTable?orderNo=${orderNo}`);
    return response.data;
};
