import styles from "./Header.module.scss";

export function Header() {
  return (
    <div className={styles.container}>
      <img src="src/assets/Logo.svg" />
    </div>
  );
}
