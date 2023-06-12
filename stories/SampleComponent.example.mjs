import React from 'react';
import PropsTable from '@idesigncode/storybook-tools/PropsTable.mjs';
import SampleComponent from '../src/SampleComponent.mjs';

const SampleComponentExample = () => {
  const [value, setValue] = React.useState('');

  return (
    <PropsTable>
      <SampleComponent
        onChange={(event) => setValue(event.target.value)}
        className="SampleComponent"
        value={value}
      />
    </PropsTable>
  );
};

export default SampleComponentExample;
