import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/JHM_3D1.png" 
              alt="JHM Logo" 
              className="h-80 w-auto mb-4"
            />
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t('company.name')}
            </h3>
            <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <MapPin className={`h-4 w-4 ${isRTL ? 'ml-3' : 'mr-3'} text-emerald-400`} />
                <span>Abu Haidryah St. Cross 6/8, Al-Khobar 31952, Saudi Arabia</span>
              </div>
              <a href="tel:+966134656742" className="flex items-center hover:text-emerald-400 transition-colors duration-200">
                <Phone className={`h-4 w-4 ${isRTL ? 'ml-3' : 'mr-3'} text-emerald-400`} />
                <span>+966 13 465 6742</span>
              </a>
              <a href="mailto:info@jhmksa.com" className="flex items-center hover:text-emerald-400 transition-colors duration-200">
                <Mail className={`h-4 w-4 ${isRTL ? 'ml-3' : 'mr-3'} text-emerald-400`} />
                <span>info@jhmksa.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  {t('nav.services')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>{t('services.heavyEquipment.title')}</li>
              <li>{t('services.support.title')}</li>
              <li>{t('services.contracting.title')}</li>
              <li>{t('services.software.title')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex justify-center items-center">
            <p className="text-gray-300 text-center">
              © 2025 {t('company.name')}. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;