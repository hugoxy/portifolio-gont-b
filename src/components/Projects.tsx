import React from 'react';
import { ExternalLink, Github, Code, Bot, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Chatbot Banco Safra",
      description: "Desenvolvimento e evolução de chatbots conversacionais para atendimento bancário, com foco em performance e experiência do usuário.",
      technologies: ["Blip", "C#", ".NET", "APIs REST", "IBM Watson"],
      features: [
        "Fluxos conversacionais otimizados",
        "Integrações com sistemas bancários",
        "Análise de performance e métricas",
        "Testes automatizados e homologações"
      ],
      icon: Bot,
      gradient: "from-blue-500 to-blue-600",
      category: "Chatbot Enterprise"
    },
    {
      title: "APIs de Integração Blip",
      description: "Desenvolvimento de BFFs (Backend For Frontend) para integração de chatbots com sistemas externos diversos.",
      technologies: ["C#", ".NET Core", "REST APIs", "Zendesk", "HubSpot"],
      features: [
        "APIs REST escaláveis",
        "Integrações com CRMs",
        "Documentação técnica completa",
        "Monitoramento e observabilidade"
      ],
      icon: Code,
      gradient: "from-green-500 to-green-600",
      category: "Backend Development"
    },
    {
      title: "Sistema de Monitoramento N2",
      description: "Solução completa para monitoramento de infraestrutura e resolução de incidentes em ambiente de produção.",
      technologies: ["SQL Server", "Databricks", "Azure", "Kubernetes"],
      features: [
        "Dashboard de métricas em tempo real",
        "Alertas proativos de incidentes",
        "Análise de dados de performance",
        "Gestão de SLA automatizada"
      ],
      icon: Database,
      gradient: "from-purple-500 to-purple-600",
      category: "Infrastructure"
    }
  ];

  const clients = [
    "Banco Safra", "Alelo", "Méliuz", "PicPay", 
    "Hermes Pardini", "Dr.Consulta", "Sanofi", "CNH Industrial"
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Projetos & Portfolio
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
              Experiência em desenvolvimento de soluções conversacionais e integrações para clientes 
              dos setores financeiro, saúde e tecnologia.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.gradient} p-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <project.icon className="w-8 h-8 text-white" />
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {project.title}
                        </h3>
                        <span className="text-blue-100 text-sm">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Principais características:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`}></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Tecnologias utilizadas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:scale-105 transition-transform duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Clientes & Parceiros
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Experiência comprovada trabalhando com empresas líderes em seus segmentos
              </p>
            </div>

            {/* Clients Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white dark:bg-gray-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">
                      {client.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Interessado em saber mais sobre meus projetos?
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;