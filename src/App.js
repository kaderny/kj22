import React from "react";

import "./App.scss";
import Navbar from "./componenets/navbar/navbar";
import Landing from "./componenets/landing/landing";
import Contact from "./componenets/contact/contact";
// import Footer from "./componenets/footer/footer";
import Projects from "./componenets/projects/projects";
import Coming from "./componenets/coming soon/coming";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections" id="sections">
        <Coming />
        {/* <Landing />
        <Projects />
        <Contact /> */}
      </div>
    </div>
  );
}
export default App;
