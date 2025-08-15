import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "PROA.AI",
      position: "Chatbot Developer Senior",
      period: "Abril 2024 - Atualmente (1 ano 3 meses)",
      location: "São Paulo, São Paulo, Brasil",
      description: "Desenvolvedor sênior na frente de chatbots do Banco Safra, com foco em evolução de fluxos conversacionais na plataforma Blip.",
      achievements: [
        "Refatoração de fluxos legados para maior clareza, escalabilidade e manutenibilidade",
        "Criação e manutenção de documentações técnicas utilizando Figma e Miro",
        "Proposição de melhorias técnicas e funcionais com foco em performance e usabilidade",
        "Desenvolvimento e sustentação de bots na plataforma Blip, com integrações via APIs existentes",
        "Responsável por homologações em ambiente de desenvolvimento e junto ao cliente",
        "Execução de testes ativos e regressivos para garantir estabilidade e qualidade das entregas",
        "Atuação em squads ágeis com metodologia Scrum, participando ativamente de decisões técnicas"
      ],
      isCurrentJob: true
    },
    {
      company: "Blip",
      position: "Software Developer",
      period: "Agosto 2022 - Abril 2024 (1 ano 9 meses)",
      location: "Belo Horizonte, Minas Gerais, Brasil",
      description: "Desenvolvedor de chatbots na plataforma Blip, responsável pela criação e manutenção dos fluxos conversacionais.",
      achievements: [
        "Desenvolvimento de APIs REST intermediárias (BFF) em C# .NET para integrar chatbots com sistemas internos e externos",
        "Integrações com Zendesk, HubSpot, Google Sheets, WatsonX e OpenAI",
        "Habilidades em JavaScript, C#, .NET, metodologias ágeis (Scrum), Kubernetes, pipelines CI/CD e análise de qualidade com SonarQube",
        "Foco de atuação em clientes dos setores financeiro e saúde, entre eles Safra, Alelo, Méliuz, PicPay, Hermes Pardini, Dr.Consulta e Sanofi"
      ],
      isCurrentJob: false
    },
    {
      company: "Blip",
      position: "Technical Support Analyst",
      period: "Abril 2021 - Agosto 2022 (1 ano 5 meses)",
      location: "Belo Horizonte, Minas Gerais, Brasil",
      description: "Technical Support atuando e respondendo em incidentes em N2 da plataforma, acompanhando e garantindo o cumprimento do SLA.",
      achievements: [
        "Resolução dos problemas e incidentes da plataforma Blip, propondo conhecimentos em banco de dados SQL, Databricks, JavaScript, Kubernetes, Cloud e Infraestrutura",
        "Criação e leitura de querys em banco de dados SQL utilizando Microsoft SQL Server e Databricks",
        "Realização de análise de dados e consultas no banco de dados relacionadas aos incidentes e problemas relatados pelo cliente utilizando a ferramenta Databricks",
        "Utilização de metodologias ágeis para garantir uma maior organização do time, um backlog controlado, cumprimento do SLA e também realizando dailies com o time para distribuição de tarefas e resolução de incidentes",
        "Utilização das ferramentas Nagios, SEQ, Grafana e Dynatrace para acompanhamento da infraestrutura",
        "Utilização de Cloud Azure para gerenciamento da infraestrutura"
      ],
      isCurrentJob: false
    },
    {
      company: "Stefanini Brasil",
      position: "Support Analyst",
      period: "Abril 2019 - Abril 2021 (2 anos 1 mês)",
      location: "Belo Horizonte, Minas Gerais, Brasil",
      description: "Suporte ao usuário final via tickets no ServiceNow referente a falhas e requisições nos equipamentos corporativos do cliente (CNH Industrial).",
      achievements: [
        "Instalação e configuração do VMWare AirWatch (Hub Intelligent), suporte nível um SAP e roteamento de tickets para time central",
        "Gerenciamento de acessos GPO via Active Directory, auditorias de TELECOM, gestão de inventário",
        "Gestão dos sistemas de áudio conferência e videoconferência (Cisco Videoconferência, Cisco Telepresence Management Suit TMS, Cisco Meeting Management CMM)",
        "Responsável pelo atendimento executivo prioritário aos usuários VIP's (Diretoria)",
        "Acompanhamento de métricas ITIL para garantir o cumprimento dos Acordos de Nível de Serviço (SLA)",
        "Promovendo a melhoria contínua dos processos de suporte"
      ],
      isCurrentJob: false
    },
    {
      company: "CNH Industrial",
      position: "IT Apprentice",
      period: "Abril 2018 - Abril 2019 (1 ano 1 mês)",
      location: "Belo Horizonte, Minas Gerais, Brasil",
      description: "Aprendiz, atuando no setor de tecnologia da informação da empresa (ICT).",
      achievements: [
        "Vivenciando aprendendo diversas tecnologias do meio, auxiliando na gestão dos contratos e serviços dos fornecedores",
        "Auxílio na gestão dos sistemas de áudio conferência e videoconferência (Cisco Videoconferência, Cisco Telepresence Management Suit TMS)",
        "Auxílio na gestão de salas de reunião e auxílio no atendimento aos usuários VIP's com enfoque e agendamentos de telepresensas"
      ],
      isCurrentJob: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experiência Profissional
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'
                } md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
              >
                {/* Timeline Dot */}
                <div className={`absolute w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full ${
                  index % 2 === 0 
                    ? 'left-2 md:right-[-8px] md:left-auto' 
                    : 'left-2 md:left-[-8px]'
                } top-8 z-10`}>
                  <div className="w-4 h-4 bg-white dark:bg-gray-900 rounded-full absolute inset-0 m-auto scale-50"></div>
                </div>

                {/* Experience Card */}
                <div className="ml-8 md:ml-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border border-gray-200 dark:border-gray-700">
                  {/* Current Job Badge */}
                  {exp.isCurrentJob && (
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 text-sm font-semibold">
                      Posição Atual
                    </div>
                  )}
                  
                  <div className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.position}
                      </h3>
                      <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-3">
                        {exp.company}
                      </h4>
                      
                      {/* Meta Info */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h5 className="font-semibold text-gray-900 dark:text-white">
                        Principais atividades:
                      </h5>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <div
                            key={achievementIndex}
                            className="flex items-start space-x-3 group/item"
                          >
                            <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-300" />
                            <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;