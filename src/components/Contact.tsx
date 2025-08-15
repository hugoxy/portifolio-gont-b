import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "xhugo@live.com",
      href: "mailto:xhugo@live.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(31) 97570-5747",
      href: "tel:+5531975705747",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Contagem, MG - Brasil",
      href: null,
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Entre em Contato
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
              Estou sempre aberto a novas oportunidades e projetos desafiadores. 
              Entre em contato para conversarmos sobre como posso ajudar sua empresa.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Informações de Contato
              </h3>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {info.title}
                      </h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                  Conecte-se comigo
                </h4>
                <div className="flex space-x-4 justify-center">
                  <a
                    href="https://linkedin.com/in/rocha-victor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-110 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                  <a
                    href="https://github.com/hugoxy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700 dark:bg-gray-600 rounded-lg text-white hover:bg-gray-800 dark:hover:bg-gray-500 transition-all duration-300 hover:scale-110 group"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;