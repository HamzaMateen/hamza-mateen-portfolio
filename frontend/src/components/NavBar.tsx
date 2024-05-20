import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineRead, AiOutlineCode, AiOutlineFileText, AiOutlineBulb, AiOutlineIdcard, AiOutlineFile } from 'react-icons/ai';

const menuItems = [
  { name: 'Home', location: "/", icon: AiOutlineHome },
  { name: 'Blog', location: "/blog", icon: AiOutlineRead },
  { name: 'Projects', location: "/projects", icon: AiOutlineCode },
  { name: 'Archive', location: "/archive", icon: AiOutlineFileText },
  { name: 'Lectures', location: "/lecture", icon: AiOutlineBulb },
  { name: 'Tech CV', location: "/tech-cv", icon: AiOutlineIdcard },
  { name: 'Scripts', location: "/scripts", icon: AiOutlineFile }
];

const NavBar: React.FC = () => {
  const iconSize: number = 24;

  const [_selectedIcon, setSelectedIcon] = useState<string | null>(null);

  return (
    <nav className="rounded-xl">
      <ul className="flex space-x-4">
        {
          menuItems.map((menuItem, index) => {
            return (
              <NavLink
                to={menuItem.location}
              >
                <li
                  key={index}
                  onClick={() => setSelectedIcon(menuItem.name)}
                >
                  <menuItem.icon size={iconSize} />
                </li>
              </NavLink>
            )
          })
        }
      </ul>
    </nav>
  );
};

export default NavBar;

