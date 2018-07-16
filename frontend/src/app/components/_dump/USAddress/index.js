import React from 'react';
import PropTypes from 'prop-types';

const USAddress = (props) => {
  const createAddressElement = (content) => {
    if (content) return <p>{content}</p>;
    return null;
  };

  return (
    <div>
      {createAddressElement(props.customerName)} {/* check bcz on the stage it could be undefined but required by AC 💆 */}
      {createAddressElement(props.company)}
      <p>{props.address1}</p>
      {createAddressElement(props.address2)}
      <p>{props.city}, {props.state} {props.zip}</p>
      {createAddressElement(props.country)}
      {createAddressElement(props.phone)}
      {createAddressElement(props.email)}
    </div>
  );
};

USAddress.propTypes = {
  customerName: PropTypes.string.isRequired,
  email: PropTypes.string,
  address1: PropTypes.string.isRequired,
  address2: PropTypes.string,
  city: PropTypes.string.isRequired,
  state: PropTypes.string,
  zip: PropTypes.string.isRequired,
  country: PropTypes.string,
  phone: PropTypes.string,
  company: PropTypes.string
};

export default USAddress;
