import "./App.css";
import About from "./components/About";
import Hero from "./components/HEro";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import WorkingStep from "./components/WorkingStep";

function App() {
  return (
    <div className="font-primary overflow-x-hidden">
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <About></About>
      <WorkingStep></WorkingStep>
      <Pricing></Pricing>
      <Testimonial></Testimonial>
    </div>
  );
}

export default App;
