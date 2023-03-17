import "./contactStyle.scss"

function Contact() {
  return (
    <div className="formContainer">
      <p className="formLabel"> name: </p>
      <input className="formInput" type="text" />
      <p className="formLabel"> e-mail: </p>
      <input className="formInput" type="text" />
      <p className="formLabel"> subject: </p>
      <input className="formInput" type="text" />
      <p className="formLabel"> message: </p>
      <textarea className="formInput" type="text" />
      <button className="formButton"> send </button>
    </div>
  );
}

export default Contact;
