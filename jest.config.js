module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",  // Mapeia o alias @ para o diretório src
    },
  };
  