import { useEffect, useState } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";

export const Header = () => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("@dark-mode-react-tailwind:theme-1.0.0", newTheme);
    console.log("Document", document.documentElement.classList);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const themeFromLocalStorage = localStorage.getItem(
      "@dark-mode-react-tailwind:theme-1.0.0"
    );

    if (themeFromLocalStorage) {
      setTheme(themeFromLocalStorage);
      console.log("Theme from localStorage:", themeFromLocalStorage);
      document.documentElement.classList.toggle(
        "dark",
        themeFromLocalStorage === "dark"
      );
    }
  }, []);

  return (
    <header className="not-dark:bg-gray-100 dark:bg-gray-900 dark:text-white p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold p-1 bg-blue-500 rounded-lg italic dark:text-black text-white">
            AO
          </h1>
          <h1 className="text-2xl whitespace-nowrap overflow-ellipsis">
            Arthur Oliveira
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <nav className="hidden md:block">
            <ul className="flex gap-2 items-center">
              <li>
                <a
                  href="#home"
                  aria-label="Início"
                  className="duration-300 animation-all p-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-950 rounded-lg"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  aria-label="Sobre mim"
                  className="duration-300 animation-all p-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-950 rounded-lg"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  aria-label="Experiência"
                  className="duration-300 animation-all p-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-950 rounded-lg"
                >
                  Experiência
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  aria-label="Projetos"
                  className="duration-300 animation-all p-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-950 rounded-l whitespace-nowrap overflow-ellipsis"
                >
                  Projetos
                </a>
              </li>
            </ul>
          </nav>
          <span
            className="hover:bg-gray-200 dark:text-white dark:hover:bg-gray-950 rounded p-1 cursor-pointer text-lg border-1 dark:border-gray-700 border-gray-300"
            onClick={toggleTheme}
          >
            {theme == "dark" ? <MdNightlight /> : <MdLightMode />}
          </span>
        </div>
      </div>
    </header>
  );
};
