import React from "react";
import styels from "./Container.module.scss";

const Container = ({ children }) => {
  return <div className={styels.Container}>{children}</div>;
};

export default Container;
