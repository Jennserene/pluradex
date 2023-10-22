'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import styles from "@/app/layout.module.css";
import cn from "classnames";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const circle = <div className={styles.themeSwitcherCircle} key={"circle"} />;
  const text = <span className={styles.themeSwitcherText} key={"text"}>{ theme === 'dark' ? 'Dark' : 'Light' }</span>;

  return (
    <button className={cn(styles.themeSwitcher, {
      'pl-2 pr-1': theme === 'light',
      'pl-1 pr-2': theme === 'dark',
    })} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      { theme === 'dark' ? [circle, text] : [text, circle] }
    </button>
  )
}

export default ThemeChanger;