import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold p-1 bg-blue-500 rounded-lg italic">
            AO
          </h1>
          <h1 className="text-2xl whitespace-nowrap overflow-ellipsis">
            Arthur Oliveira
          </h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-2 items-center">
            <li>
              <a
                href="#home"
                aria-label="Início"
                className="duration-300 animation-all p-2 px-3 hover:bg-gray-950 rounded-lg"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#about"
                aria-label="Sobre mim"
                className="duration-300 animation-all p-2 px-3 hover:bg-gray-950 rounded-lg"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#experience"
                aria-label="Experiência"
                className="duration-300 animation-all p-2 px-3 hover:bg-gray-950 rounded-lg"
              >
                Experiência
              </a>
            </li>
            <li>
              <a
                href="#projects"
                aria-label="Projetos"
                className="duration-300 animation-all p-2 px-3 hover:bg-gray-950 rounded-l whitespace-nowrap overflow-ellipsis"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ArthurOlive"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-gray-400"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/arthurvitoroliveira"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-gray-400"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/arthur.v.olive/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-gray-400"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
