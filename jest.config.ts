const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  roots: ["<rootDir>", "./src"],
  moduleNameMapper: {
    "^@domain/(.*)$": "<rootDir>/src/domain/$1",
    "^@web/(.*)$": "<rootDir>/src/web/$1",
    "^@business-logic/(.*)$": "<rootDir>/src/business-logic/$1",
  },
};

export default config;

console.log(config.roots);
