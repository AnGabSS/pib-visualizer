# PIB Visualizer

Link para o deploy do projeto: https://pib-visualizer.vercel.app/

## Descrição

Plataforma que apresenta a evolução do PIB total e per capita do Brasil em dólares, com gráficos interativos e uma tabela organizada. Os dados são consumidos da API do IBGE, garantindo que a aplicação seja atualizada com as informações mais recentes. A interface é totalmente responsiva e focada em desempenho.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor.
- **TypeScript**: Supre a necessidade de tipagem estática no projeto.
- **CSS**: Estilização da aplicação.
- **API IBGE**: Fonte de dados para o PIB. https://servicodados.ibge.gov.br/api/docs
- **economy-api**: api de dados econômicos do Brasil. https://github.com/awesomeapibrasil/economy-api
- **Recharts**: Gráficos interativos.
- **Tailwind CSS**: Estilização da aplicação.

## Como Rodar

Clone o repositório e execute:

```bash
npm install
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Features

- Visualização do PIB total e per capita do Brasil.
- Gráficos interativos para melhor análise.
- Tabela organizada com os dados.
- Interface responsiva para diversos dispositivos.

## Como Contribuir

1. Fork o repositório.
2. Crie uma branch para sua feature (`git checkout -b [FEATURE] nome-da-feature`).
3. Faça suas alterações.
4. Envie um pull request com uma descrição detalhada.

## Designs

Projeto conta com dois designs, ambos fiz baseado nas cores da Conéctar, o principal com fundo branco pois ficaria mais fiel ao app da conéctar e o secundário mais colorido com um fundo laranja que fiz inspirado no site deles, o primeiro está na branch `main` e o segundo na branch `SecondaryDesign`, então sim, pode ficar a vontade para utilizar o que mais gostar.

### Primeiro Design

![1-chart](<public/imgs/design1-charts.png>)
![1-table](<public/imgs/design1-table.png>)

### Segundo Design

![2-chart](<public/imgs/design2-charts.png>)
![2-table](<public/imgs/design2-table.png>)
