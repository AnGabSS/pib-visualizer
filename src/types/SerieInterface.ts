export interface SerieInterface {
  localidade: {
    id: string;
    nivel: {
      id: string;
      nome: string;
    };
    nome: string;
  };
  serie: Record<string, string>;
}
