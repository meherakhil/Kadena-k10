import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../Link';

function Order(props) {
  const { orderNumber, orderDate, items, orderStatus, deliveryDate, viewBtn } = props;

  const getItemsTd = () => {
    const listOfItems = items.map((item, index) => {
      const { name, quantity } = item;
      let itemName = '';
      if (quantity > 1) {
        itemName = `${quantity} x ${name}`;
      } else {
        itemName = name;
      }

      return <span key={index} className="show-table__list-text">{itemName}</span>;
    });

    return (
      <td className="show-table__text-appear">
        <span className="show-table__badge badge badge--s badge--empty badge--bold">{items.length}</span>
        {listOfItems}
      </td>
    );
  };

  return (
    <tr>
      <td>{orderNumber}</td>
      <td>{orderDate}</td>
      {getItemsTd()}
      <td className="show-table__will-hide">{orderStatus}</td>
      <td className="show-table__will-hide">{deliveryDate}</td>
      <td className="show-table__will-appear">
        <Link text={viewBtn.text} href={viewBtn.url} type="action" />
      </td>
    </tr>
  );
}

Order.PropTypes = {
  orderNumber: PropTypes.number.isRequired,
  orderDate: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string),
  orderStatus: PropTypes.string.isRequired,
  deliveryDate: PropTypes.string.isRequired,
  viewBtn: PropTypes.objectOf(PropTypes.string)
};

export default Order;