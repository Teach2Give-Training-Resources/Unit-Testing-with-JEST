# Unit Testing with JEST

## What is Software Testing

The process of Evaluating and conforming thar our application does what it is supposed to do

### Why do we need to Test?

* To prevent Bugs
* Improve Perfomance
* Reduce Development cost
* Reliability and customer satisfaction

### Types of Tests

* Unit Test: Testing Individual units of source code.i.e function, method, object, module ....
* Intergration Test: Combines different units..
* End-to-End Test:  Involves replicating end user behaviour

## What is JEST

Jest is a JavaScript framework. It works with project using TypeScript, Node, Angular, React.....

It was created by Facebook to help test JavaScript code

[Link to the official documentation](https://jestjs.io/docs/getting-started "visit the link")

* Most popular and most supported
* It is all in one solution
* It is a test runner and also an assertion library that gives us powerful set of Matchers,

### Intro to Unit Test

#### *step 1. Setup Your Project with TypeScript*

use the Readme.md on GitHub to setup typescript project: [link to the repo](https://github.com/Teach2Give-Training-Resources/Setup-TypeScript-with-tsx "click on the link")

#### *step 2: Install Jest with additional dependencies*

pnpm i -D jest ts-jest @types/jest ts-node

**Description:**

**ts-jest -** It integrates seamlessly with Jest, making it easier to run tests on TypeScript code without needing additional transpilation steps.

**@types/jest** - provides type definitions for Jest, a unit testing framework for JavaScript. It provides type-checking and auto-completion for Jest functions, objects, and classes.

#### *step 3: Create a jest config file*

on the root dir, create a file with the name: ***jest.config.ts***

Add the following code in the created file:

```ts
import type {Config} from 'jest';

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
};

export default config;
```

This will create jest.config.js, It allows developers to customize Jest's behavior by specifying various settings, such as test environment, coverage collection, module resolution, and more.

#### *step 4: Create src folder and add **app** and **test***

Attached is a screenshot of how your folder structure should look like.

![1747478427828](image/Readme/1747478427828.png)

## step 5: Running our first test ur first test

* Create a file: ***BasicUtils.ts*** inside app folder and add the following code.

```ts
export function product(a: number, b: number): number {
    return a * b;
}
```

* Create a file: ***BasicUtils.test.ts*** inside test folder and add the following code.

```ts
import { product } from "../app/BasicUtils"

describe("BasicUtils test suite ", () => {
    it("should return the product of 3 and 2 ", () => {
        const actual = product(3, 2)
        expect(actual).toBe(6)
    })
})
```

Add test script on package.json file

```json
{
  "name": "unit-testing",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc",
    "start": "npm run build && node dist/index.js",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "packageManager": "pnpm@10.11.0",
  "devDependencies": {
    "ts-node": "^10.9.2",
    "tsx": "^4.19.4",
    "typescript": "^5.8.3"
  },
  "dependencies": {
    "@types/jest": "^29.5.14",
    "jest": "^29.7.0",
    "ts-jest": "^29.3.4"
  }
}

```

Open your terminal and run the following command:

`pnpm run test`

You should have the following on your terminal:

![your first test result](image/Readme/1747478969480.png "your first test result")

Congratulations you written your first test with Jest

## Properly Written Unit Test

A well written unit test should undergo the AAA phases

1. A - Arrange: Initialises a small piece of an application it wants to test (SUT)
2. A- Act: Applies some stimulus
3. A- Assert: Observes the resulting behaviour

## FIRST-U Principle

To write a good unit test, we should apply the FIRST-U

1. F - Fast: Unit test should be fast
2. I - Independent: Should not depend on other test cases
3. R - Repeatable: should produce the same result each time you run it
4. S - Self-validating: determine if the actual output is according to the expected. No manual interpretation
5. T - Timely: It can be written anytime but TDD is a good practice
6. U - Understandable: clear and easy to understand
