import { ORDER_URL } from "apis/urls";
import { http } from "services/http";

export const placeOrderApi = (payload) => http.doPost(ORDER_URL, payload);