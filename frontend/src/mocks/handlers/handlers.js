import { http, HttpResponse } from "msw"
import { productsDb } from "./Mapping/productsMapping"

export const handlers = [
  http.get("http://drynnuts.com/product", () => {
    return HttpResponse.json(productsDb)
  })
]