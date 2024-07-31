import React from "react";
import styles from "./page.module.css";
export default function Page() {
  const a: number = 3;
  const b: number = 4;
  const c: number = a + b;

  const arr: number[] = [2, 4, 6, 8, 10];

  const arr1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <p>Sum is {c}</p>
      <p>Subtract is {a - b}</p>
      <p>Subtract is {a * b}</p>
      <p>Subtract is {a / b}</p>
      <p>Subtract is {a / b}</p>
      <p>Subtract is {a / b}</p>

      <div className={styles.d}>
        {arr.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <div className={styles.d}>
        {arr.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <div className={styles.d}>
        {arr.map((item) => (
          <p>{item}</p>
        ))}
      </div>

      <div className={styles.container}>
        {arr1
          .filter((item) => item % 2 === 0)
          .map((item, index) => (
            <p key={index} className={styles.p}>
              {item}
            </p>
          ))}
      </div>
    </div>
  );
}
