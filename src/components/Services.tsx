import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Users, Building, Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const services = [
    {
      icon: Truck,
      titleKey: 'services.heavyEquipment.title',
      descriptionKey: 'services.heavyEquipment.description',
      path: '/heavy-equipment'
    },
    {
      icon: Users,
      titleKey: 'services.support.title',
      descriptionKey: 'services.support.description',
      path: '/support-solutions'
    },
    {
      icon: Building,
      titleKey: 'services.contracting.title',
      descriptionKey: 'services.contracting.description',
      path: '/contracting'
    },
    {
      icon: Code,
      titleKey: 'services.software.title',
      descriptionKey: 'services.software.description',
      path: '/software-solutions'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-xl hover:border-emerald-200 dark:hover:border-emerald-600 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`flex items-center mb-6 ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t(service.titleKey)}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t(service.descriptionKey)}
              </p>
              
              <Link 
                to={service.path}
                className="inline-flex items-center justify-center w-full mt-6 px-6 py-3 bg-emerald-600 dark:bg-emerald-700 text-white font-medium rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors duration-200"
              >
                {t('hero.learnMore')}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;