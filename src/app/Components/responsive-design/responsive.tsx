import React from "react";
import styles from "./responsive.module.css";

const ResponsiveLoader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
      <div className={styles.loader}></div>
      <div className={styles.loader}></div>
    </div>
  );
};

export default ResponsiveLoader;
