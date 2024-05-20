import { FaMoon, FaSun } from 'react-icons/fa';
import useTheme from "../hooks/useTheme";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded-full'
      aria-label='Toggle Dark Mode'
    >
      {
        theme === 'light' ?
          <FaMoon className="text-gray-800" /> :
          <FaSun className="text-white text-1xl" />
      }
    </button>
  )
}

export default DarkModeToggle;
