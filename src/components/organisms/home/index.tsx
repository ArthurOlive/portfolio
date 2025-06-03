import { SubTitle } from "../../atoms/fonts/subtitle";
import { ButtonOutiler } from "../../atoms/buttons";
import { Title } from "../../atoms/fonts/title";
import { FaCircleDot } from "react-icons/fa6";

export const Home = () => {
  return (
    <div className="grid grid-cols-12 bg-gradient-to-t from-gray-950 to-slate-900 overflow-hidden">
      <div className="w-20 ml-auto col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10"></div>

      <div className="col-span-12 md:col-span-10 grid grid-cols-12 items-center gap-12 container text-white mx-auto px-8 py-40">
        <div className="w-full col-span-6">
          <div className="flex items-center gap-2 pb-4">
            <span className="text-sm">Seja bem vindo!</span>{" "}
          </div>
          <div className="mb-8">
            <Title>
              <span className="title-animation">
                Eu sou, <span className="font-semibold">Arthur Oliveira</span>
              </span>
            </Title>
          </div>
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-1">
              <SubTitle>Sênior FullStack Developer</SubTitle>{" "}
            </div>
            <div className="w-60 h-2 barra rounded" />
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
            <ul>
              <ButtonOutiler
                onClick={() => window.open("/documents/resume.pdf", "_blank")}
              >
                <span className="text-sm">Download CV</span>
              </ButtonOutiler>
            </ul>
          </nav>
        </div>
        <div className="col-span-6 relative max-w-full overflow-hidden">
          <div
            className="flex justify-center items-center relative"
            style={{ zIndex: 10 }}
          >
            <div className="h-48 w-48 z-50 p-4 top-0 -left-10 lg:top-6 sm:p-8 absolute overflow-hidden rounded-lg bg-gray-950/[2.5%] after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:inset-ring after:inset-ring-gray-950/5 bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10"></div>
            <div className="h-48 w-48 z-50 p-4 bottom-0 right-0 lg:bottom-10 lg:right-10 sm:p-8 absolute overflow-hidden rounded-lg bg-gray-950/[2.5%] after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:inset-ring after:inset-ring-gray-950/5 bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10"></div>

            <img
              className="shadow-2xs rounded-2xl w-128 h-128 object-cover relative z-20"
              src="/images/arthur-oliveira-sorrindo-crop.jpg"
            />
            {/* <div className="w-128 h-128 object-cover bg-gray-900 rounded-2xl absolute bottom-5 right-20 hidden lg:block" /> */}
          </div>
        </div>
      </div>

      <div className="w-20 mr-auto col-start-12 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10"></div>
    </div>
  );
};
