export const About = () => {
  return (
    <div className="dark:bg-gray-950" id="about">
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
          <div className="col-span-10 grid grid-cols-12 h-full gap-3 container mx-auto">
            <div className="p-8 col-span-12 lg:col-span-8 border dark:border-gray-900 border-gray-300 rounded-lg bg-white dark:bg-gray-950">
              <h2 className="text-4xl font-bold dark:text-white">Sobre</h2>
              <div className="w-24 h-2 barra rounded mb-4" />

              <p className="text-md text-gray-800 dark:text-gray-400 mb-4">
                Sou apaixonado por tecnologia e iniciei minha jornada em
                programação em 2017, durante o curso técnico em TI pelo IMD –
                UFRN. Foi ali que tive meu primeiro contato com o
                desenvolvimento web, área pela qual me encantei ao realizar
                diversos projetos práticos. Mais tarde, no bacharelado em
                Ciência da Computação pela UFERSA, aprofundei meus conhecimentos
                em pesquisa e desenvolvimento de software. Durante uma iniciação
                científica, criei o MATEO — uma solução baseada em inteligência
                artificial para prever evasão estudantil — e lancei meu primeiro
                projeto web funcional utilizando ReactJS.
              </p>
              <p className="text-md text-gray-800 dark:text-gray-400 mb-4">
                Minha trajetória profissional começou na Solarz, uma startup de
                energia solar, onde atuei em equipes multidisciplinares, com
                metodologias ágeis, e me identifiquei com a cultura dinâmica do
                ambiente de startups. Posteriormente, trabalhei como
                desenvolvedor fullstack com foco em frontend na Bureau Works,
                uma empresa americana, onde pude colaborar em projetos
                internacionais e aprimorar minhas habilidades técnicas.
              </p>
              <p className="text-md text-gray-800 dark:text-gray-400 mb-4">
                Em busca de novos desafios, retornei à Solarz como Senior,
                liderando equipes e entregando soluções de alto impacto. Também
                tive a oportunidade de atuar na Cloudhumans, onde reforcei minha
                experiência com inovação e suporte tecnológico.
              </p>
              <p className="text-md text-gray-800 dark:text-gray-400 mb-4">
                Sou movido por aprendizado contínuo e pela criação de soluções
                que geram valor real por meio da tecnologia.
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
