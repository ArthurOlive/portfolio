import { SubTitle } from "../../atoms/fonts/subtitle";
import { ButtonOutiler } from "../../atoms/buttons";
import { Title } from "../../atoms/fonts/title";
import { FaCircleDot } from "react-icons/fa6";

export const Home = () => {
  return (
    <div
      className="flex items-center justify-center bg-gradient-to-tl from-gray-950 to-gray-900"
      style={{ height: "calc(100vh - 72px)" }}
    >
      <div className="grid grid-cols-12 items-center gap-12 container text-white">
        <div className="w-full col-span-6">
          <div className="flex items-center gap-2 pb-4">
            <span className="text-sm">Seja bem vindo!</span>{" "}
          </div>
          <div className="mb-8">
            <Title>
              <span className="text-blue-500">
                Eu sou, <span className="font-semibold">Arthur Oliveira</span>
              </span>
            </Title>
          </div>
          <div className="flex items-center gap-2 pb-4">
            <SubTitle>Sênior FullStack Developer.</SubTitle>{" "}
          </div>
          <nav className="mt-4 flex text-sm text-slate-50 gap-4">
            <ul className="flex items-center gap-2">
              <FaCircleDot size={8} /> FullStack
            </ul>
            <ul className="flex items-center gap-2">
              <FaCircleDot size={8} /> Java
            </ul>
            <ul className="flex items-center gap-2">
              <FaCircleDot size={8} /> ReactJS
            </ul>
          </nav>
          <nav className="mt-8 flex gap-2 text-lg text-gray-700">
            <ul>
              <ButtonOutiler>
                <span className="text-sm">Saiba mais</span>
              </ButtonOutiler>
            </ul>
          </nav>
        </div>
        <div className="col-span-6 relative">
          <div
            className="flex justify-center items-center relative"
            style={{ zIndex: 999 }}
          >
            <img
              className="shadow-xl rounded-lg w-128 h-128 border-2 border-gray-800 object-cover"
              src="/images/arthur-oliveira-sorrindo-crop.jpg"
            />
          </div>
          <div className="w-128 h-128 bg-gray-900 rounded-xl absolute -top-10 left-40" />
        </div>
      </div>
    </div>
  );
};
