import CartContainer from "../CartContainer/CartContainer";
import styles from "../Pages/Pages.module.scss";
import Modal from "../Modal/Modal";
import { Form } from "../Form/Form";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  showCheckoutForm,
  showBuyNowBtn,
  hideBuyNowBtn,
} from "../../store/Check our form/actionsCreator";

const CartPage = () => {
  const dispatch = useDispatch();
  const buyNowBtnIsopen = useSelector(
    (store) => store.checkOut.buyNowBtnIsopen
  );
  const carts = useSelector((store) => store.addToCart.carts);
  const checkOutIsopen = useSelector((store) => store.checkOut.checkOutIsopen);
  useEffect(() => {
    if (carts.length !== 0 && !checkOutIsopen) {
      dispatch(showBuyNowBtn());
    }
  }, [carts, dispatch, checkOutIsopen]);

  return (
    <main className={styles.pageContainer}>
      <h2>Cart</h2>
      <CartContainer />

      {carts.length !== 0 && buyNowBtnIsopen && (
        <Button
          onClick={() => {
            dispatch(showCheckoutForm());
            dispatch(hideBuyNowBtn());
          }}
          className={styles.buyNowNtn}
        >
          Buy now
        </Button>
      )}
      <Form />
      <Modal />
    </main>
  );
};

export default CartPage;
