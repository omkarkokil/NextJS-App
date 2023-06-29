import React from "react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import { items } from "./data";
import Image from "next/image";

const getData = (cate) => {
  const data = items[cate];
  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
