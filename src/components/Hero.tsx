import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    // Create a temporary link to download the CV
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1aci7XyQLrDTf_x-BJpIaNDFulYuM77c9'; // Direct download link
    link.download = 'Victor-Rocha-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-700 dark:text-gray-300"><img src="https://i.imgur.com/Rw82UqC.jpeg" alt="VR" className="rounded-full w-full h-full object-cover" />
</span>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Victor G. Rocha
            </span>
          </h1>

          {/* Subtitle */}
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 animate-fade-in-up animation-delay-400">
            <div className="mb-2">Desenvolvedor de Software</div>
            <div className="text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Chatbots/Voicebots • C# • APIs REST • Integrações • Blip & IA
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
            Especialista em soluções conversacionais e integrações back-end, com foco em 
            performance e escalabilidade. Experiência sólida em plataforma Blip, .NET e 
            metodologias ágeis, atuando em projetos dos setores financeiro e saúde.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up animation-delay-800">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Mail className="w-5 h-5" />
              <span>xhugo@live.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Phone className="w-5 h-5" />
              <span>(31) 97570-5747</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up animation-delay-1000">
            <button
              onClick={downloadCV}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download CV</span>
            </button>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/rocha-victor"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
              </a>
              <a
                href="https://github.com/hugoxy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700 group"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce hover:scale-110 transition-transform duration-300"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;