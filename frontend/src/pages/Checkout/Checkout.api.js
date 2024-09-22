import { CREATE_ORDER_URL } from "apis/urls";
import { http } from "services/http";

export const placeOrderApi = (payload) => http.doPost(CREATE_ORDER_URL, payload);