import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Home Page</div>
    </div>
  );
}
