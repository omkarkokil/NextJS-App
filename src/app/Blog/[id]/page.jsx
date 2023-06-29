import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (res.status === 404) {
    return notFound();
  }

  return res.json();
};

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    desc: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Image src={data.img} height={300} width={400} />
      <div>
        <h1> {data.title}</h1>
        <h6 style={{ lineHeight: 2 }}>Created by {data.username}</h6>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default BlogPost;
