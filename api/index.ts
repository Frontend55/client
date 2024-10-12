import axios from "axios";

const instance = axios.create({
  baseURL: 'https://app.xn----8sburvngh0h.xn--p1ai/'
})

export const api = instance;