import React from "react";
import "./index.scss";
import { Main, Navigation, Project, Timeline, Expertise, Contact, Footer } from "./components";

function App() {
  return (
    <div className="main-container light-mode">
      <Navigation />
      <Main />
      <Expertise />
      <Timeline />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
