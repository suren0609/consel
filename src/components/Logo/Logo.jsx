import React from "react";
import conselLogo from "../../assets/consel_logo 2.png";
import logoMob from "../../assets/consel_logo 1 (1).png";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <a href="#">
      <img className={styles.deskLogo} src={conselLogo} alt="" />
      <img className={styles.mobLogo} src={logoMob} alt="" />
    </a>
  );
};

export default Logo;
