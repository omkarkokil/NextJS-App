import React from "react";
import styles from "./portfolio.module.css";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/Portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/Portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/Portfolio/applications" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  );
}
