import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 now copywrite</div>
      <div className={styles.imgcontainer}>
        <Image src="/1.png" alt="none" width={15} height={15} />
        <Image src="/2.png" alt="none" width={15} height={15} />
        <Image src="/3.png" alt="none" width={15} height={15} />
        <Image src="/4.png" alt="none" width={15} height={15} />
      </div>
    </div>
  );
};

export default Footer;
