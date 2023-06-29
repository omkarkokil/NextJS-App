import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Blog page",
  description: "Blog in next",
};

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    // dynamic data
    cache: "no-store",
  });

  if (!res) {
    throw new Error("Error in fetching data");
  }

  return res.json();
};

export default async function Blog() {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          href={`/Blog/${item._id}`}
          className={styles.container}
          key={item.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <p className={styles.name}>{item.username}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
