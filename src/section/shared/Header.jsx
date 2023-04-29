import * as PropTypes from "prop-types";

import styles from "./Header.module.css";
function Header({ children }) {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <h1 className={styles["brand__name"]}>Monogram</h1>
        </div>
        <ul className={styles.nav}>{children}</ul>
      </header>
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
