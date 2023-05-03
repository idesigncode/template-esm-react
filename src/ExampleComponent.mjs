/**
 * TODO - delete once src files setup
 */
import PropTypes from 'prop-types';
import React from 'react';

const ExampleComponent = (props) => {
  return <input {...props} data-testid="ExampleComponent" />;
};

ExampleComponent.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ExampleComponent;
