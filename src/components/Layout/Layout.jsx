import React from "react";
import Container from "../Container";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
