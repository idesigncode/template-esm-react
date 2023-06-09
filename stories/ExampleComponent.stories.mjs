import Source from '@idesigncode/storybook-tools/Source.mjs';
import ExampleComponent from '../src/ExampleComponent.mjs';
import { expect, userEvent, within } from '../test/test-utils.mjs';
import ExampleComponentExample from './ExampleComponent.example.mjs';
import ExampleComponentExampleRaw from './ExampleComponent.example.mjs?raw';

export default {
  title: 'ExampleComponent',
  component: ExampleComponent,
};

export const Example = {
  play: async ({ canvasElement, step }) => {
    const input = within(canvasElement).getByTestId('ExampleComponent');

    await step(`ExampleComponent value is updated if user types`, async () => {
      expect(input).not.toHaveValue();
      await userEvent.type(input, 'test');
      expect(input).toHaveValue('test');
    });
  },
  render: ExampleComponentExample,
};

export const Implementation = {
  args: {
    code: ExampleComponentExampleRaw,
  },
  render: Source,
};
