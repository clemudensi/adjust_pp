const path = require("path");

module.exports = {
  roots: [path.resolve(__dirname, "../src")],
  testEnvironment: "jest-environment-jsdom-sixteen",
  displayName: "local",
  testURL: "http://localhost",
  setupFilesAfterEnv: [path.resolve(__dirname, "./src/setupTests.ts")],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};
