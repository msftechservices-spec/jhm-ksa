import React from 'react';
import { Phone, Mail, MapPin, Code, Building, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Software Division */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center">
                <Code className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className={`text-xl font-bold text-gray-900 dark:text-white ${isRTL ? 'mr-4' : 'ml-4'}`}>{t('contact.software.title')}</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('contact.software.name')}</h4>
                <div className="space-y-2">
                  <a href="tel:+966507734137" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
                    <Phone className={`h-4 w-4 ${isRTL ? 'ml-3' : 'mr-3'} text-emerald-600 dark:text-emerald-400`} />
                    +966507734137
                  </a>
                  <a href="mailto:software@jhmksa.com" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
                    <Mail className={`h-4 w-4 ${isRTL ? 'ml-3' : 'mr-3'} text-emerald-600 dark:text-emerald-400`} />
                    software@jhmksa.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* General Services */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center">
                <Building className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className={`text-xl font-bold text-gray-900 dark:text-white ${isRTL ? 'mr-4' : 'ml-4'}`}>{t('contact.general.title')}</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('contact.general.name')}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{t('contact.general.role')}</p>
                <div className="space-y-2">
                  <a href="tel:+966555978341" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
                    <Phone className={`h-4 w-4 ${isRTL ? 'ml-3' : 'mr-3'} text-emerald-600 dark:text-emerald-400`} />
                    +966555978341
                  </a>
                  <a href="mailto:shakeel@jhmksa.com" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
                    <Mail className={`h-4 w-4 ${isRTL ? 'ml-3' : 'mr-3'} text-emerald-600 dark:text-emerald-400`} />
                    shakeel@jhmksa.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Head Office */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className={`text-xl font-bold text-gray-900 dark:text-white ${isRTL ? 'mr-4' : 'ml-4'}`}>{t('contact.office.title')}</h3>
            </div>
            
            <div className="space-y-4">
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-2">{t('contact.office.address1')}</p>
                <p className="mb-2">{t('contact.office.address2')}</p>
                <p className="mb-4">{t('contact.office.poBox')}</p>
                
                <div className="space-y-2">
                  <a href="tel:+966134656742" className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200`}>
                    <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span>{t('contact.office.tel')}</span>
                  </a>
                  <a href="tel:+966138656720" className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200`}>
                    <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span>{t('contact.office.fax')}</span>
                  </a>
                  <a href="mailto:info@jhmksa.com" className="flex items-center hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
                    <Mail className={`h-4 w-4 ${isRTL ? 'ml-3' : 'mr-3'} text-emerald-600 dark:text-emerald-400`} />
                    info@jhmksa.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map or Additional Info */}
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {t('contact.cta.title')}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-8">
            {t('contact.cta.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@jhmksa.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 dark:bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-700 transition-colors duration-200"
            >
              <Mail className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('contact.cta.sendEmail')}
            </a>
            <a 
              href="tel:0134656742"
              className="inline-flex items-center justify-center px-6 py-3 border border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 font-medium rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900 transition-colors duration-200"
            >
              <Phone className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('contact.cta.callNow')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;