import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand/Info */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Victor G. Rocha
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Desenvolvedor de Software especializado em chatbots, integrações e APIs REST. 
                Transformando ideias em soluções digitais inovadoras.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <span>Feito com</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <Code className="w-4 h-4 text-blue-400" />
                <span>e</span>
                <Coffee className="w-4 h-4 text-yellow-400" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Navegação</h4>
              <ul className="space-y-3">
                {[
                  { href: '#about', label: 'Sobre Mim' },
                  { href: '#experience', label: 'Experiência' },
                  { href: '#skills', label: 'Habilidades' },
                  { href: '#projects', label: 'Projetos' },
                  { href: '#education', label: 'Formação' },
                  { href: '#contact', label: 'Contato' }
                ].map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-3 text-gray-400">
                <div>
                  <strong className="text-white">Email:</strong>
                  <br />
                  <a 
                    href="mailto:xhugo@live.com"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    xhugo@live.com
                  </a>
                </div>
                <div>
                  <strong className="text-white">Telefone:</strong>
                  <br />
                  <a 
                    href="tel:+5531975705747"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    (31) 97570-5747
                  </a>
                </div>
                <div>
                  <strong className="text-white">Localização:</strong>
                  <br />
                  Contagem, MG - Brasil
                </div>
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Especialidades</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Chatbots', 'C#/.NET', 'APIs REST', 'Blip', 'Azure', 
                  'DevOps', 'Integrações', 'Scrum', 'IBM Watson', 'JavaScript'
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p>
                © {new Date().getFullYear()} Victor G. Rocha. Todos os direitos reservados.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <span>curriculo.gont.com.br</span>
                <span>•</span>
                <span>Desenvolvedor de Software</span>
              </div>
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-110 group"
              aria-label="Voltar ao topo"
            >
              <svg 
                className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;