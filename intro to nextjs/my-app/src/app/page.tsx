import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src={"/images/logo.png"} alt="Logo" width={100} height={100} />
        </div>
        <div className={styles.options}>
          <ul className={styles.listOptions}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      <div className={styles.menu}>
        <p className={styles.p1}>REQUIREMENTS</p>
        <p className={styles.p2}>
          Representation of <span className={styles.span}>DigiNeticx</span>
        </p>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <p className={styles.cardnum}>1</p>
            <p className={styles.cardHeading}>Outline</p>
            <p className={styles.cardDescriptionm}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              molestiae cupiditate quo, ullam ipsum earum architecto
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardnum}>2</p>
            <p className={styles.cardHeading}>Outline</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              molestiae cupiditate quo, ullam ipsum earum architecto
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardnum}>3</p>
            <p className={styles.cardHeading}>Outline</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              molestiae cupiditate quo, ullam ipsum earum architecto
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardnum}>4</p>
            <p className={styles.cardHeading}>Outline</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              molestiae cupiditate quo, ullam ipsum earum architecto
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardnum}>5</p>
            <p className={styles.cardHeading}>Outline</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              molestiae cupiditate quo, ullam ipsum earum architecto
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              molestiae cupiditate quo, ullam ipsum earum architecto
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              molestiae cupiditate quo, ullam ipsum earum architecto
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
