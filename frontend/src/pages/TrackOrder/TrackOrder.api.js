import { ORDER_URL } from "apis/urls";
import { http } from "services/http";

export const fetchOrderDetailsApi = (params) => http.doGet([ORDER_URL, params]);