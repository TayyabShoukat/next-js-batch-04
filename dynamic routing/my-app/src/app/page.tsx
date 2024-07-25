import Image from "next/image";
import styles from "./page.module.css";
import jsondata from "../../data.json";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hotel Website</h1>
      <div className={styles.cardContainer}>
        {jsondata?.map((card, index) => (
          <Link href={`/products/${card.slug}`} key={index} className={styles.link}>
            <div className={styles.card}>
              <Image src={card?.src} alt="no image" height={300} width={300} className={styles.image}/>
              <h2 className={styles.breakfastHeading}>{card?.slug}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
