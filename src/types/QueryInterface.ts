import { ResultInterface } from "./ResultInterface";

export interface QueryInterface {
  id: string;
  variavel: string;
  unidade: string;
  resultados: ResultInterface[];
}
