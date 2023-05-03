import { jest } from '@jest/globals';

// Disable console.warn(...)
// ? Reference: https://stackoverflow.com/a/49591765/18758350
global.console = {
  ...console,
  warn: jest.fn(),
};
