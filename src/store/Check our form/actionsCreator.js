import { SHOW_CHECK_OUT_FORM } from "./actions";
import { HIDE_CHECK_OUT_FORM } from "./actions";
import { SHOW_BUY_NOW_BTN } from "./actions";
import { HIDE_BUY_NOW_BTN } from "./actions";
export const showCheckoutForm = () => ({ type: SHOW_CHECK_OUT_FORM });
export const hideCheckoutForm = () => ({ type: HIDE_CHECK_OUT_FORM });

export const showBuyNowBtn = () => ({ type: SHOW_BUY_NOW_BTN });

export const hideBuyNowBtn = () => ({ type: HIDE_BUY_NOW_BTN });
