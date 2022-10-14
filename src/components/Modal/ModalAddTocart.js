import React from "react";
import styles from "./modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  toggleAddtocartModal,
} from "../../store/Add to cart/ActionsCreator";

const ModalAddtocart = (props) => {
  const dispatch = useDispatch();
  const addTocartModalProps = useSelector(
    (store) => store.addToCart.addTocartModalProps
  );
  const isOpenModalAddTocart = useSelector(
    (store) => store.addToCart.isOpenModalAddTocart
  );

  if (!isOpenModalAddTocart) {
    return null;
  }

  return (
    <>
      <div
        className={styles.darkBG}
        onClick={() => dispatch(toggleAddtocartModal(false))}
      />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Adding item to cart</h5>
            <button
              className={styles.closeBtn}
              onClick={() => dispatch(toggleAddtocartModal(false))}
            >
              X
            </button>
          </div>
          <div className={styles.modalContent}>
            Are you sure to add {addTocartModalProps.title} to cart ?
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <button
                  className={styles.cancelBtn}
                  onClick={() => dispatch(toggleAddtocartModal(false))}
                >
                  Cancel
                </button>
                <button
                  className={styles.addBtn}
                  onClick={() => {
                    dispatch(addToCart(addTocartModalProps));
                    dispatch(toggleAddtocartModal(false));
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAddtocart;
