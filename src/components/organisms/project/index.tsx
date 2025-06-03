import { useState } from "react";
import { FaAppStoreIos, FaGamepad, FaProjectDiagram } from "react-icons/fa";
import { FaCloud } from "react-icons/fa6";

export const Project = () => {
  const [selectedProject, setSelectedProject] = useState<string>("APPS");

  return (
    <div className="bg-gray-950">
      <div className="grid grid-cols-12 items-center h-full relative py-4">
        <div className="col-span-1"></div>
        <div className="col-span-10 h-full gap-3 py-8 container mx-auto">
          <h2 className="text-4xl font-bold mb-4  text-white flex items-center gap-2">
            <FaProjectDiagram className="text-blue-400" /> Projetos
          </h2>

          <p className="text-md text-gray-400 text-justify mb-4">
            Ao longo da minha carreira, tive a oportunidade de trabalhar em
            diversos projetos que refletem minha paixão por tecnologia e
            inovação. Desde aplicações completas que integram front-end e
            back-end, até APIs robustas e jogos interativos, cada projeto
            representa um passo na minha jornada como desenvolvedor. Aqui estão
            alguns dos projetos mais significativos que desenvolvi, cada um com
            suas próprias características e tecnologias envolvidas. Explore-os
            para entender melhor minha experiência e habilidades técnicas.
          </p>

          <div className="grid grid-flow-row sm:grid-flow-col w-full mb-2 divide-y sm:divide-x divide-gray-800 overflow-auto border border-gray-800 rounded-lg">
            <div
              className={`flex gap-4 items-start justify-center p-4 ${
                selectedProject == "APPS"
                  ? "text-purple-500 bg-purple-500/5 "
                  : "text-white"
              } cursor-pointer`}
              onClick={() => setSelectedProject("APPS")}
            >
              <span className="text-4xl ">
                <FaAppStoreIos />
              </span>
              <div>
                <h3 className="text-md pb-3">Apps e sistemas</h3>
                <p className="text-sm text-gray-400">
                  Aplicações completas, que incluem tanto o front-end quanto o
                  back-end, geralmente com uma interface de usuário e
                  funcionalidades completas.
                </p>
              </div>
            </div>

            <div
              className={`${
                selectedProject == "APIS"
                  ? "text-pink-500 bg-pink-500/5 "
                  : "text-white"
              } flex gap-4 items-start justify-center p-4 cursor-pointer`}
              onClick={() => setSelectedProject("APIS")}
            >
              <span className="text-4xl">
                <FaCloud />
              </span>
              <div>
                <h3 className="text-md pb-3">Api's</h3>
                <p className="text-sm text-gray-400">
                  Aplicações que possuem apenas o back-end, sem front-end ou com
                  front-end mínimo, geralmente utilizadas para fornecer dados ou
                  serviços para outras aplicações.
                </p>
              </div>
            </div>

            <div
              className={`
                ${
                  selectedProject == "GAMES"
                    ? "text-blue-500 bg-blue-500/5 "
                    : "text-white"
                } flex gap-4 items-start justify-center p-4 cursor-pointer`}
              onClick={() => setSelectedProject("GAMES")}
            >
              <span className="text-4xl">
                <FaGamepad />
              </span>
              <div>
                <h3 className="text-md pb-3">Jogos e testes</h3>
                <p className="text-sm text-gray-400">
                  Aplicações que não possuem um propósito claro, mas são
                  interessantes ou divertidas, como jogos ou testes de
                  tecnologia.
                </p>
              </div>
            </div>
          </div>

          <div className=" gap-4 rounded-2xl overflow-hidden">
            <div className="flex text-white">
              <div className="w-full">
                {selectedProject === "APPS" && (
                  <div className="py-2 grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-3 gap-2 bg-gray-900 p-2">
                    <div className="border border-gray-700 rounded-2xl p-4 bg-gray-950">
                      <div className="relative mb-4">
                        <h3 className="text-lg font-semibold mb-2">Mindsafe</h3>
                        <span className="p-1 text-xs bg-red-500 rounded-lg text-white absolute top-0 right-2">
                          Privado
                        </span>
                      </div>
                      <div className="mb-4">
                        <img
                          src="images/mindsafeapp.png"
                          alt="Mindsafe app"
                          className="rounded-2xl shadow-lg mt-4 w-full h-auto object-cover"
                        />
                      </div>
                      <p className="text-sm text-gray-400">
                        Mindsafe é um aplicativo de gerenciamneto de clinícas de
                        psicologia, com o intuito de facilitar o agendamento de
                        consultas, o gerenciamento de pacientes e a organização
                        de prontuários eletrônicos. Desenvolvido com{" "}
                        <b>ReactJS, Spring e Postgres</b>, A Mindsafe oferece
                        uma interface intuitiva e funcionalidades robustas para
                        profissionais da área de saúde mental.
                      </p>
                      <ul>
                        <li className="text-sm text-gray-400 mt-2">
                          <b>Stack:</b> ReactJS, Kotlin, Java, Spring, Postgres
                        </li>
                        <li className="text-sm text-gray-400">
                          <b>Link:</b>{" "}
                          <a
                            href="https://mindsafe.com.br"
                            className="hover:underline"
                            target="_blank"
                          >
                            mindsafe.com.br
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="border border-gray-700 rounded-2xl p-4 bg-gray-950">
                      <div className="relative mb-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Foodburger
                        </h3>
                        <span className="p-1 text-xs bg-blue-500 rounded-lg text-white absolute top-0 right-2">
                          Aberto
                        </span>
                      </div>
                      <div className="mb-4 flex flex-row gap-4 w-full h-96 items-center justify-center">
                        <img
                          src="https://github.com/ArthurOlive/foodburger/blob/main/.github/images/app.png?raw=true"
                          alt="Foodburger app"
                          className="rounded-2xl shadow-lg mt-4 h-full object-cover"
                        />
                        <img
                          src="https://github.com/ArthurOlive/foodburger/blob/main/.github/images/app2.png?raw=true"
                          className="rounded-2xl shadow-lg mt-4 h-full  object-cover hidden xl:block"
                        />
                      </div>
                      <p className="text-sm text-gray-400">
                        Foodburger é um aplicativo de delivery de lanches,
                        desenvolvido com o objetivo de oferecer uma experiência
                        de compra rápida e eficiente. Com uma interface amigável
                        e intuitiva, o Foodburger permite que os usuários façam
                        pedidos de forma simples e rápida, garantindo uma
                        experiência de compra agradável.
                      </p>

                      <ul>
                        <li className="text-sm text-gray-400 mt-2">
                          <b>Stack:</b> ReactJS, Java, Spring, Postgres
                        </li>
                        <li className="text-sm text-gray-400">
                          <b>Link:</b>{" "}
                          <a
                            href="https://github.com/ArthurOlive/foodburger"
                            className="hover:underline pr-1"
                            target="_blank"
                          >
                            foodburger-web
                          </a>
                          <a
                            href="https://github.com/ArthurOlive/foodburger-api"
                            className="hover:underline"
                            target="_blank"
                          >
                            foodburger-api
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {selectedProject === "APIS" && (
                  <div className="py-2 grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 gap-2 bg-gray-900 p-2 min-h-96"></div>
                )}

                {selectedProject === "GAMES" && (
                  <div className="py-2 grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 gap-2 bg-gray-900 p-2 min-h-96"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
