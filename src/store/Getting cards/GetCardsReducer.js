import { GET_CARDS } from "./actions";
import { SET_FAVORITE_CARD, SET_CARDS_FAVORITES_ON_DOWNLOAD } from "./actions";

const initialState = {
  cards: [],
  favourites: JSON.parse(localStorage.getItem("favourites")) || [],
  // fovoriteCards:JSON.parse(localStorage.getItem("favourites")) || []
};
export const getcardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS: {
      return { ...state, cards: action.payload };
    }

    case SET_FAVORITE_CARD: {
      if (!action.payload.isFavorite) {
        const arrFavourites = [...state.favourites];
        arrFavourites.push({ ...action.payload, isFavorite: true });
        const arrCards = state.cards.map((el) => {
          if (el.id === action.payload.id) {
            el.isFavorite = true;
          }
          return el;
        });
        localStorage.setItem("favourites", JSON.stringify(arrFavourites));
        return { ...state, favourites: arrFavourites, cards: arrCards };
      } else {
        const arrFavourites = [...state.favourites];
        const index = arrFavourites.findIndex(
          (el) => el.id === action.payload.id
        );
        arrFavourites.splice(index, 1);
        const arrCards = state.cards.map((el) => {
          if (el.id === action.payload.id) {
            el.isFavorite = false;
          }
          return el;
        });
        localStorage.setItem("favourites", JSON.stringify(arrFavourites));
        return { ...state, favourites: arrFavourites, cards: arrCards };
      }
    }

    case SET_CARDS_FAVORITES_ON_DOWNLOAD: {
      const cards = action.payload.map((el) => {
        state.favourites.forEach((element) => {
          if (el.id === element.id) {
            el.isFavorite = true;
          }
        });
        return el;
      });
      return { ...state, cards: cards };
    }

    default: {
      return state;
    }
  }
};

export default getcardsReducer;
