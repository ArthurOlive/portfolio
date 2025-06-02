import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold p-1 bg-blue-500 rounded-lg italic">
            AO
          </h1>
          <h1 className="text-2xl">Arthur Oliveira</h1>
        </div>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <a href="/" className="hover:underline">
                Início
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                Sobre
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Projetos
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Artigos e E-Books
              </a>
            </li>
            <li>
              <a
                href="https://github.com/arthuroliveira"
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
                href="https://www.linkedin.com/in/arthuroliveira"
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
                href="https://twitter.com/arthuroliveira"
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
