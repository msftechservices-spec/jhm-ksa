import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      <div className={`relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? 'rtl:text-right' : ''}`}>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
          {t('hero.title')}
        </h1>
        
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
          {t('hero.description')}
        </p>
        
        <button 
          onClick={scrollToServices}
          className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in-up animation-delay-600"
        >
          {t('hero.getStarted')}
          <ArrowRight className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;