"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Your Name");
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to my website</h1>
      <h1 className={styles.title}>{name}</h1>
      <button onClick={() => setName("Ali")}>
        Click Here To show Your Name
      </button>
      <div className={styles.innerdiv}>
        <button className={styles.btn} onClick={() => setCount(count - 1)}>
          -
        </button>
        <h2 className={styles.h2}>{count}</h2>
        <button className={styles.btn} onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}
