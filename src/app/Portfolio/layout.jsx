import React from "react";
import styles from "./portfolio.module.css";

const layout = ({ children }) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our gallary</h1>
      {children}
    </div>
  );
};

export default layout;
