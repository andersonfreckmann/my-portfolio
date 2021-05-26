import React, {useState, useEffect} from "react";
import "./App.css";
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Slider from "./components/Slider/Slider";
import Info from "./components/Info/Info";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);
  
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };
  
  useEffect (() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])

  return (
    <div className="App">
     <Navbar isScrolling={scrollHeight} />
     <Cover /> 
     <About />
     <Slider />
     <Info />
    </div>
  );
}

export default App;
