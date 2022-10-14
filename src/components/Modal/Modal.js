import React from "react";
import styles from "./modal.module.scss";
import PropTypes, { object } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartItem,
  toggleModal,
} from "../../store/Add to cart/ActionsCreator";

const Modal = () => {
  const dispatch = useDispatch();
  const modalProps = useSelector((store) => store.addToCart.modalProps);
  const isOpen = useSelector((store) => store.addToCart.isOpenModal);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className={styles.darkBG}
        onClick={() => dispatch(toggleModal(false))}
      />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Deleting item from cart</h5>
            <button
              className={styles.closeBtn}
              onClick={() => dispatch(toggleModal(false))}
            >
              X
            </button>
          </div>
          <div className={styles.modalContent}>
            Are you sure to delete {modalProps.title}?
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <button
                  className={styles.cancelBtn}
                  onClick={() => dispatch(toggleModal(false))}
                >
                  Cancel
                </button>
                <button
                  className={styles.deleteBtn}
                  onClick={() => {
                    dispatch(deleteCartItem(modalProps.id));
                    dispatch(toggleModal(false));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  className: PropTypes.string,
  modalProps: object,
};

Modal.defaultProps = {
  isOpen: true,
  className: "",
};

export default Modal;
