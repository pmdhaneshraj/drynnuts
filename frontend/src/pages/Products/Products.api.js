import { FETCH_PRODUCTS_URL } from "../../apis/urls";
import { http } from "../../services/http";

export const fetchProductsApi = (params) => http.doGet([FETCH_PRODUCTS_URL, params]);