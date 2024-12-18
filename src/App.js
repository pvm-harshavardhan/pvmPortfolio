import About from "./Components/About";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
