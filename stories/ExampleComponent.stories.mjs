import ExampleComponent from '../src/ExampleComponent.mjs';
import ExampleComponentWithProps from './ExampleComponentWithProps.mjs';

export default {
  title: 'ExampleComponent',
  component: ExampleComponent,
};

export const Example = {
  render: ExampleComponentWithProps,
};
