import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggleTheme} className=" cursor-pointer">
      {theme === "light" ? 
      <MdDarkMode size={25} />: 
      <MdOutlineLightMode size={25} />}
    </button>
  );
};

export default ThemeToggle;
