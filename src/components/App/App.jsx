import HomePage from "../../pages/HomePage";
import Layout from "../Layout";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}

export default App;
