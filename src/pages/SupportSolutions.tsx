import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Clock, Award, CheckCircle, ArrowRight, Wrench, HardHat, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

const SupportSolutions = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const services = [
    {
      icon: Users,
      titleKey: 'services.supportSolutions.services.skilledManpower.title',
      descriptionKey: 'services.supportSolutions.services.skilledManpower.description',
      image: 'https://callonservices.in/wp-content/uploads/2023/10/labour2.jpg',
      featuresKeys: [
        'services.supportSolutions.services.skilledManpower.features.certifiedTechnicians',
        'services.supportSolutions.services.skilledManpower.features.multiSkilledWorkers',
        'services.supportSolutions.services.skilledManpower.features.projectManagers',
        'services.supportSolutions.services.skilledManpower.features.safetySupervisors'
      ]
    },
    {
      icon: Wrench,
      titleKey: 'services.supportSolutions.services.technicalSupport.title',
      descriptionKey: 'services.supportSolutions.services.technicalSupport.description',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      featuresKeys: [
        'services.supportSolutions.services.technicalSupport.features.equipmentMaintenance',
        'services.supportSolutions.services.technicalSupport.features.troubleshooting',
        'services.supportSolutions.services.technicalSupport.features.repairServices',
        'services.supportSolutions.services.technicalSupport.features.preventiveCare'
      ]
    },
    {
      icon: HardHat,
      titleKey: 'services.supportSolutions.services.safetyManagement.title',
      descriptionKey: 'services.supportSolutions.services.safetyManagement.description',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      featuresKeys: [
        'services.supportSolutions.services.safetyManagement.features.safetyAudits',
        'services.supportSolutions.services.safetyManagement.features.riskAssessments',
        'services.supportSolutions.services.safetyManagement.features.trainingPrograms',
        'services.supportSolutions.services.safetyManagement.features.complianceMonitoring'
      ]
    },
    {
      icon: BookOpen,
      titleKey: 'services.supportSolutions.services.trainingPrograms.title',
      descriptionKey: 'services.supportSolutions.services.trainingPrograms.description',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      featuresKeys: [
        'services.supportSolutions.services.trainingPrograms.features.equipmentOperation',
        'services.supportSolutions.services.trainingPrograms.features.safetyProtocols',
        'services.supportSolutions.services.trainingPrograms.features.technicalSkills',
        'services.supportSolutions.services.trainingPrograms.features.certificationCourses'
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      titleKey: 'services.supportSolutions.benefits.qualityAssurance.title',
      descriptionKey: 'services.supportSolutions.benefits.qualityAssurance.description'
    },
    {
      icon: Clock,
      titleKey: 'services.supportSolutions.benefits.flexibleScheduling.title',
      descriptionKey: 'services.supportSolutions.benefits.flexibleScheduling.description'
    },
    {
      icon: Award,
      titleKey: 'services.supportSolutions.benefits.industryExpertise.title',
      descriptionKey: 'services.supportSolutions.benefits.industryExpertise.description'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {t('services.supportSolutions.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200"
          >
            {t('services.supportSolutions.description')}
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
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
              {t('services.supportSolutions.servicesTitle')}
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('services.supportSolutions.servicesDescription')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
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
                    src={service.image}
                    alt={t(service.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white p-2 rounded-lg">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t(service.titleKey)}</h3>
                  <p className="text-gray-600 mb-4">{t(service.descriptionKey)}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.featuresKeys.map((featureKey, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                        {t(featureKey)}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center">
                    {t('services.supportSolutions.learnMore')}
                    <ArrowRight className={`ml-2 h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              {t('services.supportSolutions.benefitsTitle')}
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t(benefit.titleKey)}</h3>
                <p className="text-gray-600">{t(benefit.descriptionKey)}</p>
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
              {t('services.supportSolutions.processTitle')}
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', titleKey: 'services.supportSolutions.process.assessment.title', descriptionKey: 'services.supportSolutions.process.assessment.description' },
              { step: '02', titleKey: 'services.supportSolutions.process.planning.title', descriptionKey: 'services.supportSolutions.process.planning.description' },
              { step: '03', titleKey: 'services.supportSolutions.process.deployment.title', descriptionKey: 'services.supportSolutions.process.deployment.description' },
              { step: '04', titleKey: 'services.supportSolutions.process.monitoring.title', descriptionKey: 'services.supportSolutions.process.monitoring.description' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t(item.titleKey)}</h3>
                <p className="text-gray-600">{t(item.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('services.supportSolutions.cta.title')}
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              {t('services.supportSolutions.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                {t('services.supportSolutions.cta.requestConsultation')}
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-emerald-600 transition-colors duration-200">
                {t('services.supportSolutions.cta.callUs')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SupportSolutions;