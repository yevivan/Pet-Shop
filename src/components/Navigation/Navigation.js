import { NavLink } from "react-router-dom";
import styles from "../Navigation/Navigation.module.scss";
import cartIcon from "../../svg/cart-outline.svg";
import heartIcon from "../../svg/heart.svg";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Navigation = () => {
  const favourites = useSelector((store) => store.getCards.favourites);
  const carts = useSelector((store) => store.addToCart.carts);
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Pet SHOP</NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.cardContainer}>
        <ul>
          <li>
            <NavLink to="/cart">
              <img src={cartIcon} alt="Cart" />
            </NavLink>
          </li>
        </ul>
        <span>{carts.length}</span>
        <ul>
          <li>
            <NavLink to="/favorities">
              <img src={heartIcon} alt="heart" />
            </NavLink>
          </li>
        </ul>
        <span>{favourites.length}</span>
      </div>
    </>
  );
};

export default Navigation;

Navigation.propTypes = {
  itemsCount: PropTypes.number,
  fovoritesCount: PropTypes.number,
};

Navigation.defaultProps = {
  itemsCount: 0,
  fovoritesCount: 0,
};
