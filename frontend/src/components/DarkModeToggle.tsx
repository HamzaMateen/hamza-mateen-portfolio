import { FaMoon, FaSun } from 'react-icons/fa';
import useTheme from "../hooks/useTheme";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className='p-2 bg-gray-300 dark:bg-gray-700 rounded-full'
      aria-label='Toggle Dark Mode'
    >
      {
        theme === 'light' ?
          <FaMoon className="text-gray-800" /> :
          <FaSun className="text-yellow-500" />
      }
    </button>
  )
}

export default DarkModeToggle;
