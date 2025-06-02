import { Header } from "../components/moleculas/header";
import { Home } from "../components/moleculas/home";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Home />
      <div className="h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-4xl font-bold mb-4">Sobre min</h2>
          <p className="text-lg text-gray-700">
            Aqui você encontrará uma seleção dos meus projetos, artigos e
            e-books. Sinta-se à vontade para explorar e conhecer mais sobre o
            meu trabalho.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center h-20 bg-gray-900 text-white">
        <p className="text-sm">© 2024 Arthur Oliveira. All rights reserved.</p>
      </div>
    </div>
  );
};
