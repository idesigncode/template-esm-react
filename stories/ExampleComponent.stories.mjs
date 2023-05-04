import React from 'react';
import Source from '@idesigncode/storybook-tools/Source.mjs';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';
import ExampleComponent from '../src/ExampleComponent.mjs';
import ExampleComponentWithProps from './ExampleComponentWithProps.mjs';
import ExampleComponentWithPropsRaw from './ExampleComponentWithProps.mjs?raw';

export default {
  title: 'ExampleComponent',
  component: ExampleComponent,
};

export const Example = {
  render: ExampleComponentWithProps,
  play: async ({ canvasElement, step }) => {
    const input = within(canvasElement).getByTestId('ExampleComponent');

    await step(`ExampleComponent value is updated if user types`, async () => {
      expect(input).not.toHaveValue();
      await userEvent.type(input, 'test');
      expect(input).toHaveValue('test');
    });
  },
};

export const Implementation = {
  render: () => <Source code={ExampleComponentWithPropsRaw} />,
};
