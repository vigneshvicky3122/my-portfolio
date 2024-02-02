import React from "react";
import Photo from "../assets/profile.jpg";
import { HashLink as Link } from "react-router-hash-link";

function About() {
  return (
    <React.Fragment>
      <div className="md:container md:mx-auto h-screen max-lg:h-fit" id="about">
        <div className="py-40 flex justify-around items-center max-sm:flex-col-reverse gap-10 max-md:py-24">
          <div className="w-2/4 flex flex-col items-start max-sm:w-auto max-sm:mx-5 max-md:mx-10 max-sm:items-center">
            <h2 className="text-lg font-bold max-sm:text-center">
              HELLO,
              <span className="text-indigo-700"> I'M VIGNESH</span>
              <br />
              FULL STACK WEB DEVELOPER (MERN)
            </h2>
            <p className=" my-5 text-justify max-w-screen-xl">
              Highly skilled and dedicated MERN (MongoDB, Express, React,
              Node.js) stack developer with a proven track record of
              successfully delivering robust and scalable web applications.
              Demonstrated expertise in front-end and back-end development,
              coupled with a strong understanding of database design and
              optimization. Committed to delivering exceptional user experiences
              through clean code, efficient architecture, and innovative
              problem-solving. Passionate about staying updated with emerging
              technologies and best practices to drive innovation and exceed
              client expectations.
            </p>
            <Link
              smooth
              to="#contact"
              className="border-2 text-indigo-700 border-indigo-700 px-3 py-2.5 font-semibold rounded hover:bg-indigo-700 hover:text-slate-50 focus:ring-indigo-300 focus:ring-4 max-sm:w-full max-sm:text-center"
            >
              Let's Connect &nbsp; <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div>
            <img
              src={Photo}
              alt="profile"
              className="rounded-3xl bg-center object-cover h-68 w-56 max-sm:h-40 max-sm:w-36"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
