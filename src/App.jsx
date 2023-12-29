import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Services />
      <About/>
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
