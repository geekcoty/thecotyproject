import React from "react"
import "./App.scss"

import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="global-app">
        <div className="header">
          <Header />
        </div>
        <div className="section">
          <Home />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App
