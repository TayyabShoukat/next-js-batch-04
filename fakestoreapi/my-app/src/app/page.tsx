"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const [state, setState] = useState([]);

  const apiGet = async () => {
    try {
      // const data = await axios.get("https://fakestoreapi.com/products");
      const data = await axios.get("https://dummyjson.com/recipes");
      setState(data?.data?.recipes);
      console.log(data?.data?.recipes);
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
            <div className={styles.cardDetails}>{item?.name}</div>
            <div className={styles.description}>{item?.rating}</div>
            <div className={styles.price}>{item?.prepTimeMinutes}</div>
            <div className={styles.cuisine}>{item?.cuisine}</div>
            <div className={styles.ingredients}>
              {item?.ingredients?.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
            <div className={styles.instructions}>
              {item?.instructions?.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
            <div className={styles.tags}>
              {item?.tags?.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
