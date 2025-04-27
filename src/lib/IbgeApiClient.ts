import axios from "axios";

// IBGE API client
// Cliente da API IBGE
export const ibgeApiClient = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v3",
  headers: {
    "Content-Type": "application/json",
  },
});
