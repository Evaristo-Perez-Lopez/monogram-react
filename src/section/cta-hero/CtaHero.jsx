import styles from "./CtaHero.module.css";

function CtaHero() {
  return (
    <section className={styles.CtaHero}>
      <div className={styles.CtaText}>
        <h2 className={styles["ctaTitle"]}>A CONSOLE FOR EVERY WORKFLOW</h2>
        <p className={styles["ctaSubtitle"]}>
          Discover the perfect console for yours.
        </p>
      </div>
    </section>
  );
}

export default CtaHero;
