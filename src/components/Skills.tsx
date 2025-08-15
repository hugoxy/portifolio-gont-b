import React from 'react';
import { Code, Database, Cloud, Settings, MessageSquare, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: MessageSquare,
      title: "Chatbots & IA",
      skills: [
        { name: "Plataforma Blip", level: 95 },
        { name: "IBM Watson", level: 85 },
        { name: "OpenAI", level: 80 },
        { name: "Fluxos Conversacionais", level: 95 }
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Code,
      title: "Desenvolvimento",
      skills: [
        { name: "C# / .NET", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "APIs REST", level: 95 },
        { name: "TypeScript", level: 75 }
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Database,
      title: "Banco de Dados",
      skills: [
        { name: "SQL Server", level: 90 },
        { name: "Databricks", level: 80 },
        { name: "SQL", level: 90 },
        { name: "NoSQL", level: 70 }
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Cloud,
      title: "Cloud & Infraestrutura",
      skills: [
        { name: "Microsoft Azure", level: 85 },
        { name: "Kubernetes", level: 80 },
        { name: "Docker", level: 85 },
        { name: "CI/CD", level: 90 }
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Settings,
      title: "Integrações",
      skills: [
        { name: "Zendesk", level: 90 },
        { name: "HubSpot", level: 85 },
        { name: "Google Sheets", level: 80 },
        { name: "APIs REST", level: 95 }
      ],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Zap,
      title: "DevOps & Metodologias",
      skills: [
        { name: "Scrum", level: 95 },
        { name: "SonarQube", level: 85 },
        { name: "Git/GitHub", level: 90 },
        { name: "ITIL", level: 80 }
      ],
      color: "from-teal-500 to-teal-600"
    }
  ];

  const certifications = [
    "DevOps Essentials Professional Certificate (DEPC) (Certprof)",
    "Criando chatbots com a plataforma BLIP (Blip)",
    "REST com ASP.NET Core WebAPI (Desenvolvedor.io)",
    "Watsonx Assistant Technical Sales Intermediate (IBM)",
    "Watsonx Assistant Sales Foundation (IBM)"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Habilidades Técnicas
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
              >
                <div className={`bg-gradient-to-r ${category.color} p-6`}>
                  <div className="flex items-center space-x-3">
                    <category.icon className="w-8 h-8 text-white" />
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Idiomas
            </h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">PT</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Português</h4>
                <p className="text-gray-600 dark:text-gray-400">Nativo</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">EN</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Inglês</h4>
                <p className="text-gray-600 dark:text-gray-400">Intermediário</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Certificações
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors duration-300 group"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;