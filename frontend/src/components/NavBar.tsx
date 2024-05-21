import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HouseSimple, Article, Code, BoxArrowDown, UserSound, ReadCvLogo, Terminal } from '@phosphor-icons/react';


const menuItems = [
  { name: 'Home', location: "/", icon: HouseSimple },
  { name: 'Blog', location: "/blog", icon: Article },
  { name: 'Projects', location: "/projects", icon: Code },
  { name: 'Archive', location: "/archive", icon: BoxArrowDown },
  { name: 'Lectures', location: "/lecture", icon: UserSound },
  { name: 'Tech CV', location: "/tech-cv", icon: ReadCvLogo },
  { name: 'Scripts', location: "/scripts", icon: Terminal }
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

