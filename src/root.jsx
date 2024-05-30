import "./root.css";
import Header from "./components/header/Header";
import Home from "./routes/home/Home.jsx";
import About from "./routes/about/About.jsx";
import Experience from "./routes/experience/Experience.jsx";
import Projects from "./routes/projects/Projects.jsx";

function Root() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Experience />
      <Projects />
    </>
  );
}

export default Root;
