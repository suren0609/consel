import React from "react";
import cardImg from "../../assets/Group 206.png";
import styles from "./ProductCard.module.scss";

const ProductCard = () => {
  return (
    <div className={styles.ProductCard}>
      <img src={cardImg} alt="" />
      <div className={styles.modelNPrice}>
        <p className={styles.model}>42QHA</p>
        <p className={styles.price}>180.000դր</p>
      </div>
    </div>
  );
};

export default ProductCard;
