import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-200 dark:bg-gray-900 p-4 shadow-md">
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'font-bold text-gray-800 dark:text-gray-200' : 'text-gray-800 dark:text-gray-200'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? 'font-bold text-gray-800 dark:text-gray-200' : 'text-gray-800 dark:text-gray-200'
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'font-bold text-gray-800 dark:text-gray-200' : 'text-gray-800 dark:text-gray-200'
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/archive"
            className={({ isActive }) =>
              isActive ? 'font-bold text-gray-800 dark:text-gray-200' : 'text-gray-800 dark:text-gray-200'
            }
          >
            Archive
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lecture"
            className={({ isActive }) =>
              isActive ? 'font-bold text-gray-800 dark:text-gray-200' : 'text-gray-800 dark:text-gray-200'
            }
          >
            Lectures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tech-cv"
            className={({ isActive }) =>
              isActive ? 'font-bold text-gray-800 dark:text-gray-200' : 'text-gray-800 dark:text-gray-200'
            }
          >
            Tech CV
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/scripts"
            className={({ isActive }) =>
              isActive ? 'font-bold text-gray-800 dark:text-gray-200' : 'text-gray-800 dark:text-gray-200'
            }
          >
            Scripts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

