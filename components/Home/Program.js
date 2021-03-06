import { useState } from "react";

import ProgramModal from "./Modal";

import styles from "../../styles/Home/Program.module.css";

const Program = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <div className={styles.programSection} id="program">
      <div className="container">
        <div className={styles.programTitle}>
          <h2>PROGRAM OVERVIEW</h2>
        </div>
        <div className={styles.programContent}>
          <hr />
          <div>
            <a
              className={styles.programContentItem}
              onClick={() => {
                setOpen1(true);
              }}
            >
              <span className={styles.program}>Scavenger Hunt</span>
              <div className={styles.arrowWrapper}>
                <span className={styles.arrow}>&#8594;</span>
              </div>
            </a>
            <ProgramModal open={open1} onClose={() => setOpen1(false)}>
              <img
                src="/images/programs/scavenger-hunt.png"
                alt="scavenger-logo"
              />
              <h2>Scavenger Hunt</h2>
              <p>
                Scavenger Hunt is a scenario-based project that requires
                significant collaboration between Voyagers. Decision-making
                abilities and in-depth examination of certain circumstances are
                required to achieve intended results, especially when it is
                conducted in an under-tension situation.
              </p>
            </ProgramModal>
          </div>
          <hr />
          <div>
            <a
              className={styles.programContentItem}
              onClick={() => {
                setOpen2(true);
              }}
            >
              <span className={styles.program}>A.P.A. Race</span>
              <div className={styles.arrowWrapper}>
                <span className={styles.arrow}>&#8594;</span>
              </div>
            </a>
            <ProgramModal open={open2} onClose={() => setOpen2(false)}>
              <img src="/images/programs/apa-race.png" alt="apa-logo" />
              <h2>A.P.A. Race</h2>
              <p>
                (Aptitude Performance Assessment) Race requires good
                communication, teamwork, decision making, and problem-solving.
                This race will test Voyagers&apos; cognitive skills all under
                the pressure of a limited time, while competing with the other
                groups.
              </p>
            </ProgramModal>
          </div>
          <hr />
          <div>
            <a
              className={styles.programContentItem}
              onClick={() => {
                setOpen3(true);
              }}
            >
              <span className={styles.program}>Hackathon</span>
              <div className={styles.arrowWrapper}>
                <span className={styles.arrow}>&#8594;</span>
              </div>
            </a>
            <ProgramModal open={open3} onClose={() => setOpen3(false)}>
              <img src="/images/programs/hackathon.png" alt="hackathon-logo" />
              <h2>Hackathon</h2>
              <p>
                Each group has to come up with a business idea within the given
                period. In the Road To Hackathon, every group will present their
                business idea, utilizing their innovation and creativity skills.
                Those who pass the preliminary stages will go on to the final
                stages, where a winner will be chosen by the judges.
              </p>
            </ProgramModal>
          </div>
          <hr />
          <div>
            <a
              className={styles.programContentItem}
              onClick={() => {
                setOpen4(true);
              }}
            >
              <span className={styles.program}>Equipping Session</span>
              <div className={styles.arrowWrapper}>
                <span className={styles.arrow}>&#8594;</span>
              </div>
            </a>
            <ProgramModal open={open4} onClose={() => setOpen4(false)}>
              <img
                src="/images/programs/equipping-session.png"
                alt="equipping-logo"
              />
              <h2>Equipping Session</h2>
              <p>
                In this session, there will be some prominent speakers who will
                share their experiences related to CHAIN and LEAMICA values that
                Voyagers could apply in their university life. These seminars,
                talk shows, and alumni sharing sessions will be conducted full
                of invaluable insights from their respective fields of
                expertise.
              </p>
            </ProgramModal>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Program;
