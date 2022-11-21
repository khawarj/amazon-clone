import React from "react";
import { Rating } from "@mui/material";


import { useStateValue } from "../../store/StateProvider";
import CustomButton from "../Button";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [_, dispatch] = useStateValue()
  const removeItem = (e) => {
    e.preventDefault()
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      payload: { id: id}
    })
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>

        <Rating value={rating} />

        <CustomButton onClick={removeItem}>
          Remove item
        </CustomButton>
      </div>
    </div>
  );
}

export default CheckoutProduct;
