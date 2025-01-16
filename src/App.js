import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter basename="/Home">
     <Header/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
