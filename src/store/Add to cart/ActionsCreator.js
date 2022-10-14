import { ADD_TO_CART } from "./actions";
import {
  INCREASE_CART_ITEMS,
  DECREASE_CART_ITEMS,
  DELETE_CART_ITEM,
  SET_ADD_TO_CART_MODAL_PROPS,
  TOGGLE_ADD_TO_CART_MODAL,
  SET_DELETE_FROM_CART_MODAL_PROPS,
  TOGGLE_DELETE_FROM_CART_MODAL,
  CLEAN_CART_AFTER_CHECKOUT,
} from "./actions";

export const addToCart = (payload) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload });
};

export const incrementCartItem = (payload) => (dispatch) => {
  dispatch({ type: INCREASE_CART_ITEMS, payload });
};

export const dicrementCartItem = (payload) => (dispatch) => {
  dispatch({ type: DECREASE_CART_ITEMS, payload });
};

export const deleteCartItem = (payload) => (dispatch) => {
  dispatch({ type: DELETE_CART_ITEM, payload });
};

export const setAddTocartModalProps = (payload) => (dispatch) => {
  dispatch({ type: SET_ADD_TO_CART_MODAL_PROPS, payload });
};

export const toggleAddtocartModal = (payload) => (dispatch) => {
  dispatch({ type: TOGGLE_ADD_TO_CART_MODAL, payload });
};

export const setModalProps = (payload) => ({
  type: SET_DELETE_FROM_CART_MODAL_PROPS,
  payload,
});

export const toggleModal = (payload) => ({
  type: TOGGLE_DELETE_FROM_CART_MODAL,
  payload,
});

export const cleanCart = (payload) => ({
  type: CLEAN_CART_AFTER_CHECKOUT,
  payload,
  
})

