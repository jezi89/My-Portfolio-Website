import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
  return (
    <header className="mix-blend-hue bg-aqua-deep-500">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-gray-100"
            className="py-2 text-6xl inflex-flex items-center px-8 text-brown-200 text-bg-gray-200 hover:text-aqua-deep-500 hover:bg-brown-200 rounded-2xl font-bold serif transition-all duration-500 ease-in-out border-b-8 border-transparent hover:border-aqua-deep-300 tracking-wider"
          >
            Jer
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-aqua-deep-100"
            className="pt-2 text-xl inline-flex items-center px-3 text-brown-200 hover:text-aqua-deep-300 hover:bg-gray-100 transition ease-out duration-700 border-b-8 border-transparent hover:border-brown-200 rounded-2xl"
          >Dev Blog
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-aqua-deep-200"
            className="pt-2 text-xl inline-flex items-center px-3 text-brown-200 hover:text-aqua-deep-300 hover:bg-gray-100 transition ease-out duration-700 border-b-8 border-transparent hover:border-brown-200 rounded-2xl"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-gray-100"
            className="pt-2 text-xl inline-flex items-center px-3 text-brown-200 hover:text-aqua-deep-300 hover:bg-gray-100 transition ease-out duration-700 border-b-8 border-transparent hover:border-brown-200 rounded-2xl"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-3">
          <SocialIcon
            url="https://www.youtube.com/channel/UCdXEmMNTPfo76w50SX8OAew"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/jeromevdzijde/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/jerome.vanderzijde"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/jezi89/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/jezi89"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
