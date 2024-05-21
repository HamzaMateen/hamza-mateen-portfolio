import useTheme from "../hooks/useTheme";
import { Sun, Moon } from '@phosphor-icons/react';

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const iconSize = 24;

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded-full'
      aria-label='Toggle Dark Mode'
    >
      {
        theme === 'light' ?
          <Moon size={iconSize} /> :
          <Sun size={iconSize} />
      }
    </button>
  )
}

export default DarkModeToggle;
