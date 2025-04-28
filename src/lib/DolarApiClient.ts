import axios from "axios";

// Awesome API client
// Cliente da Awesome API
export const dolarApiClient = axios.create({
  baseURL: "https://economia.awesomeapi.com.br/json",
  headers: {
    "Content-Type": "application/json",
  },
});
