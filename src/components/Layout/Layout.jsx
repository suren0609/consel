import React from "react";
import styles from "./Layout.module.scss";
import Header from "../Header";
import Footer from "../Footer";
import Container from "../Container";

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
