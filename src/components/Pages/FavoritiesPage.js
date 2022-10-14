import CardContainer from "../Card container/CardContainer";
import ModalAddtocart from "../Modal/ModalAddTocart";
import styles from "../Pages/Pages.module.scss";

const FavoritiesPage = () => {
  const showOnlyFavorities = true;

  return (
    <>
      <main className={styles.pageContainer}>
        <section className={styles.leftContainer}>
          <h1>Your favorities</h1>
          <CardContainer showOnlyFavorities={showOnlyFavorities} />
        </section>
      </main>
      <ModalAddtocart />
    </>
  );
};

export default FavoritiesPage;
