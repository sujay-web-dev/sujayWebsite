import React from "react";
import { About, Footer, Header, Skills, Testimonials, Work } from "./container";
import {Navbar} from "./components";
import "./app.scss";
import Recognition from "./container/Recognition/Recognition";

const App = () => {
  return (
  <div className="app">
    <Navbar/>
    <Header/>
    <About/>
    <Work/>
    <Skills/>
    <Testimonials/>
    <Recognition/>
    <Footer/>
  </div>
  );
};

export default App;
