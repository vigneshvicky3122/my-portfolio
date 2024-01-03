import React, { useState } from "react";
import { send } from "emailjs-com";
import Alert from "./Alert";

function Contact() {
  const [State, setState] = useState({
    first_name: "",
    last_name: "",
    message: "",
    reply_to: "",
  });
  const [Visible, setVisible] = useState(false);
  const [Message, setMessage] = useState({
    status: "",
    text: "",
  });
  const handleChange = (e) => {
    setState({ ...State, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      State,
      import.meta.env.VITE_EMAILJS_AUTH_KEY
    )
      .then(() => {
        setMessage({
          status: "Success",
          text: "Thank you so much for your time considerations, I will reply soon...",
        });
        setVisible(true);
        document.getElementById("Form").reset();
      })
      .catch(() => {
        setMessage({
          status: "Failed",
          text: "Request failed, Retry again after few minutes...",
        });
        setVisible(true);
      });
    setTimeout(() => {
      setVisible(false);
    }, 10000);
  };
  return (
    <React.Fragment>
      <div
        className="container mx-auto py-40 max-md:py-28 bg-slate-100 h-screen max-lg:h-fit"
        id="contact"
      >
        <div className="flex flex-row justify-evenly items-center max-sm:flex-col max-sm:gap-20">
          <div className="w-1/3 max-sm:w-2/3">
            <h1 className="text-lg font-bold text-center mb-7">
              Get in Touch!
            </h1>
            <form onSubmit={handleSubmit} id="Form">
              <div className="mb-3">
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First Name
                </label>
                <input
                  type="text"
                  required
                  onChange={handleChange}
                  name="first_name"
                  id="first_name"
                  className="block w-full rounded-md border-0 py-1.5 px-3 outline-none text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  onChange={handleChange}
                  name="last_name"
                  id="last_name"
                  className="block w-full rounded-md border-0 py-1.5 px-3 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="reply_to"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  onChange={handleChange}
                  name="reply_to"
                  id="reply_to"
                  className="block w-full rounded-md border-0 py-1.5 px-3 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  required
                  rows={3}
                  onChange={handleChange}
                  name="message"
                  id="message"
                  className="block w-full rounded-md border-0 py-1.5 px-3 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-7">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700 w-full"
                >
                  Send Me &nbsp; <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="">
            <ul className="flex flex-col gap-8 text-center">
              <li className="flex flex-col gap-5">
                <h6 className="font-normal text-sm underline">
                  Contact Number
                </h6>
                <p className=" text-indigo-700 text-lg font-medium">
                  +91 8304873122
                </p>
              </li>
              <li className="flex flex-col gap-5">
                <h6 className="font-normal text-sm underline">Email Address</h6>
                <p className=" text-indigo-700 text-lg font-medium">
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRvwTdlZFxDtkvFmkgZsSqXMdXxVvSGKXksQJmfdqPVTkzkMwJNvcNJTBFHgBKjWXPNJsDQ"
                    target="_blank"
                    className="link-icon email-link"
                  >
                    vigneshvicky3122@gmail.com
                  </a>
                </p>
              </li>
              <li className="flex flex-col gap-5">
                <h6 className="font-normal text-sm underline">Links</h6>
                <div className="flex flex-row items-center gap-8">
                  <a
                    href="https://drive.google.com/file/d/111_7WdEujfX0uu4rn-Jsubj7nNHxThZ8/view?usp=sharing"
                    target="_blank"
                    className="link-icon"
                  >
                    <i className="fa-solid fa-newspaper text-indigo-700 border-2 border-indigo-700 hover:text-white hover:bg-indigo-700 rounded-full py-2 px-3 text-base"></i>
                  </a>
                  <a
                    href="https://github.com/vigneshvicky3122"
                    target="_blank"
                    className="link-icon"
                  >
                    <i className="fa-brands fa-github text-indigo-700 border-2 border-indigo-700 hover:text-white hover:bg-indigo-700 rounded-full py-2 px-3 text-base"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vignesh-a-/"
                    target="_blank"
                    className="link-icon"
                  >
                    <i className="fa-brands fa-linkedin-in text-indigo-700 border-2 border-indigo-700 hover:text-white hover:bg-indigo-700 rounded-full py-2 px-3 text-base"></i>
                  </a>
                  <a
                    href="https://wa.me/8304873122?text=I'm%20interested%20in%20your%20job%20profile"
                    target="_blank"
                    className="link-icon"
                  >
                    <i className="fa-brands fa-whatsapp text-indigo-700 border-2 border-indigo-700 hover:text-white hover:bg-indigo-700 rounded-full py-2 px-3 text-base"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Alert Visible={Visible} setVisible={setVisible} Message={Message} />
    </React.Fragment>
  );
}

export default Contact;
