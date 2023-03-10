import React, { useState } from "react";
import Navbar from "./Navbar";
import { send } from "emailjs-com";

function App() {
  let [State, setState] = useState({
    first_name: "",
    last_name: "",
    message: "",
    reply_to: "",
  });
  const handleChange = (e) => {
    setState({ ...State, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    send("service_vhrrdv1", "template_uu79z0r", State, "suCgIrknugyhnMa9B")
      .then((result) => {
        console.log(result.text);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      <Navbar />
      <div className="about-container" id="summary">
        <span className="headings">A bit about me</span>
        <div className="about-wrapper">
          <div className="about-sec">
            <img
              src="https://dza205f4gev3o.cloudfront.net/my-assets/IMG_0205-removebg-preview (3).png"
              className="about-profile-img"
              alt=""
            />
          </div>
          <div className="about-main">
            <h2 className="content-main">
              HELLO,
              <span className="name"> I'M VIGNESH</span>
              <br />
              FULLSTACK WEB DEVELOPER (MERN)
            </h2>
            <p className="explanation">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm
              a self-taught web developer with experience in designing new
              futures from ideation to production, implementation of wireframes
              and design flows into high performance software applications. I
              take into consideration the user experience while writing reusable
              and efficient code. I passionately combine good design,
              technology, and innovation in all my projects, which I like to
              company from the first idea to release. currently, I am focus on
              the backend developer.
            </p>
          </div>
        </div>
      </div>
      <div className="project-container" id="projects">
        <span className="headings">Projects and Works</span>
        <div className="project-wrapper">
          <div className="project-card">
            <img
              src="https://besthqwallpapers.com/Uploads/12-11-2021/182358/thumb-social-media-concepts-blue-social-media-background-social-media-icons-background-with-social-media-logos-blue-technology-background.jpg"
              alt=""
              className="project-img"
            />
            <h3 className="project-title">Social Media</h3>
            <p className="project-description">
              A simple social media application with users, posts, likes and
              comments
            </p>
            <a
              href="https://meta-instagram.netlify.app"
              target="_blank"
              style={{ cursor: "unset", textDecoration: "none" }}
            >
              <button className="project-link-btn">Link</button>
            </a>
          </div>
          <div className="project-card">
            <img
              src="https://previews.123rf.com/images/arrow/arrow1508/arrow150800028/43966988-online-shopping-e-commerce-concept-background.jpg"
              alt=""
              className="project-img"
            />
            <h3 className="project-title">E-Commerce</h3>
            <p className="project-description">
              Equipment rental portal, what the process is add to cart, adders
              details, order summary, then payment parse...
            </p>
            <a
              href="https://royal-vintage.netlify.app"
              target="_blank"
              style={{ cursor: "unset", textDecoration: "none" }}
            >
              <button className="project-link-btn">Link</button>
            </a>
          </div>
        </div>
      </div>
      <div className="skills-container" id="skills">
        <span className="headings">Skills and knowledge's</span>
        <ul className="skills-items">
          <li className="skills-element">
            <img
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/35/null/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-color-tal-revivo.png"
              alt=" "
              className="element-img"
            />
            <h4 className="element-name">HTML</h4>
          </li>
          <li className="skills-element">
            <img
              src="https://img.icons8.com/fluency/45/null/css3.png"
              alt=" "
              className="element-img"
            />
            <h4 className="element-name">CSS</h4>
          </li>
          <li className="skills-element">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAACvklEQVR4nM2XPWgUURDHF0VECz8Cx86sJypGC23sbMTG1qRQRFsLA340gmARhRRXqIVCGhUtxMpEFAmSxiKXnbnzgwOxUIQ0wY+gaCEiCXfv4ZN3d7nb3fh233m7iw+m2L3HzO/Nf2benuP8r0tWvJOC8XZepuMZYQTjW8mo8jJB+M6cGcZynjCSsRyXmYlcM8M4YYYhGM9XJhiPkQlG85UJRuNq5pSlE5aMk9oEwWIr5bC0/M5kgnEh5IdwJKZmvGG79HpDAWk/t/VfMDpePixBJVwz3rBxc8N392cJIwjmgn50PONm9dzdngaMqhYHJeHFqAnGX0E/atbdYYapFtelASPIG7Lxo2q4PiGV+DMPGB3H6VVXmRkMzCXCtNtWZS8TsAUMPkoDRhDUBcF7SfhUMNwQBA8iMI8tZMKbfXdTzVmjJp3VoUMSXAjPGLxlAzOWxZwRhNciBTyWCCMZTqcBo6YH1you7OzsY7wX8uPDGYvMwJF/giH80cwq4UNdK4JRBr9XJON0WCY4mgjTIDwQ0fa+YLgrGD7EwRg6plOkkrEW/E3HSYRR5S27TDer8mGPZDhfZ29fHExzcBI8Eb57uCtT9zDalO/tToZ5MbDBBPO31a0ZWBKEpUYFDupuWrGv9YkRuAo2b0yEaQdY7MLAJaWcVckw5m6KHlCDWYG0AuB8ZHR/b34gEY6oWW+rDYzyoSAJjjX/lhB8jMg4bw0jCV+aOwl/S4Y3em4I3zskCL+0339tPcNVSfC6tc9Q2ISv7GEYppLvln4MpqxhBMGdLGG0/x5gsJQtDJbsZSL3bKYyEZ6zhlEz2zbplpYE1fZY7z8b2g9BVRJc1v6tYYJLVYsDgRb91BsAfOuMhJkCOGmvOrl7m1/7DM8EYWPF6RlrguGKvnvihmXqS+msVbwTgvC6ZO+4fs4teNbrD9Ra12QApwd9AAAAAElFTkSuQmCC"
              alt=" "
              className="element-img"
            />
            <h4 className="element-name">JavaScript</h4>
          </li>
          <li className="skills-element">
            <img
              src="https://img.icons8.com/color/40/null/redux.png"
              alt=" "
              className="element-img"
            />
            <h4 className="element-name">Redux</h4>
          </li>

          <li className="skills-element">
            <img
              src="https://img.icons8.com/color/35/null/bootstrap.png"
              alt=" "
              className="element-img"
            />
            <h4 className="element-name">Bootstrap</h4>
          </li>
          <li className="skills-element">
            <img
              src="https://img.icons8.com/color/35/null/material-ui.png"
              alt=" "
              className="element-img"
            />
            <h4 className="element-name">MUI</h4>
          </li>
          <li className="skills-element">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC7ElEQVR4nO2ZPWhUQRDHn+IHfqCiCNpoY6FYiIUWKgiCYCFYyCm5mTOk8LogQTTmZs6nhZ+FCir4RaIgiIKgkMrKRkRQJJBCrVRUFBW/k5s5zcpevOQld5fcC7nnu7A/eMUtt2/2vzs7O7PP8xwOh2PC0uibeUi6H0nvIksnshyGjFns1RPIsgpJ3yKrGfrIV6T8Jq8eSPtmJpC+KhUxKKbRN4u8uIMkTcVBA4sCyXFgzSLJj4Ag34s7SHJ+UIheKbYD6cHAqnR6cQdYTgwMmPRmsR1JTg4IJL3txZ1kJrctMPN9VgyQdiBJPuBaLV7c8X0zGVkeVdrsNhAkWs1crx5oajMLkeVhiRASQZYL9mwB1i4booH1DbI+QdZLmMltT6fN1GrtJEl2IukzIO22QaZGcsykwuAqhuGK4fmdDQwjhWi7osh6taRvNr+5JlKA5FB4IQOhO2cHC1ldYyelIMA305AEkPVlebeVs9EJIX1h24FlR4p0QzKr64EFgfQakPyqIOoTsD7vd81y7qrF/dcRgRDpA9Z9xdktR8I385G1FVlfV7FiiizHkOVIpEKA9Va1/Tb6ZkqKJAEk95Hl9zAB34G1vaEtt7zERiRCxmjkXxa9Dim/ZRfLyuZmM328bYxKFEbACQmBW5EQgHOtEDjXCgE41xqH2Uq0mBn2cGvI6FqbFCapZ6mtY8Zo42gge2gfyzvC5lr9d1usXUDyp0zm+gVY79iaxGa51bwfs5oGkt6AkGwEQkI8JB+R5IxdtXLvTbGsBpJ7w/p8S/k9S/6PEJLPhUGP+B99jCynkZSR9DKyPi1TjL23+VhNRJQTAiQfkLUtxbkVQffBvWaWre4KhRTLz5AVZWfNL/yGbfbu1AGzYNQ+vpmTJNldtuYfUtvIgyTnt9ZUwHhlv7bmANJmYDkHpDfs5Z/9jX7vMi9KIjmsosAJiRvgXCtmwIRZEdY9gcPwlFevJHwzG0gvAuv1uvjc5nA4HF4c+QvSf546Zy0LZQAAAABJRU5ErkJggg=="
              alt=" "
              className="element-img"
            />
            <h4 className="element-name">Font Awesome</h4>
          </li>
          <li className="skills-element">
            <img
              src="https://img.icons8.com/color/35/null/react-native.png"
              alt=" "
              className="element-img"
            />
            <h4 className="element-name">React Js</h4>
          </li>
          <li className="skills-element">
            <img
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/35/null/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png"
              alt=" "
              className="element-img"
            />
            <h4 className="element-name">Postman API</h4>
          </li>
          <li className="skills-element">
            <img
              src="https://img.icons8.com/color/40/null/nodejs.png"
              alt=" "
              className="element-img"
            />
            <h4 className="element-name">Node Js</h4>
          </li>
          <li className="skills-element">
            <img
              src="https://img.icons8.com/officel/35/null/express-js.png"
              alt=" "
              className="element-img"
            />
            <h4 className="element-name">Express Js</h4>
          </li>
          <li className="skills-element">
            <img
              src="https://img.icons8.com/color/35/null/mongodb.png"
              alt=" "
              className="element-img"
            />
            <h4 className="element-name">Mongo DB</h4>
          </li>
          <li className="skills-element">
            <img
              src="https://img.icons8.com/color/40/null/amazon-web-services.png"
              alt=" "
              className="element-img"
            />
            <h4 className="element-name">AWS Cloud</h4>
          </li>
          <li className="skills-element">
            <img
              src="https://img.icons8.com/color/40/null/git.png"
              alt=" "
              className="element-img"
            />
            <h4 className="element-name">Git</h4>
          </li>
          <li className="skills-element">
            <img
              src="https://img.icons8.com/color/35/null/heroku.png"
              alt=" "
              className="element-img"
            />
            <h4 className="element-name">Heroku</h4>
          </li>

          <li className="skills-element">
            <img
              src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/35/null/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
              alt=" "
              className="element-img"
            />
            <h4 className="element-name">Netlify</h4>
          </li>
        </ul>
      </div>
      <div className="contacts-container" id="contacts">
        <div className="contacts-wrapper">
          <form className="contact-inputs" onSubmit={handleSubmit}>
            <h4 className="form-title">Connect with me </h4>
            <input
              type="text"
              name="first_name"
              className="contact-name"
              placeholder="First Name"
              onChange={handleChange}
              value={State.first_name}
            />
            <input
              type="text"
              name="last_name"
              className="contact-name"
              placeholder="Last Name"
              onChange={handleChange}
              value={State.last_name}
            />
            <input
              type="email"
              name="reply_to"
              className="contact-name"
              placeholder="Email Address"
              onChange={handleChange}
              value={State.reply_to}
            />
            <textarea
              type="text"
              name="message"
              className="contact-message"
              placeholder="Message"
              onChange={handleChange}
              value={State.message}
            />
            <button className="contact-submit-btn" type="submit">
              Submit
            </button>
          </form>

          <div className="contact-open">
            <ul className="contact-details">
              <li className="list">
                <label>Contact Number</label>
                <p className="contact-data">+91 8304873122</p>
              </li>
              <li>
                <label>Email Address</label>
                <p className="contact-data">vigneshvicky3122@gmail.com</p>
              </li>
              <li>
                <label>Social</label>
                <div className="contact-links">
                  <a
                    href="https://github.com/vigneshvicky3122"
                    target="_blank"
                    className="link-icon"
                  >
                    <img
                      src="https://img.icons8.com/sf-black-filled/45/null/github.png"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vignesh-a-a2b05a217"
                    target="_blank"
                    className="link-icon"
                  >
                    <img
                      src="https://img.icons8.com/color/45/null/linkedin.png"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfmrTCCGhpJDMDZJpxhdgLnPHmHMwmHnlFCDmDRWQQdZbVFVPgHgsPwBBVQttKJGBQpKLq"
                    target="_blank"
                    className="link-icon"
                  >
                    <img
                      src="https://img.icons8.com/3d-fluency/45/null/gmail.png"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://wa.me/8304873122?text=I'm%20interested%20in%20your%20job%20profile"
                    target="_blank"
                    className="link-icon"
                  >
                    <img
                      src="https://img.icons8.com/3d-fluency/45/null/whatsapp.png"
                      alt=""
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
