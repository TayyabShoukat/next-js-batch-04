"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const [state, setState] = useState([]);

  const apiGet = async () => {
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      setState(data?.data);
      console.log(data?.data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div>
      <div className={styles.heading}>Fake Store Api</div>
      <div className={styles.cardsContainer}>
        {state?.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardImage}>
              <img src={item?.image} alt="no image" height={100} width={200} />
            </div>
            <div className={styles.cardDetails}>{item?.title}</div>
            <div className={styles.description}>{item?.description}</div>
            <div className={styles.price}>{item?.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
