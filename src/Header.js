import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./store/StateProvider";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const logo = "https://pngimg.com/uploads/amazon/amazon_PNG8.png";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate()

  const Signout = async () => {
    await signOut(auth);
    navigate("/")
  };

  return (
    <nav className="header">
      <Link to={"/"}>
        {" "}
        <img className="header__logo" src={logo} alt="logo"></img>{" "}
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput"></input>
        <SearchIcon className="header__searchicon"></SearchIcon>
      </div>
      <div className="header__nav">
        <Link className="header__link" to="/login">
          <div className="header__option">
            {user ? (
              <>
                {" "}
                <span className="header__optionLineOne">
                  Hello, {user.email}
                </span>
                <span onClick={Signout}>
                  Signout
                </span>
              </>
            ) : (
              <span className="header__optionLineTwo">Sign In</span>
            )}
          </div>
        </Link>

        <Link className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns &</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>

        <Link className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
