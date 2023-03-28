/**
 * TODO - delete once src files setup
 */
import PropTypes from 'prop-types';
import React from 'react';

const ExampleComponent = ({ className, ...props }) => {
  return (
    <div {...props} className={className} data-testid="ExampleComponent" />
  );
};

ExampleComponent.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ExampleComponent;
