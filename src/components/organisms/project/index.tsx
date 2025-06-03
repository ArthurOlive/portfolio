import { useState } from "react";
import { FaCloud, FaWebflow } from "react-icons/fa6";

export const Project = () => {
  const [selectedProject, setSelectedProject] = useState<string>("APPS");

  return (
    <div className="bg-gray-950">
      <div className="grid grid-cols-12 items-center h-full relative py-4">
        <div className="col-span-1"></div>
        <div className="col-span-10 h-full gap-3 py-8 ">
          <h2 className="text-4xl font-bold mb-4  text-white">Projetos</h2>

          <div className="grid grid-flow-row sm:grid-flow-col w-full mb-2 divide-y sm:divide-x divide-gray-400 overflow-auto border border-gray-400 rounded-lg">
            <div
              className={`flex gap-4 items-start justify-center p-4 ${
                selectedProject == "APPS"
                  ? "text-purple-500 bg-purple-500/5 "
                  : "text-white"
              } cursor-pointer`}
              onClick={() => setSelectedProject("APPS")}
            >
              <span className="text-4xl ">
                <FaWebflow />
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
              <span className="text-4xl ">
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
                <FaWebflow />
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
            <div className="flex text-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
