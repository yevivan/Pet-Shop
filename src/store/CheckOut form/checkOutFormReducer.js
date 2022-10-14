import { SHOW_CHECK_OUT_FORM } from "./actions";
import { HIDE_CHECK_OUT_FORM } from "./actions";
import {SHOW_BUY_NOW_BTN} from "./actions";
import { HIDE_BUY_NOW_BTN } from "./actions";

const initialState = {
  checkOutIsopen: false,
  buyNowBtnIsopen: true,
};

 const checkOutfromReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CHECK_OUT_FORM: {
        return { ...state, checkOutIsopen: true};
    }

    case HIDE_CHECK_OUT_FORM: {
        return { ...state, checkOutIsopen: false};
    }

    case SHOW_BUY_NOW_BTN: {
      return { ...state, buyNowBtnIsopen: true };
    }

    case HIDE_BUY_NOW_BTN: {
        return { ...state, buyNowBtnIsopen: false };
      }
    default: {
      return state;
    }
  }
};

export default checkOutfromReducer