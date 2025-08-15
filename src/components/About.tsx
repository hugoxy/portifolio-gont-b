import React from 'react';
import { Code, Database, MessageSquare, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: MessageSquare,
      title: "Soluções Conversacionais",
      description: "Especialista em desenvolvimento de chatbots e fluxos conversacionais na plataforma Blip"
    },
    {
      icon: Code,
      title: "Backend & APIs",
      description: "Desenvolvimento de APIs REST, BFFs e integrações robustas em C# .NET"
    },
    {
      icon: Database,
      title: "Integrações",
      description: "Experiência em integrações com Zendesk, HubSpot, Google Sheets, IBM Watson e OpenAI"
    },
    {
      icon: Zap,
      title: "DevOps & Agilidade",
      description: "Práticas DevOps com CI/CD, Kubernetes, SonarQube e metodologias ágeis (Scrum)"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Sobre Mim
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="prose prose-lg text-gray-600 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                  Sou um <strong>Desenvolvedor de Software</strong> especializado em soluções conversacionais, 
                  com foco em chatbots, integrações back-end e construção de BFFs. Formado em 
                  <strong> Sistemas de Informação pela PUC Minas</strong>, atuo na evolução e 
                  manutenção de fluxos na plataforma Blip.
                </p>
                <p className="text-lg leading-relaxed">
                  Possuo experiência sólida em integrações com <strong>Zendesk, HubSpot, Google Sheets, 
                  IBM Watson e OpenAI</strong>. Minha vivência anterior como analista de suporte N2 
                  fortaleceu minhas habilidades analíticas, visão técnica ampla e capacidade de 
                  resolução de problemas em ambientes críticos.
                </p>
                <p className="text-lg leading-relaxed">
                  Domino a stack <strong>.NET (C#)</strong>, práticas <strong>DevOps (CI/CD, Kubernetes, SonarQube)</strong> 
                  e metodologias ágeis (Scrum), atuando com visão de produto e foco em entregas 
                  com impacto real.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                  <div className="text-gray-600 dark:text-gray-400">Anos de Experiência</div>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">20+</div>
                  <div className="text-gray-600 dark:text-gray-400">Projetos Concluídos</div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;