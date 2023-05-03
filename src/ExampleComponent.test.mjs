/**
 * TODO - delete once src files setup
 */
/* eslint-disable react/prop-types */
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  jest,
  test,
} from '@jest/globals';
import React from 'react';
import * as testUtils from '../test/test-utils.mjs';
import ExampleComponent from './ExampleComponent.mjs';

const { render, screen, user } = testUtils;

describe(`ExampleComponent`, () => {
  describe(`renders correctly if required props given`, () => {
    test(`is initially rendered`, async () => {
      render(<ExampleComponent className="Test" />);

      const div = screen.getByTestId('ExampleComponent');
      expect(div).not.toBeNull();
      expect(div.classList.contains('Test')).toBe(true);
    });
  });

  describe(`logs console.errors if required props not given`, () => {
    const { error } = console;
    beforeEach(() => {
      console.error = jest.fn();
    });
    afterEach(() => {
      console.error = error;
    });

    test('`className`', async () => {
      expect(console.error).not.toHaveBeenCalled();
      render(<ExampleComponent />);
      expect(console.error).toHaveBeenCalled();
    });
  });

  describe(`[onClick] function fired`, () => {
    test(`on user click event`, async () => {
      const onClick = jest.fn();
      expect(onClick).not.toHaveBeenCalled();

      render(<ExampleComponent className="Test" onClick={onClick} />);

      await user.click(screen.getByTestId('ExampleComponent'));
      expect(onClick).toHaveBeenCalled();
    });
  });
});
