import Source from '@idesigncode/storybook-tools/Source.mjs';
import sampleFunction from '../src/sampleFunction.mjs';
import { expect } from '../test/test-utils.mjs';

export default {
  title: 'sampleFunction',
  component: sampleFunction,
};

export const Example = {
  args: {
    arg: 'This is the argument given to sampleFunction',
  },
  render: (args) => sampleFunction(args.arg),
  play: async ({ args, canvasElement, step }) => {
    await step(`Outputs the given argument`, async () => {
      expect(canvasElement).toHaveTextContent(args.arg);
    });
  },
};

export const Implementation = {
  args: {
    code: `sampleFunction('${Example.args.arg}')`,
  },
  render: Source,
};
