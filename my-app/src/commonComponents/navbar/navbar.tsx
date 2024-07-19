import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact-us">Contact</Link>
      </div>
    </div>
  );
}
