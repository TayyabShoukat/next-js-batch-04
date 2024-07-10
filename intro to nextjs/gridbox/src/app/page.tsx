import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.innerData}>
        <Image src={"/images/1.png"} alt="No Image" height={200} width={200} />
      </div>
      <div className={styles.innerData}>2</div>
      <div className={styles.innerData}>3</div>
      <div className={styles.innerData}>4</div>
      <div className={styles.innerData}>5</div>
      <div className={styles.innerData}>6</div>
      <div className={styles.innerData}>7</div>
      <div className={styles.innerData}>8</div>
      <div className={styles.innerData}>9</div>
    </div>
  );
}
