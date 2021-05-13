import React from "react"
import "./App.scss"

import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

class App extends React.Component {
  render() {
    return (
    <div className="global-app">
      <Header/>
      <Home/>
      <Footer/>
    </div>
    )
  }
}

export default App
