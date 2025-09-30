import React from 'react';
import { Building, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t('about.subtitle')}
            </h3>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-emerald-600 mb-2">{t('about.experience.title')}</h4>
                <p className="text-gray-600 dark:text-gray-300">{t('about.experience.subtitle')}</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-emerald-600 mb-2">{t('about.projects.title')}</h4>
                <p className="text-gray-600 dark:text-gray-300">{t('about.projects.subtitle')}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-emerald-600 mb-2">{t('about.clients.title')}</h4>
                <p className="text-gray-600 dark:text-gray-300">{t('about.clients.subtitle')}</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-emerald-600 mb-2">{t('about.team.title')}</h4>
                <p className="text-gray-600 dark:text-gray-300">{t('about.team.subtitle')}</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/cranes.jpg"
              alt="Construction equipment"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
            <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
              <div className="flex-shrink-0">
                <Target className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t('about.mission.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {t('about.mission.description')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
            <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
              <div className="flex-shrink-0">
                <Building className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t('about.vision.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {t('about.vision.description')}
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;