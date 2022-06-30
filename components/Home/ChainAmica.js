import styles from "../../styles/Home/ChainAmica.module.css";

const ChainAmica = () => {
  return (
    <div className={styles.ChainAmicaWrapper}>
      <div className="container">
        <div className={styles.HeadingMotto} data-aos="fade-up">
          <p>
            THE VALUES AND CHARACTERISTICS THAT ALL PRASETIYA MULYA STUDENTS
            SHOULD POSSESS
          </p>
        </div>

        <div className={styles.Wording}>
          <div>
            <h2 className={styles.Chain}>CHAIN</h2>
          </div>
          <div>
            <h2 className={styles.LeAmica}>LEAMICA</h2>
          </div>
        </div>
      </div>

      <div className={styles.BoatWrapper}>
        <img
          className={styles.Boat}
          src="/images/backgrounds/boat.png/"
          alt="boat"
          data-aos="slide-up"
          data-aos-duration="2000"
          data-aos-offset="300"
        />
      </div>
    </div>
  );
};

export default ChainAmica;
