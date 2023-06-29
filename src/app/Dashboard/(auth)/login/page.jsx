"use client";
import { signIn, useSession } from "next-auth/react";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  const session = useSession();

  console.log(session);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/Dashboard");
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Welcome Back</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
        {/* {error && error} */}
      </form>
      <button
        className={styles.button + " " + styles.google}
        onClick={() => signIn("google")}
      >
        Login with google
      </button>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/Dashboard/register">
        Create new account
      </Link>
    </div>
  );
};

export default Login;
