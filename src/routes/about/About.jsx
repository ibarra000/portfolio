import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <h1>About</h1>
      <p>
        {
          "I'm currently majoring in Mechanical Engineering with a minor in Computer Science. I recently finished my co-op as a Components Engineer at "
        }
        <a
          href="http://www.boydcorp.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.blue}
        >
          Boyd
        </a>
        {
          ". During my time there, I wrote Python scripts to streamline data analysis, managed and optimized the database using SQLite, and oversaw the vacuum-brazing manufacturing process for aluminum parts to ensure quality. I also found ways to improve processes and boost productivity, and spent a lot of time in SolidWorks designing and assembling CAD models to make testing and setup easier."
        }
      </p>
      <p>
        {
          "Outside of academics and work, I enjoy working on personal projects that combine my interests in engineering and programming. I've been experimenting with fluid mechanics and attempting to model the effects on vehicles in 2D. In my free time, I also like to watch Formula 1 and read. My current favorite book trilogy is called "
        }
        <a
          href="https://www.goodreads.com/series/117100-red-rising-saga"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.red}
        >
          Red Rising
        </a>
        {" it's such a good read, I highly recommend it!"}
      </p>
    </section>
  );
}
