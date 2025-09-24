import React from 'react';
import { motion } from 'framer-motion';
import { Building, Shield, Clock, Award, CheckCircle, ArrowRight, Hammer, MapPin, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

const Contracting = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const projects = [
    {
      titleKey: 'services.contracting.services.infrastructure.title',
      descriptionKey: 'services.contracting.services.infrastructure.description',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      featuresKeys: [
        'services.contracting.services.infrastructure.features.roadConstruction',
        'services.contracting.services.infrastructure.features.bridgeEngineering', 
        'services.contracting.services.infrastructure.features.utilityInstallation',
        'services.contracting.services.infrastructure.features.sitePreparation'
      ]
    },
    {
      titleKey: 'services.contracting.services.commercial.title',
      descriptionKey: 'services.contracting.services.commercial.description',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      featuresKeys: [
        'services.contracting.services.commercial.features.officeBuildings',
        'services.contracting.services.commercial.features.warehouses',
        'services.contracting.services.commercial.features.manufacturingFacilities',
        'services.contracting.services.commercial.features.retailSpaces'
      ]
    },
    {
      titleKey: 'services.contracting.services.industrial.title',
      descriptionKey: 'services.contracting.services.industrial.description',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      featuresKeys: [
        'services.contracting.services.industrial.features.processingPlants',
        'services.contracting.services.industrial.features.storageFacilities',
        'services.contracting.services.industrial.features.heavyMachinery',
        'services.contracting.services.industrial.features.safetySystems'
      ]
    },
    {
      titleKey: 'services.contracting.services.renovation.title',
      descriptionKey: 'services.contracting.services.renovation.description',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      featuresKeys: [
        'services.contracting.services.renovation.features.buildingUpgrades',
        'services.contracting.services.renovation.features.structuralRepairs',
        'services.contracting.services.renovation.features.systemModernization',
        'services.contracting.services.renovation.features.preventiveMaintenance'
      ]
    }
  ];

  const capabilities = [
    {
      icon: Hammer,
      titleKey: 'services.contracting.capabilities.expertCraftsmanship.title',
      descriptionKey: 'services.contracting.capabilities.expertCraftsmanship.description'
    },
    {
      icon: MapPin,
      titleKey: 'services.contracting.capabilities.projectManagement.title',
      descriptionKey: 'services.contracting.capabilities.projectManagement.description'
    },
    {
      icon: Users,
      titleKey: 'services.contracting.capabilities.collaborativeApproach.title',
      descriptionKey: 'services.contracting.capabilities.collaborativeApproach.description'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {t('services.contracting.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200"
          >
            {t('services.contracting.description')}
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('services.contracting.servicesTitle')}
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('services.contracting.servicesDescription')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{t(project.titleKey)}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{t(project.descriptionKey)}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {project.featuresKeys.map((featureKey, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                        {t(featureKey)}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center">
                    {t('services.contracting.viewProjects')}
                    <ArrowRight className={`ml-2 h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('services.contracting.capabilitiesTitle')}
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <capability.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t(capability.titleKey)}</h3>
                <p className="text-gray-600">{t(capability.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', labelKey: 'services.contracting.stats.projectsCompleted' },
              { number: '20+', labelKey: 'services.contracting.stats.yearsExperience' },
              { number: '100%', labelKey: 'services.contracting.stats.clientSatisfaction' },
              { number: '24/7', labelKey: 'services.contracting.stats.supportAvailable' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-emerald-100">{t(stat.labelKey)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('services.contracting.processTitle')}
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: '01', titleKey: 'services.contracting.process.planning.title', descriptionKey: 'services.contracting.process.planning.description' },
              { step: '02', titleKey: 'services.contracting.process.permits.title', descriptionKey: 'services.contracting.process.permits.description' },
              { step: '03', titleKey: 'services.contracting.process.construction.title', descriptionKey: 'services.contracting.process.construction.description' },
              { step: '04', titleKey: 'services.contracting.process.qualityCheck.title', descriptionKey: 'services.contracting.process.qualityCheck.description' },
              { step: '05', titleKey: 'services.contracting.process.handover.title', descriptionKey: 'services.contracting.process.handover.description' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t(item.titleKey)}</h3>
                <p className="text-gray-600 text-sm">{t(item.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('services.contracting.cta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('services.contracting.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-200">
                {t('services.contracting.cta.getQuote')}
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors duration-200">
                {t('services.contracting.cta.callUs')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contracting;