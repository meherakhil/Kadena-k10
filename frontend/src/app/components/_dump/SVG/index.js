import React from 'react';
import PropTypes from 'prop-types';

const SVG = (props) => {
  const { name, className, style } = props;

  let Icon = null;

  try {
    Icon = require(`app.gfx/svg/react/${name}.svg`); // eslint-disable-line global-require
  } catch (e) {
    console.warn(e); // eslint-disable-line
  }

  return Icon ? <Icon.default className={`icon ${className || ''}`} style={style} /> : null;
};

SVG.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default SVG;
