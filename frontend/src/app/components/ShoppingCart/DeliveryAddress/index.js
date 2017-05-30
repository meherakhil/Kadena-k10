import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Address from './Address';

class DeliveryAddress extends Component {
  render() {
    const { ui, checkedId, changeShoppingData } = this.props;
    const { title, description, addAddressLabel, items } = ui;

    const addresses = items.map((item) => {
      return (
        <div key={`da-${item.id}`} className="input__wrapper">
          <Address changeShoppingData={changeShoppingData} checkedId={checkedId} {...item} />
        </div>
      );
    });

    return (
      <div>
        <div>
          <h2>{title}</h2>
          <div className="cart-fill__block">
            <p className="cart-fill__info">{description}</p>
            <div className="cart-fill__block-inner cart-fill__block--flex">
              {addresses}
              <div className="btn-group btn-grout--left">
                <button
                  type="button"
                  data-dialog="#cart-add-adress"
                  className="btn-action btn-action--secondary js-dialog">
                  {addAddressLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DeliveryAddress.propTypes = {
  ui: PropTypes.object
};

export default DeliveryAddress;
