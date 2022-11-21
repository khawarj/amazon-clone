import React from "react";
import Header from "../../Header";
import { useStateValue } from "../../store/StateProvider";
import CheckoutProduct from "./checkoutProduct";
import "./checkout.css";
import { CheckBox } from "@mui/icons-material";
import CustomButton from "../Button";

const renderEmpty = () => <h1>Your Basket is empty</h1>;

const gift_label = { inputProps: { "aria-label": "This order contains gift" } };

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <Header></Header>
      <div className="checkout__container">
        <div className="checkout__cart">
          {basket?.length === 0
            ? renderEmpty()
            : basket.map((p) => <CheckoutProduct key={p.id} {...p} />)}
        </div>
        <div className="checkout__rightContainer">
          <div className="checkout__subtotal">
            
            <p>Subtotal (2 items): <strong>$1000</strong></p>
            <div className="checkout__checkbox">
              <input type="checkbox" id="gift" name="vehicle1" value="Gift" />
              <label for="gift"> This order contains a gift</label>
            </div>
            <CustomButton className="checkout__btn">
              {" "}
              Proceed to Buy
            </CustomButton>
          </div>
          <div className="checkou__likes"></div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Checkout;
