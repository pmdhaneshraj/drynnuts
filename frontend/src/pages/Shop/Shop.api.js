import { PRODUCTS_URL } from "../../apis/urls";
import { http } from "../../services/http";

export const fetchProductsApi = (params) => http.doGet([PRODUCTS_URL, params]);