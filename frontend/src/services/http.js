import axios from 'axios'
import { isArray } from 'lodash'

const BASE_URL = 'http://localhost:3001'
const config = {}

export class http {
  constructor() {
    this.BASE_URL = BASE_URL
  }
  static async doGet(endpoint) {
    return await axios.get(`${BASE_URL}${getFormattedUrl(endpoint)}`, config);
  }
}

const getFormattedUrl = (data) => {
  if (isArray(data)) {
    let [endpoint, params] = data;
    if (!params) {
      return endpoint;
    }
    if (!endpoint.includes('?')) {
      endpoint = endpoint.concat('?')
    }
    return Object.keys(params)?.reduce((acc, item) => {
      if (!acc.includes(`<${item}>`)) {
        acc = acc.concat(`${item}=${params[item]}`)
      } else {
        acc = acc.replace(`<${item}>`, params[item])
      }
      return acc;
    }, endpoint)
  }
  return data;
}