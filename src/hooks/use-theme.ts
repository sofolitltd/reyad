"use client";

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, _setTheme] = useState<Theme>('system');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      _setTheme(storedTheme);
      applyTheme(storedTheme);
    } else {
      applyTheme('system');
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (localStorage.getItem('theme') === 'system') {
        applySystemTheme();
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const applyTheme = (theme: Theme) => {
    if (theme === 'system') {
      applySystemTheme();
    } else {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  };
  
  const applySystemTheme = () => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', systemPrefersDark);
  }

  const setTheme = (newTheme: Theme) => {
    _setTheme(newTheme);
    if (newTheme === 'system') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', newTheme);
    }
    applyTheme(newTheme);
  };

  return { theme, setTheme };
}
