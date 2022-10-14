import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCards } from "./store/Getting cards/ActionsCreator";
import styles from "./App.module.scss";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header/Header";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  return (
    <div className={styles.App}>
      <Header />
      <section>
        <AppRoutes />
      </section>
    </div>
  );
};

export default App;
