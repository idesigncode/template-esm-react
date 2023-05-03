/**
 * TODO - delete once src files setup
 */
import { describe, expect, test } from '@jest/globals';
import exampleFunction from './exampleFunction.mjs';

describe(`exampleFunction`, () => {
  test(`returns the parameter given`, async () => {
    const result = exampleFunction('string');
    expect(result).not.toBeNull();
    expect(result).toBe('string');
  });
});
