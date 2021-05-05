import useToggle from "../hooks/useToggle";
import styles from "./IconToggle.module.css";

export default function IconToggle({ componentA, componentB }) {
  const [toggle, switchToggle] = useToggle();
  return (
    <button className={styles.regular} onClick={switchToggle}>
      {toggle ? componentA : componentB}
    </button>
  );
}
