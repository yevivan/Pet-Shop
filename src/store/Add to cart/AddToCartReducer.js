import {
  ADD_TO_CART,
  INCREASE_CART_ITEMS,
  DECREASE_CART_ITEMS,
  DELETE_CART_ITEM,
  SET_ADD_TO_CART_MODAL_PROPS,
  TOGGLE_ADD_TO_CART_MODAL,
  SET_DELETE_FROM_CART_MODAL_PROPS,
  TOGGLE_DELETE_FROM_CART_MODAL,
  CLEAN_CART_AFTER_CHECKOUT,
} from "./actions";

const initialState = {
  carts: JSON.parse(localStorage.getItem("carts")) || [],
  addTocartModalProps: {},
  isOpenModalAddTocart: false,
  modalProps: {},
  isOpenModal: false,
};
export const addToCartreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const cartsArr = [...state.carts];
      const index = cartsArr.findIndex((el) => el.id === action.payload.id);
      if (index === -1) {
        cartsArr.push({ ...action.payload, count: 1 });
      } else {
        cartsArr[index].count += 1;
      }
      localStorage.setItem("carts", JSON.stringify(cartsArr));
      return { ...state, carts: cartsArr };
    }

    case INCREASE_CART_ITEMS: {
      const arrCarts = [...state.carts];
      const index = arrCarts.findIndex((el) => el.id === action.payload);
      if (index !== -1) {
        arrCarts[index].count += 1;
      }
      localStorage.setItem("carts", JSON.stringify(arrCarts));
      return { ...state, carts: arrCarts };
    }

    case DECREASE_CART_ITEMS: {
      const arrCarts = [...state.carts];
      const index = arrCarts.findIndex((el) => el.id === action.payload);
      if (index !== -1 && arrCarts[index].count > 1) {
        arrCarts[index].count -= 1;
      }
      localStorage.setItem("carts", JSON.stringify(arrCarts));
      return { ...state, carts: arrCarts };
    }

    case DELETE_CART_ITEM: {
      const cartsArr = [...state.carts];
      const index = cartsArr.findIndex((el) => el.id === action.payload);
      if (index !== -1) {
        cartsArr.splice(index, 1);
      }
      localStorage.setItem("carts", JSON.stringify(cartsArr));

      return { ...state, carts: cartsArr };
    }

    case SET_ADD_TO_CART_MODAL_PROPS: {
      return { ...state, addTocartModalProps: action.payload };
    }

    case TOGGLE_ADD_TO_CART_MODAL: {
      return { ...state, isOpenModalAddTocart: action.payload };
    }

    case SET_DELETE_FROM_CART_MODAL_PROPS: {
      return { ...state, modalProps: action.payload };
    }

    case TOGGLE_DELETE_FROM_CART_MODAL: {
      return { ...state, isOpenModal: action.payload };
    }

    case CLEAN_CART_AFTER_CHECKOUT: {
      localStorage.setItem("carts", JSON.stringify(null));
      return {
        ...state,
        carts: JSON.parse(localStorage.getItem("carts")) || [],
      };
    }

    default: {
      return state;
    }
  }
};

export default addToCartreducer;
