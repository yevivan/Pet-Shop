import CardItem from "../Card/CardItem";
import styles from "./CardContainer.module.scss";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { addToFavorites } from "../../store/Getting cards/ActionsCreator";
import {
  setAddTocartModalProps,
  toggleAddtocartModal,
} from "../../store/Add to cart/ActionsCreator";

const CardContainer = (props) => {
  const cards = useSelector((store) => store.getCards.cards);
  const { showOnlyFavorities } = props;
  // Используется этот контейнер для вывода либо всех карточек, либо избранных. Пропс showOnlyFavorities для условия
  if (!showOnlyFavorities) {
    return (
      <div>
        <ul className={styles.list}>
          {cards.map((card) => (
            <li key={card.id}>
              <CardItem
                addToFavorites={addToFavorites}
                id={card.id}
                title={card.title}
                description={card.description}
                img={card.img}
                isFavorite={card.isFavorite}
                price={card.price}
                thisCard={card}
                toggleAddtocartModal={toggleAddtocartModal}
                setAddTocartModalProps={setAddTocartModalProps}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul className={styles.list}>
          {cards.map((card) => {
            if (card.isFavorite === true) {
              return (
                <li key={card.id}>
                  <CardItem
                    addToFavorites={addToFavorites}
                    id={card.id}
                    title={card.title}
                    description={card.description}
                    img={card.img}
                    isFavorite={card.isFavorite}
                    price={card.price}
                    thisCard={card}
                    toggleAddtocartModal={toggleAddtocartModal}
                    setAddTocartModalProps={setAddTocartModalProps}
                  />
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
};

export default CardContainer;

CardContainer.propTypes = {
  showOnlyFavorities: PropTypes.bool,
  addToCart: PropTypes.func,
  cards: PropTypes.array,
  addToFavorites: PropTypes.func,
};

CardContainer.defaultProps = {
  cards: undefined,
};
