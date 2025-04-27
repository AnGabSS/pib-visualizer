import axios from "axios";

// BCB API client
// Cliente da API BCB
export const bcbApiClient = axios.create({
  baseURL: "https://api.bcb.gov.br",
  headers: {
    "Content-Type": "application/json",
  },
});
