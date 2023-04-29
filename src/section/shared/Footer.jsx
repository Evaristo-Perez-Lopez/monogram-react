import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p>WebApp created with React18</p>
      <p className={styles.author}>Evaristo Pérez López</p>
    </footer>
  );
}
export default Footer;
