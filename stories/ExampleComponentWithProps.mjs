import React from 'react';
import PropsTable from '@idesigncode/storybook-tools/PropsTable.mjs';
import ExampleComponent from '../src/ExampleComponent.mjs';

const ExampleComponentWithProps = () => {
  const [value, setValue] = React.useState('');

  return (
    <PropsTable>
      <ExampleComponent
        onChange={(event) => setValue(event.target.value)}
        className="ExampleComponentWithProps"
        value={value}
      />
    </PropsTable>
  );
};

export default ExampleComponentWithProps;
