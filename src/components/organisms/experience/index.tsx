import { FaNetworkWired } from "react-icons/fa";

export const Experience = () => {
  return (
    <div
      className="dark:bg-gray-950 dark:text-white border-b border-gray-200 dark:border-gray-800"
      id="experience"
    >
      <div className="dark:bg-gray-950">
        <div className="grid grid-cols-12 items-center h-full relative py-4">
          <div className="col-span-1"></div>
          <div className="col-span-10 h-full gap-3 py-8 container mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <FaNetworkWired className="text-blue-400" /> Experiência
              Profissional
            </h2>
            <p className="dark:text-gray-400 text-gray-800 mb-4">
              Minha experiência profissional inclui uma variedade de papéis em
              desenvolvimento de software, onde trabalhei com tecnologias como
              React, Kotlin e Java. Aqui estão alguns dos principais cargos que
              ocupei ao longo da minha carreira.
            </p>
            <div className="space-y-6">
              <div className="dark:bg-gray-900 bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D0BAQGIV_raAA62BA/company-logo_100_100/company-logo_100_100/0/1725554697774/solarz_tech_logo?e=1754524800&v=beta&t=Y2hJWDvG7izcORghTcD6pQfc3Mpp8Z8KVkkLZd8K7DU"
                    className="w-16 h-16 rounded-2xl object-cover"
                    alt=""
                  />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Software Engineer Full Stack Senior
                    </h3>
                    <p className="text-gray-400">
                      SolarZ - Nov 2023 - Presente
                    </p>
                  </div>
                </div>

                <ul className="list-disc pl-5 mt-2 dark:text-gray-300">
                  <li>
                    Desenvolvimento e manutenção de sistemas utilizando Spring
                    boot com Java 21 e NextJs 12 com ReactJs.
                  </li>
                  <li>
                    Implementação de metodologias ágeis como Scrum e Kaban.
                  </li>
                  <li>Refinamento de tasks.</li>
                  <li>Testes unitários com Junit 5.</li>
                  <li>Testes de integração com Mockito e TestContainer.</li>
                  <li>
                    Integrações com sistemas de pagamentos (Iugu e Asaas).
                  </li>
                  <li>Integrações com sistemas de CRM (Pipedrive).</li>
                  <li>
                    Integrações com sistemas de integração com Whatsapp
                    (Chatguru).
                  </li>
                  <li>Integração com banco de dados com Postgres 16.x.</li>
                  <li>Utilização de GCP.</li>
                  <li>
                    Controle de filas de processos com Redis e AWS SQS (FIFO).
                  </li>
                  <li>Criação e gestão de processo assincono com schedules.</li>
                  <li>Modelagem de dados com Spring JPA.</li>
                  <li>Controle de migração com Flyway.</li>
                  <li>
                    Implementação de níveis de privilégios com Spring Security e
                    autenticação com arquiteturas de JWT.
                  </li>
                  <li>
                    WebClient e OkHttpClient para comunicações entre sistemas.
                  </li>
                  <li>Microserviços.</li>
                  <li>
                    Conhecimentos em criptografia em requisições como
                    assinaturas com RSA.
                  </li>
                  <li>Padrões de projetos e código limpo.</li>
                </ul>
              </div>

              <div className="dark:bg-gray-900 bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E0BAQE6e6nZW0MmGw/company-logo_100_100/B4EZc2WtOPHIAY-/0/1748963612067/laishuol_logo?e=1754524800&v=beta&t=PZz37ZZUiPDtSuE6Hliog1PB4mG5aeBRqT4gcvQ9glo"
                    className="w-16 h-16 rounded-2xl object-cover"
                    alt=""
                  />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Tech Lead | Software develop frontend
                    </h3>
                    <p className="text-gray-400">LAIS - Jub 2023 - Out 2023</p>
                  </div>
                </div>
                <ul className="list-disc pl-5 mt-2 dark:text-gray-300">
                  <li>
                    Desenvolvimento e manutenção de sistemas utilizando ReactJs
                  </li>
                  <li>
                    Implementação de metodologias ágeis como Scrum e Kaban
                  </li>
                  <li>Refinamento de tasks</li>
                  <li>Gitlab e CI/CD</li>
                  <li>Testes automatizados com Cypress</li>
                  <li>Testes com Jest</li>
                </ul>
              </div>

              <div className="dark:bg-gray-900 bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E0BAQFGjs6rIoKpPg/company-logo_100_100/company-logo_100_100/0/1711113619040/bureau_works_logo?e=1754524800&v=beta&t=jk--uRKd2m0rNvJP6bSy1cK08uyA3Hr6N67WEPejHLg"
                    className="w-16 h-16 rounded-2xl object-cover"
                    alt=""
                  />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Software Engineer Full Stack
                    </h3>
                    <p className="text-gray-400">
                      Bureau Works - Abr 2023 - Out 2023
                    </p>
                  </div>
                </div>
                <ul className="list-disc pl-5 mt-2 dark:text-gray-300">
                  <li>
                    Desenvolvimento e manutenção de sistemas utilizando Java com
                    Spring e Vuejs 2 com Nuxt.
                  </li>
                  <li>Refatoração de código.</li>
                  <li>Integração com banco de dados com Postgres 12.x.</li>
                  <li>Implementação de unitários Jest.</li>
                  <li>Implementação de testes de integração Cypress.</li>
                  <li>
                    Integração com modelos de inteligência artificial como
                    ChatGpt.
                  </li>
                  <li>
                    Criação de componentes utilizando MutationObserver interface
                    nativa do DOM para criar e gerenciar areas de edição.
                    (Editor de textos complexos).
                  </li>
                  <li>Gestão de evendos globais.</li>
                  <li>Controle de estado e ciclos de vida.</li>
                </ul>
              </div>

              <div className="dark:bg-gray-900 bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E0BAQEb-01AA6Ggfw/company-logo_100_100/company-logo_100_100/0/1689248604432/cloud_humans_logo?e=1754524800&v=beta&t=GxEQVkV-dbEjvqADV4NbcVokpZ9b9mo6uSO9hcTzJ7I"
                    className="w-16 h-16 rounded-2xl object-cover"
                    alt=""
                  />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Full Stack Developer Pleno
                    </h3>
                    <p className="text-gray-400">
                      Cloud Humans - Abr 2022 - Jan 2023
                    </p>
                  </div>
                </div>
                <ul className="list-disc pl-5 mt-2 dark:text-gray-300">
                  <li>
                    Desenvolvimento e manutenção do sistema utilizando Kotlin
                    com Spring, ReactJs, Vuejs e Ruby on Rails.
                  </li>
                  <li>Refatoração de código</li>
                  <li>Integração com banco de dados com Postgres 16.x</li>
                  <li>Integração com mongobd</li>
                  <li>Implementação de testes kotlin (JUnity 5)</li>
                  <li>Webclient para integração com sistemas</li>
                  <li>Integração com sistemas de chat omnichannel</li>
                  <li>Responsável pelas integrações com TakeBlip</li>
                  <li>Responsável pelas integrações com Octadesk</li>
                  <li>Responsável pelas integrações com Twilio</li>
                  <li>
                    Programação em bloco em twilio studio e blip (no-code e
                    low-code)
                  </li>
                  <li>Controle de filas com RabbitMq</li>
                  <li>
                    Pequenas implementações no chatwoot (Chat integrado nos
                    serviços da empresa)
                  </li>
                  <li>Microserviços</li>
                  <li>
                    Airflow (utilizando python) para gestão e sincronização de
                    dados e rotinas
                  </li>
                  <li>
                    Retool (no-code/low-code) para dashboard e ações de operação
                  </li>
                  <li>Testes unitários com Junit 5</li>
                  <li>Testes de integração com Mockito e TestContainer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
