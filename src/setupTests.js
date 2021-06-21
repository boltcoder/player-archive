// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

const normalError = console.error.bind(console.error);

beforeAll(() => {
  console.error = (...error) => {
    /*
      if error is a proptype error and includes the following string: `Warning: Failed prop type:`
      suppress the error and don't show it
      if it is not a proptype error, we show it
    */
    const suppressedErrors = error.some(arg=> arg.toString().includes("Warning: Failed %s type: %s%s"));
    !suppressedErrors && normalError(...error)
  }
})
afterAll(() => {
  console.error = normalError;
})