// import type { JestConfigWithTsJest } from "ts-jest";

// const config: JestConfigWithTsJest = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   verbose: true

// }

// export default config;

// docs: https://jestjs.io/docs/configuration
import type { Config } from 'jest';


const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/app/**/*.ts',
  ],

};

export default config;


// testMatch: [
//   `${baseDir}/test/**/*.test.ts`,
// ]