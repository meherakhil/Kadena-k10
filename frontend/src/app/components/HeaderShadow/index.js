import React from 'react';
import { connect } from 'react-redux';

const HeaderShadow = (props) => {
  return props.isShownHeaderShadow ? <div className="header-shadow"> </div> : null;
};

export default connect((state) => {
  const { isShownHeaderShadow } = state;
  return { isShownHeaderShadow };
}, {})(HeaderShadow);