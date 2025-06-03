import { About } from "../components/organisms/about";
import { Experience } from "../components/organisms/experience";
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
      <Experience />
      <Project />
      <Footer />
    </div>
  );
};
