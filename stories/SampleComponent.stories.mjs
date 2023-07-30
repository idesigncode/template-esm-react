import React from 'react';
import Source from '@idesigncode/storybook-tools/Source.mjs';
import { expect, userEvent, within } from '../test/test-utils.mjs';
import SampleComponentExample from './SampleComponent.example.mjs';
import SampleComponentExampleRaw from './SampleComponent.example.mjs?raw';

export default {
  title: 'SampleComponent',
};

export const Example = {
  play: async ({ canvasElement, step }) => {
    const input = within(canvasElement).getByTestId('SampleComponent');

    await step(`SampleComponent value is updated if user types`, async () => {
      expect(input).not.toHaveValue();
      await userEvent.type(input, 'test');
      expect(input).toHaveValue('test');
    });
  },
  render: SampleComponentExample,
};

export const Implementation = {
  args: {
    code: SampleComponentExampleRaw,
  },
  render: (args) => <Source {...args} />,
};
