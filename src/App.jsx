import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Chart from "./components/Chart";


export default function App() {
  return (
    <div>
      <div id="main">
          <Navbar/>
          <Home />
          <Experience />
          <Chart />
          <Skills />
      </div>
    </div>

  );
}