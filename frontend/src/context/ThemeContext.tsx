import { createContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  theme: string,
  toggleTheme: () => void;
}

type ThemeProviderPropsType = {
  children: ReactNode,
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: ThemeProviderPropsType) => {
  const [theme, setTheme] = useState<string>(() => localStorage.getItem('theme') || 'light'); // using localStorage (client side);

  useEffect(() => {
    // if theme is currently set to dark, then add it to the classList
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };

