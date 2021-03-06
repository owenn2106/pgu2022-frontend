import { motion } from "framer-motion";
import styles from "../../styles/Home/ChainAmicaDetail.module.css";

const ChainAmicaDetail = () => {
  return (
    <div className={styles.DetailWrapper}>
      <div className={styles.left}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.item}
        >
          <p className={styles.title}>Caring</p>
          <p className={styles.content}>Form of looking out for each other</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.item}
        >
          <p className={styles.title}>Humility</p>
          <p className={styles.content}>
            Gesture of being modest and not full of oneself
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.item}
        >
          <p className={styles.title}>Achieving</p>
          <p className={styles.content}>
            Desire to obtain a specific objective
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.item}
        >
          <p className={styles.title}>Integrity</p>
          <p className={styles.content}>
            State of having strong moral principles and undivided
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.item}
        >
          <p className={styles.title}>Non-Discrimination</p>
          <p className={styles.content}>
            The act of treating all equally, not looking down on a specific
            matter
          </p>
        </motion.div>
      </div>
      <div className={styles.right}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.item}
        >
          <p className={styles.title}>Leadership</p>
          <p className={styles.content}>
            Ability to influence and guide others
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.item}
        >
          <p className={styles.title}>Entrepreneurship</p>
          <p className={styles.content}>
            To be willing to take risk to achieve a goal
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.item}
        >
          <p className={styles.title}>Analytical Thinking</p>
          <p className={styles.content}>
            Ability to identify problems, evaluate informations, and bring
            solutions
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.item}
        >
          <p className={styles.title}>Maturity</p>
          <p className={styles.content}>
            How you respond and react to various life situations
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.item}
        >
          <p className={styles.title}>Interpersonal Relationship</p>
          <p className={styles.content}>
            Strong bond and affiliation between individuals
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.item}
        >
          <p className={styles.title}>Communication</p>
          <p className={styles.content}>
            Act of giving, receiving, and sharing information
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.item}
        >
          <p className={styles.title}>Achievement</p>
          <p className={styles.content}>
            Results obtained after hard work and sacrifice
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ChainAmicaDetail;
