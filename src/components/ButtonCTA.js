import styles from "./ButtonCTA.module.css";

export default function ButtonCTA({ text }) {
  return <button className={styles.regular}>{text}</button>;
}
