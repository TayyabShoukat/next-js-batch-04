import React from "react";
import jsondata from "../../../../data.json";
import Image from "next/image";
import styles from "./products.module.css";

export default function Page({ params }: any) {
  const result = jsondata?.filter((item) => item?.slug === params?.slug);

  return (
    <div>
      {result?.map((item: any, index: any) => (
        <div key={index} className={styles.container}>
          <h1 className={styles.title}>{item?.slug}</h1>
          <Image src={item?.src} alt="no image" height={800} width={800} />
          <p className={styles.description}>{item?.description}</p>
        </div>
      ))}
    </div>
  );
}
