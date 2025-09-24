import { motion } from 'framer-motion';
import { Code, Shield, Clock, Award, CheckCircle, Database, Globe, Smartphone, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

const SoftwareSolutions = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const solutions = [
    {
      icon: Globe,
      titleKey: 'services.softwareSolutions.solutions.webDevelopment.title',
      descriptionKey: 'services.softwareSolutions.solutions.webDevelopment.description',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      featuresKeys: [
        'services.softwareSolutions.solutions.webDevelopment.features.reactNextjs',
        'services.softwareSolutions.solutions.webDevelopment.features.nodejsBackend',
        'services.softwareSolutions.solutions.webDevelopment.features.cloudDeployment',
        'services.softwareSolutions.solutions.webDevelopment.features.seoOptimization'
      ]
    },
    {
      icon: Smartphone,
      titleKey: 'services.softwareSolutions.solutions.mobileApplications.title',
      descriptionKey: 'services.softwareSolutions.solutions.mobileApplications.description',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      featuresKeys: [
        'services.softwareSolutions.solutions.mobileApplications.features.reactNative',
        'services.softwareSolutions.solutions.mobileApplications.features.flutterDevelopment',
        'services.softwareSolutions.solutions.mobileApplications.features.nativeIosAndroid',
        'services.softwareSolutions.solutions.mobileApplications.features.appStoreDeployment'
      ]
    },
    {
      icon: Database,
      titleKey: 'services.softwareSolutions.solutions.enterpriseSystems.title',
      descriptionKey: 'services.softwareSolutions.solutions.enterpriseSystems.description',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      featuresKeys: [
        'services.softwareSolutions.solutions.enterpriseSystems.features.erpSystems',
        'services.softwareSolutions.solutions.enterpriseSystems.features.crmSolutions',
        'services.softwareSolutions.solutions.enterpriseSystems.features.inventoryManagement',
        'services.softwareSolutions.solutions.enterpriseSystems.features.businessIntelligence'
      ]
    },
    {
      icon: Settings,
      titleKey: 'services.softwareSolutions.solutions.systemIntegration.title',
      descriptionKey: 'services.softwareSolutions.solutions.systemIntegration.description',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      featuresKeys: [
        'services.softwareSolutions.solutions.systemIntegration.features.apiDevelopment',
        'services.softwareSolutions.solutions.systemIntegration.features.databaseMigration',
        'services.softwareSolutions.solutions.systemIntegration.features.legacySystemUpdates',
        'services.softwareSolutions.solutions.systemIntegration.features.cloudIntegration'
      ]
    }
  ];

  const technologies = [
    { name: 'React', logo: '⚛️' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'Python', logo: '🐍' },
    { name: 'Java', logo: '☕' },
    { name: 'AWS', logo: '☁️' },
    { name: 'Docker', logo: '🐳' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'PostgreSQL', logo: '🐘' }
  ];

  const benefits = [
    {
      icon: Shield,
      titleKey: 'services.softwareSolutions.benefits.secureReliable.title',
      descriptionKey: 'services.softwareSolutions.benefits.secureReliable.description'
    },
    {
      icon: Clock,
      titleKey: 'services.softwareSolutions.benefits.agileDevelopment.title',
      descriptionKey: 'services.softwareSolutions.benefits.agileDevelopment.description'
    },
    {
      icon: Award,
      titleKey: 'services.softwareSolutions.benefits.expertTeam.title',
      descriptionKey: 'services.softwareSolutions.benefits.expertTeam.description'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {t('services.software.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200"
          >
            {t('services.software.description')}
          </motion.p>
        </div>
      </section>

      {/* Solutions Grid */}
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
              {t('services.softwareSolutions.solutionsTitle')}
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('services.softwareSolutions.solutionsDescription')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                  <solution.icon className="h-24 w-24 text-white" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t(solution.titleKey)}</h3>
                  <p className="text-gray-600 mb-4">{t(solution.descriptionKey)}</p>
                  
                  <ul className="space-y-2">
                    {solution.featuresKeys.map((featureKey, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                        {t(featureKey)}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
              {t('services.softwareSolutions.technologies.title')}
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('services.softwareSolutions.technologies.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-3">{tech.logo}</div>
                <h3 className="font-semibold text-gray-900">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              {t('services.softwareSolutions.benefitsTitle')}
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
                className="text-center p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
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

      {/* Development Process */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('services.softwareSolutions.processTitle')}
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: '01', titleKey: 'services.softwareSolutions.process.discovery.title', descriptionKey: 'services.softwareSolutions.process.discovery.description' },
              { step: '02', titleKey: 'services.softwareSolutions.process.design.title', descriptionKey: 'services.softwareSolutions.process.design.description' },
              { step: '03', titleKey: 'services.softwareSolutions.process.development.title', descriptionKey: 'services.softwareSolutions.process.development.description' },
              { step: '04', titleKey: 'services.softwareSolutions.process.testing.title', descriptionKey: 'services.softwareSolutions.process.testing.description' },
              { step: '05', titleKey: 'services.softwareSolutions.process.deployment.title', descriptionKey: 'services.softwareSolutions.process.deployment.description' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="w-16 h-16 bg-white text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{t(item.titleKey)}</h3>
                <p className="text-emerald-100 text-sm">{t(item.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('services.softwareSolutions.cta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('services.softwareSolutions.cta.description')}
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <div className="flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-emerald-600 mr-3" />
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">{t('services.softwareSolutions.cta.managerName')}</h3>
                  <p className="text-gray-600">{t('services.softwareSolutions.cta.managerTitle')}</p>
                </div>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>📞 +966 507 734 137</p>
                <p>📧 software@jhmksa.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareSolutions;