import styles from "./CardItem.module.scss";
import Button from "../Button";
import heartSvg from "../../svg/heart.svg";
import outlineHeartSvg from "../../svg/heart-outline.svg";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const CardItem = (props) => {
  const dispatch = useDispatch();
  const {
    setAddTocartModalProps,
    addToFavorites,
    title,
    img,
    description,
    isFavorite,
    id,
    price,
    toggleAddtocartModal,
    thisCard,
  } = props;

  return (
    <div className={styles.card}>
      <button
        type="button"
        className={styles.likeButton}
        onClick={() => {
          dispatch(addToFavorites({ title, isFavorite, id }));
        }}
      >
        <img src={isFavorite ? heartSvg : outlineHeartSvg} alt="Favourite" />
      </button>
      <img className={styles.itemAvatar} src={img} alt={title} />
      <div className={styles.purchaseData}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>

        <div className={styles.btnContainer}>
          <span className={styles.price}>{price}</span>
          <Button
            onClick={() => {
              dispatch(toggleAddtocartModal(true));
              dispatch(setAddTocartModalProps(thisCard));
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;

CardItem.propTypes = {
  addToCart: PropTypes.func,
  cards: PropTypes.array,
  addToFavorites: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  isFavorite: PropTypes.bool,
  id: PropTypes.number,
  price: PropTypes.string,
};

CardItem.defaultProps = {
  cards: undefined,
  title: "Item",
  description: "Good song",
  isFavorite: false,
  price: 0,
};
