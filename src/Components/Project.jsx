import React from "react";

function Project() {
  return (
    <React.Fragment>
      <div className="md:container md:mx-auto bg-slate-100 h-fit" id="projects">
        <div className="grid grid-cols-2 gap-5 max-md:py-28 py-40 max-sm:grid-cols-1 max-sm:px-2 max-lg:grid-cols-2 lg:mx-10 lg:gap-10 xl:grid-cols-3">
          <div className="border-2 border-slate-200 rounded-md px-2 py-1er-2 p-2 hover:shadow-lg hover:shadow-slate-400">
            <img
              src="https://besthqwallpapers.com/Uploads/12-11-2021/182358/thumb-social-media-concepts-blue-social-media-background-social-media-icons-background-with-social-media-logos-blue-technology-background.jpg"
              alt="project-thumbnail"
              className="w-full h-48"
            />
            <div className="flex flex-col gap-3 px-4 py-8 justify-between h-96">
              <h3 className="text-lg font-semibold text-indigo-700 text-center">
                Social Media
              </h3>
              <p className="text-justify max-w-xl">
                Developed a full-stack Instagram clone using the MERN stack.
                Implemented user authentication, image uploading, and a feed
                displaying user posts. Utilized React.js for the front end,
                Node.js and Express.js for the backend, and MongoDB for database
                management.
              </p>
              <div className="flex justify-center gap-2">
                <a
                  href="https://github.com/vigneshvicky3122/instagram-frontend"
                  target="_blank"
                  className="text-sm text-semibold bg-neutral-800 text-white rounded-md px-2 py-1 hover:cursor-pointer"
                >
                  <i className="fa-brands fa-github"></i> Frontend
                </a>
                <a
                  href="https://github.com/vigneshvicky3122/Instagram/tree/backend"
                  target="_blank"
                  className="text-sm text-semibold bg-neutral-800 text-white rounded-md px-2 py-1 hover:cursor-pointer"
                >
                  <i className="fa-brands fa-github"></i> Backend
                </a>
                <a
                  href="https://meta-instagram.netlify.app"
                  target="_blank"
                  className="text-sm text-semibold bg-indigo-700 text-white rounded-md px-2 py-1 hover:cursor-pointer"
                >
                  <i className="fa-solid fa-fire"></i> Live
                </a>
              </div>
            </div>
          </div>
          <div className="border-2 border-slate-200 rounded-md px-2 py-1er-2 p-2 hover:shadow-lg hover:shadow-slate-400">
            <img
              src="https://previews.123rf.com/images/arrow/arrow1508/arrow150800028/43966988-online-shopping-e-commerce-concept-background.jpg"
              alt="project-thumbnail"
              className="w-full h-48"
            />
            <div className="flex flex-col gap-3 px-4 py-8 justify-between h-96">
              <h3 className="text-lg font-semibold text-indigo-700 text-center">
                E-Commerce
              </h3>
              <p className="text-justify max-w-xl">
                Designed and developed a rental-based e-commerce platform.
                Implemented user authentication, product listings, rental
                scheduling, and payment processing. Utilized React.js for the
                frontend, Node.js and Express.js for the backend, and MongoDB
                for efficient data management.
              </p>

              <div className="flex justify-center gap-2">
                <a
                  href="https://github.com/vigneshvicky3122/Royal-vintage"
                  target="_blank"
                  className="text-sm text-semibold bg-neutral-800 text-white rounded-md px-2 py-1 hover:cursor-pointer"
                >
                  <i className="fa-brands fa-github"></i> Frontend
                </a>
                <a
                  href="https://github.com/vigneshvicky3122/backend-royal-vintages"
                  target="_blank"
                  className="text-sm text-semibold bg-neutral-800 text-white rounded-md px-2 py-1 hover:cursor-pointer"
                >
                  <i className="fa-brands fa-github"></i> Backend
                </a>
                <a
                  href="https://royal-vintage.netlify.app"
                  target="_blank"
                  className="text-sm text-semibold bg-indigo-700 text-white rounded-md px-2 py-1 hover:cursor-pointer"
                >
                  <i className="fa-solid fa-fire"></i> Live
                </a>
              </div>
            </div>
          </div>
          <div className="border-2 border-slate-200 rounded-md px-2 py-1er-2 p-2 hover:shadow-lg hover:shadow-slate-400">
            <img
              src="https://streetfightmag.com/wp-content/uploads/chat.jpg"
              alt="project-thumbnail"
              className="w-full h-48"
            />
            <div className="flex flex-col gap-3 px-4 py-8 justify-between h-96">
              <h3 className="text-lg font-semibold text-indigo-700 text-center">
                Chat Application
              </h3>
              <p className="text-justify max-w-xl">
                Utilized Socket.IO for real-time communication, React.js for the
                frontend, Node.js and Express.js for the backend, and MongoDB
                for data storage. Showcased proficiency in real-time
                applications, user authentication, and handling asynchronous
                events.
              </p>

              <div className="flex justify-center gap-2">
                <a
                  href="https://github.com/vigneshvicky3122/whatsapp-client"
                  target="_blank"
                  className="text-sm text-semibold bg-neutral-800 text-white rounded-md px-2 py-1 hover:cursor-pointer"
                >
                  <i className="fa-brands fa-github"></i> Frontend
                </a>
                <a
                  href="https://github.com/vigneshvicky3122/whatsapp-backend"
                  target="_blank"
                  className="text-sm text-semibold bg-neutral-800 text-white rounded-md px-2 py-1 hover:cursor-pointer"
                >
                  <i className="fa-brands fa-github"></i> Backend
                </a>
                <a
                  href="https://whatsapp-chatbot.netlify.app"
                  target="_blank"
                  className="text-sm text-semibold bg-indigo-700 text-white rounded-md px-2 py-1 hover:cursor-pointer"
                >
                  <i className="fa-solid fa-fire"></i> Live
                </a>
              </div>
            </div>
          </div>
          <div className="border-2 border-slate-200 rounded-md px-2 py-1er-2 p-2 hover:shadow-lg hover:shadow-slate-400">
            <img
              src="https://monday.com/blog/wp-content/uploads/2020/12/Work2_Light-Purple.jpg"
              alt="project-thumbnail"
              className="w-full h-48"
            />
            <div className="flex flex-col gap-3 px-4 py-8 justify-between h-96">
              <h3 className="text-lg font-semibold text-indigo-700 text-center">
                Task Management App
              </h3>
              <p className="text-justify max-w-xl">
                Created a task management application utilizing the MERN stack,
                allowing users to create, edit, and track tasks. Implemented
                user authentication, task categorization, and status updates.
                Showcased expertise in CRUD operations, user interfaces, and
                backend API development for seamless task management
                functionalities.
              </p>
              <div className="flex justify-center gap-2">
                <a
                  href="https://github.com/vigneshvicky3122/Task-Management/tree/front-end"
                  target="_blank"
                  className="text-sm text-semibold bg-neutral-800 text-white rounded-md px-2 py-1 hover:cursor-pointer"
                >
                  <i className="fa-brands fa-github"></i> Frontend
                </a>
                <a
                  href="https://github.com/vigneshvicky3122/Task-Management/tree/back-end"
                  target="_blank"
                  className="text-sm text-semibold bg-neutral-800 text-white rounded-md px-2 py-1 hover:cursor-pointer"
                >
                  <i className="fa-brands fa-github"></i> Backend
                </a>
                <a
                  href="https://my-tasks-management.netlify.app/"
                  target="_blank"
                  className="text-sm text-semibold bg-indigo-700 text-white rounded-md px-2 py-1 hover:cursor-pointer"
                >
                  <i className="fa-solid fa-fire"></i> Live
                </a>
              </div>
            </div>
          </div>
          <div className="border-2 border-slate-200 rounded-md px-2 py-1er-2 p-2 hover:shadow-lg hover:shadow-slate-400">
            <img
              src="https://awags33.files.wordpress.com/2020/02/film-tape-2.jpg"
              alt="project-thumbnail"
              className="w-full h-48"
            />
            <div className="flex flex-col gap-3 px-4 py-8 justify-between h-96">
              <h3 className="text-lg font-semibold text-indigo-700 text-center">
                IMDB Application
              </h3>
              <p className="text-justify max-w-xl">
                Developed an IMDb-inspired movie database application using the
                MERN stack, enabling users to search, view, and rate movies.
                Implemented RESTful API endpoints, user authentication, and a
                responsive UI. Utilized React.js for the frontend, Node.js and
                Express.js for the backend, and MongoDB for efficient data
                storage.
              </p>
              <div className="flex justify-center gap-2">
                <a
                  href="https://github.com/vigneshvicky3122/IMDB-APP/tree/frontend"
                  target="_blank"
                  className="text-sm text-semibold bg-neutral-800 text-white rounded-md px-2 py-1 hover:cursor-pointer"
                >
                  <i className="fa-brands fa-github"></i> Frontend
                </a>
                <a
                  href="https://github.com/vigneshvicky3122/IMDB-APP/tree/backend"
                  target="_blank"
                  className="text-sm text-semibold bg-neutral-800 text-white rounded-md px-2 py-1 hover:cursor-pointer"
                >
                  <i className="fa-brands fa-github"></i> Backend
                </a>
                <a
                  href="https://imdb-movie-applica.netlify.app/"
                  target="_blank"
                  className="text-sm text-semibold bg-indigo-700 text-white rounded-md px-2 py-1 hover:cursor-pointer"
                >
                  <i className="fa-solid fa-fire"></i> Live
                </a>
              </div>
            </div>
          </div>
          <div className="border-2 border-slate-200 rounded-md px-2 py-1er-2 p-2 hover:shadow-lg hover:shadow-slate-400">
            <img
              src="https://twistarticle.com/wp-content/uploads/2020/10/Start-Your-Blogging-Career-With-Complete-Knowledge.jpg"
              alt="project-thumbnail"
              className="w-full h-48"
            />
            <div className="flex flex-col gap-3 px-4 py-8 justify-between h-96">
              <h3 className="text-lg font-semibold text-indigo-700 text-center">
                Blogging App
              </h3>
              <p className="text-justify max-w-xl">
                Designed and built a dynamic blog website using the MERN stack,
                allowing users to create, edit, and publish articles.
                Implemented user authentication, post categorization, and
                comments section. Utilized React.js for the frontend, Node.js
                and Express.js for the backend, and MongoDB for seamless data
                management.
              </p>
              <div className="flex justify-center gap-2">
                <a
                  href="https://github.com/vigneshvicky3122/blogger.com/tree/frontend"
                  target="_blank"
                  className="text-sm text-semibold bg-neutral-800 text-white rounded-md px-2 py-1 hover:cursor-pointer"
                >
                  <i className="fa-brands fa-github"></i> Frontend
                </a>
                <a
                  href="https://github.com/vigneshvicky3122/blogger.com/tree/backend"
                  target="_blank"
                  className="text-sm text-semibold bg-neutral-800 text-white rounded-md px-2 py-1 hover:cursor-pointer"
                >
                  <i className="fa-brands fa-github"></i> Backend
                </a>
                <a
                  href="https://blogger-com.netlify.app/"
                  target="_blank"
                  className="text-sm text-semibold bg-indigo-700 text-white rounded-md px-2 py-1 hover:cursor-pointer"
                >
                  <i className="fa-solid fa-fire"></i> Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Project;
