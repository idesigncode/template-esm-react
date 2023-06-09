/**
 * TODO - delete once src files setup
 */
import React from 'react';
import PropTypes from 'prop-types';

const SampleComponent = (props) => {
  return <input {...props} data-testid="SampleComponent" />;
};

SampleComponent.propTypes = {
  className: PropTypes.string.isRequired,
};

export default SampleComponent;
