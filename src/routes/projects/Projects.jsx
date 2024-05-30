import Card from "../../components/card/Card";
import styles from "./Projects.module.css";
import NER from "../../assets/ner-logo.png";
import TRUSS from "../../assets/truss.png";
import TR from "../../assets/terminal-racing-logo.webp";

export default function Projects() {
  return (
    <section className={styles.exp} id="projects">
      <h1>Projects</h1>
      <div className={styles.cardContainer}>
        <Card
          title={"Truss FEA Solver"}
          imageUrl={TRUSS}
          role={"Rust"}
          description={
            "A finite element analysis tool for solving 2D truss systems."
          }
          altText={"Truss Bridge"}
          Url={"https://github.com/ibarra000/truss-fea"}
          backgroundColor={"#000000"}
        />
        <Card
          title={"Terminal Racing"}
          imageUrl={TR}
          role={"Python"}
          description={"2D vehicle fluid simulation, command-line based."}
          altText={"Pixelated Race Car"}
          Url={"https://github.com/ibarra000/TerminalRacing"}
          backgroundColor={"#1266ab"}
        />
      </div>
    </section>
  );
}
