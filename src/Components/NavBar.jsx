import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
function NavBar() {
  const hashLink = useLocation().hash;
  return (
    <React.Fragment>
      <nav className="fixed top-0 w-full bg-slate-50">
        <div className="h-20 flex flex-row justify-around items-center">
          <NavLink reloadDocument>
            <h1 className="max-sm:text-sm text-xl text-indigo-700 font-bold">
              PORTFOLIO
            </h1>
          </NavLink>
          <ul className="flex gap-8 max-sm:gap-3">
            <li>
              <Link
                smooth
                to="#about"
                className={`
                  ${
                    hashLink === "#about"
                      ? "text-indigo-700 hover:text-indigo-400"
                      : "text-black hover:text-indigo-700"
                  } font-semibold max-sm:text-xs`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="#projects"
                className={`
                  ${
                    hashLink === "#projects"
                      ? "text-indigo-700 hover:text-indigo-400"
                      : "text-black hover:text-indigo-700"
                  } font-semibold max-sm:text-xs`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="#skills"
                smooth
                className={`
                  ${
                    hashLink === "#skills"
                      ? "text-indigo-700 hover:text-indigo-400"
                      : "text-black hover:text-indigo-700"
                  } font-semibold max-sm:text-xs`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                smooth
                className={`
                  ${
                    hashLink === "#contact"
                      ? "text-indigo-700 hover:text-indigo-400"
                      : "text-black hover:text-indigo-700"
                  } font-semibold max-sm:text-xs`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
