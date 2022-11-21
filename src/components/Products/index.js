import React from "react";
import Product from "./product/product";
import "./index.css";
import { useStateValue } from "../../store/StateProvider";



function Products() {
  const [{ products: productsList }] = useStateValue();
  return (
    <div className="products__container">
      <div className="products__home__row">
        {productsList.slice(0, 2).map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </div>
      <div className="products__home__row">
        {productsList.slice(2, 5).map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </div>
      <div className="products__home__row">
        {productsList.slice(5, 7).map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}

export default Products;
