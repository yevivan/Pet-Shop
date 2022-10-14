import CartItem from "../CartItem/";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
  incrementCartItem,
  dicrementCartItem,
  setModalProps,
  toggleModal,
} from "../../store/Add to cart/ActionsCreator";

const CartContainer = () => {
  const carts = useSelector((store) => store.addToCart.carts);
  const checkOutIsopen = useSelector((store) => store.checkOut.checkOutIsopen);
  if (checkOutIsopen) {
    return null
  }
  return (
    <ul>
      {carts.map(({ title, img, count, id }) => {
        return (
          <CartItem
            key={id}
            setModalProps={setModalProps}
            toggleModal={toggleModal}
            title={title}
            img={img}
            count={count}
            id={id}
            incrementCartItem={incrementCartItem}
            dicrementCartItem={dicrementCartItem}
          />
        );
      })}
    </ul>
  );
};

export default CartContainer;

CartContainer.propTypes = {
  incrementCartItem: PropTypes.func,
  carts: PropTypes.array,
  dicrementCartItem: PropTypes.func,
  toggleModal: PropTypes.func,
  setModalProps: PropTypes.func,
};

CartContainer.defaultProps = {
  carts: [],
};
