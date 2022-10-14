import { GET_CARDS } from "./actions";
import { SET_FAVORITE_CARD, SET_CARDS_FAVORITES_ON_DOWNLOAD } from "./actions";

export const getCards = () => async (dispatch) => {
  try {
    const cards = await fetch(`items.json`).then((res) => res.json());
    dispatch({ type: GET_CARDS, payload: cards });
    dispatch({ type: SET_CARDS_FAVORITES_ON_DOWNLOAD, payload: cards });
  } catch (err) {
    console.log(err);
  }
};

export const addToFavorites = (payload) => (dispatch) => {
  dispatch({ type: SET_FAVORITE_CARD, payload });
};
