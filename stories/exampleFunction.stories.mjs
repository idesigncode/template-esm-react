import exampleFunction from '../src/exampleFunction.mjs';

export default {
  title: 'exampleFunction',
  component: exampleFunction,
};

export const Example = {
  args: {
    arg: 'This is the argument given to exampleFunction',
  },
  render: (args) => exampleFunction(args.arg),
};
