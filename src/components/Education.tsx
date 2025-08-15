import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "Pontifícia Universidade Católica de Minas Gerais (PUC Minas)",
      degree: "Bacharelado em Sistemas de Informação",
      period: "2015 - 2019",
      location: "Belo Horizonte, MG",
      description: "Formação sólida em desenvolvimento de software, análise de sistemas, banco de dados e gestão de projetos de TI.",
      highlights: [
        "Programação orientada a objetos",
        "Análise e projeto de sistemas",
        "Banco de dados relacionais",
        "Engenharia de software",
        "Gestão de projetos"
      ]
    }
  ];

  const certifications = [
    {
      title: "DevOps Essentials Professional Certificate (DEPC)",
      issuer: "Certprof",
      icon: "🚀",
      description: "Certificação em práticas essenciais de DevOps, incluindo CI/CD, automação e cultura DevOps."
    },
    {
      title: "Criando chatbots com a plataforma BLIP",
      issuer: "Blip",
      icon: "🤖",
      description: "Certificação oficial da plataforma Blip para desenvolvimento de chatbots conversacionais."
    },
    {
      title: "REST com ASP.NET Core WebAPI",
      issuer: "Desenvolvedor.io",
      icon: "⚡",
      description: "Especialização em desenvolvimento de APIs REST utilizando ASP.NET Core."
    },
    {
      title: "Watsonx Assistant Technical Sales Intermediate",
      issuer: "IBM",
      icon: "🧠",
      description: "Certificação intermediária em vendas técnicas do IBM Watson Assistant."
    },
    {
      title: "Watsonx Assistant Sales Foundation",
      issuer: "IBM",
      icon: "💡",
      description: "Fundamentos em vendas e implementação do IBM Watson Assistant."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Formação & Certificações
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Formação Acadêmica
                </h3>
              </div>

              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border border-gray-200 dark:border-gray-600"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                    <h4 className="text-xl font-bold text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-100 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="text-sm">{edu.location}</div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Principais áreas de estudo:
                      </h5>
                      <div className="grid grid-cols-1 gap-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <div
                            key={highlightIndex}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Certificações
                </h3>
              </div>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:scale-105 border border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{cert.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                          {cert.issuer}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <BookOpen className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Aprendizado Contínuo
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Acredito que a tecnologia está sempre evoluindo, e por isso mantenho-me constantemente 
                atualizado com as últimas tendências em desenvolvimento de software, inteligência artificial 
                e metodologias ágeis. O aprendizado contínuo é fundamental para entregar soluções inovadoras 
                e de alta qualidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;