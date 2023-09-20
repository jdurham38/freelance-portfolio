
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Websites } from "./components/Websites";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import {About} from "./components/AboutMe"
import { Pricing } from './components/Pricing';
import { FAQ } from './components/Faq';
import { Booking } from './components/Booking';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About/>
      <Booking />
      <Skills />
      <Websites />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
