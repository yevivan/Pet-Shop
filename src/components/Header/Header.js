import styles from "./Header.module.scss";
import PropTypes from "prop-types";
import Navigation from "../Navigation/Navigation";


const Header = (props) => {
  const { itemsCount, fovoritesCount } = props;
  return (
    <header className={styles.header}>
      <Navigation itemsCount={itemsCount} fovoritesCount={fovoritesCount} />
    </header>
  );
};

export default Header;

Header.propTypes = {
  itemsCount: PropTypes.number,
  fovoritesCount: PropTypes.number,
};

Header.defaultProps = {
  itemsCount: 0,
  fovoritesCount: 0,
};
