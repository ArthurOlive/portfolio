import { About } from "../components/organisms/about";
import { Footer } from "../components/organisms/footer";
import { Header } from "../components/organisms/header";
import { Home } from "../components/organisms/home";
import { Project } from "../components/organisms/project";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Project />
      <Footer />
    </div>
  );
};
