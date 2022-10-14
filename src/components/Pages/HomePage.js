import CardContainer from "../Card container/CardContainer";
import ModalAddtocart from "../Modal/ModalAddTocart";
import styles from "../Pages/Pages.module.scss";

const HomePage = () => {
  return (
    <>
      <main>
        <section className={styles.leftContainer}>
          <h1>Available Puppies</h1>
          <CardContainer />
        </section>
      </main>
      <ModalAddtocart />
    </>
  );
};

export default HomePage;
