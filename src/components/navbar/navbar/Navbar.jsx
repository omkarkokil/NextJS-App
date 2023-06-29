"use client";
import Link from "next/link";
import React from "react";
import Styles from "./navbar.module.css";
import Toggle from "@/components/Toogle/toggle";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/Portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/Blog",
    },
    {
      id: 4,
      title: "About",
      url: "/About",
    },
    {
      id: 5,
      title: "Contact",
      url: "/Contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/Dashboard",
    },
  ];

  const session = useSession();

  return (
    <div className={Styles.container}>
      <Link className={Styles.logo} href={"/"}>
        ONENEWAPP
      </Link>
      <div className={Styles.links}>
        <Toggle />
        {links.map((link, id) => (
          <Link href={link.url} key={id} className={Styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
      {session.status === "authenticated" && (
        <button className={Styles.logout} onClick={signOut}>
          logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
