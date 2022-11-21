import { Rating } from "@mui/material";
import React from "react";
import { useStateValue } from "../../../store/StateProvider";
import CustomButton from "../../Button";

import "./product.css";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue()

  const addToBasket = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product__body">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <Rating value={rating} />
      </div>

      <img className="product__img" src={image} alt={title} />
      <CustomButton onClick={addToBasket}>Add to basket</CustomButton>
    </div>
  );
}

export default Product;
