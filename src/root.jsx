import "./root.css";
import Header from "./components/header/Header";
import { Helmet } from "react-helmet";
import Home from "./routes/home/Home.jsx";
import About from "./routes/about/About.jsx";

function Root() {
  return (
    <>
      <Helmet>
        <title>Edward Ibarra - MechE + CS</title>
      </Helmet>
      <Header />
      <Home />
      <About />
    </>
  );
}

export default Root;
