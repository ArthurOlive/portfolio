export const About = () => {
  return (
    <div className="bg-gray-950" id="about">
      <div
        className="py-2 relative overflow-hidden rounded-lg bg-gray-950/[2.5%]
                after:pointer-events-none after:absolute after:inset-0 after:rounded-lg
                after:inset-ring after:inset-ring-gray-950/5
                dark:after:inset-ring-white/10
                bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)]
                bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5
                dark:[--pattern-fg:var(--color-white)]/10"
      >
        <div className="grid grid-cols-12 items-center h-full justify-items-center relative py-4">
          <div className="col-span-1"></div>
          <div className="col-span-10 grid grid-cols-12 h-full gap-3">
            <div className="p-8 col-span-12 lg:col-span-8 border border-gray-900 rounded-lg bg-gray-950">
              <h2 className="text-4xl font-bold text-white">Sobre min</h2>
              <div className="w-44 h-2 barra rounded mb-4" />

              <p className="text-md text-gray-400 mb-4">
                Apaixonado por tecnologia, iniciei minha jornada em programação
                em 2017, no curso técnico de TI pelo IMD - UFRN, onde desenvolvi
                diversos projetos e me encantei pela área de desenvolvimento
                Web. No bacharelado em Ciência da Computação pela UFERSA,
                aprofundei meu conhecimento em pesquisa e desenvolvimento de
                software. Durante uma iniciação científica, criei o MATEO, uma
                solução baseada em IA para prever a evasão estudantil, e lancei
                meu primeiro projeto web funcional com ReactJS.
              </p>
              <p className="text-md text-gray-400 mb-4">
                Minha primeira experiência profissional foi na Solarz, startup
                de energia solar, onde trabalhei com equipes multidisciplinares,
                métodos ágeis e me apaixonei pela cultura de startups.
                Posteriormente, atuei como desenvolvedor fullstack focado em
                frontend na Bureau Works, uma empresa americana, aprimorando
                minhas habilidades com projetos globais. Buscando novos
                desafios, retornei à Solarz como Tech Lead, liderando equipes e
                entregando soluções de alto impacto. Também passei pela
                Cloudhumans, fortalecendo minha expertise em inovação e suporte
                tecnológico. Sou movido por aprendizado constante e pela entrega
                de soluções tecnológicas transformadoras.
              </p>
            </div>
            <div className="col-span-4 relative hidden sm:hidden min-lg:block">
              <img
                src="/images/arthur-oliveira-summit.jpg"
                alt="imagem de Arthur Oliveira no Startup Summit"
                className="object-cover shadow-2xs rounded-2xl"
              ></img>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
};
