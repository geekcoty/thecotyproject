import Contact from "./components/Contact";

import "./appStyle.scss";

import pic from "./assets/coty.jpeg";

function App() {
  return (
    <div className="container">
      <div className="picContainer">
        <img className="picHolder" src={pic} alt="profile picture" />
      </div>
      <div className="contentContainer">
        <div className="textContainer">
          <p className="textTitle">&hello</p>
          <p className="textParagraph">
            My name is Coty. At the moment I'm finishing my degree in
            Translation while polishing my fullstack coding skills. </p>
           <p className="textParagraph"> If you wish to connect, you can do it at <a
              href="https://www.linkedin.com/in/ccareal/"
              className="linkStyle"
              target="_blank"
            >twitter </a>
            or <a
              href="https://twitter.com/rememberplut"
              className="linkStyle"
              target="_blank"
            >
              linkedin
            </a>.</p>
            <p className="textParagraph">You can also use this <a href="https://www.jotform.com/230754252457053" className="linkStyle" target="_blank">form</a> to message me.
          </p>
        </div>
       {/* <div className="formContainer">
          <Contact />
  </div>*/}
      </div>
    </div>
  );
}

export default App;
