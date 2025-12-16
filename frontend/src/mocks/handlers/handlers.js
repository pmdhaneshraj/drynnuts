import { http, HttpResponse } from "msw"
import { productsDb } from "./Mapping/productsMapping"
import { BASE_URL } from "services/http"

export const handlers = [
  http.get(`${BASE_URL}/product`, () => {
    return HttpResponse.json(productsDb)
  })
]