import { motion } from 'framer-motion';
import { Target, Eye, Heart, Globe, Award, Users, TrendingUp, Lightbulb, Building, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

const CeoVision = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const visionPillars = [
    {
      icon: Target,
      titleKey: 'ceoVision.pillars.excellence.title',
      descriptionKey: 'ceoVision.pillars.excellence.description'
    },
    {
      icon: Lightbulb,
      titleKey: 'ceoVision.pillars.innovation.title',
      descriptionKey: 'ceoVision.pillars.innovation.description'
    },
    {
      icon: Users,
      titleKey: 'ceoVision.pillars.people.title',
      descriptionKey: 'ceoVision.pillars.people.description'
    },
    {
      icon: Globe,
      titleKey: 'ceoVision.pillars.expansion.title',
      descriptionKey: 'ceoVision.pillars.expansion.description'
    }
  ];

  const achievements = [
    {
      icon: Building,
      titleKey: 'ceoVision.achievements.years.title',
      subtitleKey: 'ceoVision.achievements.years.subtitle',
      descriptionKey: 'ceoVision.achievements.years.description'
    },
    {
      icon: Users,
      titleKey: 'ceoVision.achievements.clients.title',
      subtitleKey: 'ceoVision.achievements.clients.subtitle',
      descriptionKey: 'ceoVision.achievements.clients.description'
    },
    {
      icon: Award,
      titleKey: 'ceoVision.achievements.divisions.title',
      subtitleKey: 'ceoVision.achievements.divisions.subtitle',
      descriptionKey: 'ceoVision.achievements.divisions.description'
    },
    {
      icon: TrendingUp,
      titleKey: 'ceoVision.achievements.growth.title',
      subtitleKey: 'ceoVision.achievements.growth.subtitle',
      descriptionKey: 'ceoVision.achievements.growth.description'
    }
  ];

  const coreValues = [
    {
      icon: Shield,
      titleKey: 'ceoVision.coreValues.integrity.title',
      descriptionKey: 'ceoVision.coreValues.integrity.description'
    },
    {
      icon: Award,
      titleKey: 'ceoVision.coreValues.excellence.title',
      descriptionKey: 'ceoVision.coreValues.excellence.description'
    },
    {
      icon: Users,
      titleKey: 'ceoVision.coreValues.partnership.title',
      descriptionKey: 'ceoVision.coreValues.partnership.description'
    },
    {
      icon: Lightbulb,
      titleKey: 'ceoVision.coreValues.innovation.title',
      descriptionKey: 'ceoVision.coreValues.innovation.description'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/Trucks.jpg')`
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            {t('ceoVision.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed"
          >
            {t('ceoVision.quote')}
          </motion.p>
        </div>
      </section>

      {/* Chairman's Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('ceoVision.chairmanVision.title')}
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto aspect-square">
                  <img 
                    src="/jassim.jpg"
                    alt="Chairman - Jassim Hassan Al Mohsin"
                    className="rounded-lg shadow-lg w-full h-full object-cover"
                  />
                </div>
                <div className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} bg-white bg-opacity-90 p-4 rounded-lg`}>
                  <h3 className="font-bold text-gray-900">{t('ceoVision.chairmanVision.name')}</h3>
                  <p className="text-gray-600">{t('ceoVision.chairmanVision.role')}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                {t('ceoVision.chairmanVision.messageTitle')}
              </h3>
              <div className="w-16 sm:w-24 h-1 bg-emerald-600 mb-4 sm:mb-6"></div>
              
              <div className="space-y-4 sm:space-y-6 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                <p>
                  {t('ceoVision.chairmanVision.vision')}
                </p>
                
                <p>
                  {t('ceoVision.chairmanVision.values')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('ceoVision.ceoVision.title')}
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto aspect-square">
                  <img 
                    src="/shakeelfazal.jpg"
                    alt="CEO - Shakeel Fazal"
                    className="rounded-lg shadow-lg w-full h-full object-cover"
                  />
                </div>
                <div className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} bg-white bg-opacity-90 p-4 rounded-lg`}>
                  <h3 className="font-bold text-gray-900">{t('ceoVision.name')}</h3>
                  <p className="text-gray-600">{t('ceoVision.role')}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                {t('ceoVision.messageTitle')}
              </h3>
              <div className="w-16 sm:w-24 h-1 bg-emerald-600 mb-4 sm:mb-6"></div>
              
              <div className="space-y-4 sm:space-y-6 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                <p>
                  {t('ceoVision.vision')}
                </p>
                
                <p>
                  {t('ceoVision.values')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('ceoVision.futureVision.title')}
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 sm:p-8"
            >
              <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                <Eye className="h-8 w-8 sm:h-12 sm:w-12 text-white mr-3 sm:mr-4 mt-1 sm:mt-0 flex-shrink-0" />
                <h3 className="text-lg sm:text-2xl font-bold text-white leading-tight">{t('ceoVision.futureVision.vision2030.title')}</h3>
              </div>
              <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
                {t('ceoVision.futureVision.vision2030.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 sm:p-8"
            >
              <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                <Heart className="h-8 w-8 sm:h-12 sm:w-12 text-white mr-3 sm:mr-4 mt-1 sm:mt-0 flex-shrink-0" />
                <h3 className="text-lg sm:text-2xl font-bold text-white leading-tight">{t('ceoVision.futureVision.commitment.title')}</h3>
              </div>
              <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
                {t('ceoVision.futureVision.commitment.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('ceoVision.strategicPillars.title')}
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('ceoVision.strategicPillars.description')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {visionPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <pillar.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{t(pillar.titleKey)}</h3>
                <p className="text-gray-600 text-center">{t(pillar.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
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
              {t('ceoVision.journey.title')}
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              {t('ceoVision.journey.description')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{t(achievement.titleKey)}</h3>
                <h4 className="text-emerald-600 font-semibold mb-2">{t(achievement.subtitleKey)}</h4>
                <p className="text-gray-600 text-sm">{t(achievement.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('ceoVision.coreValues.title')}
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
              {t('ceoVision.coreValues.description')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t(value.titleKey)}</h3>
                <p className="text-gray-300">{t(value.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('ceoVision.lookingForward.title')}
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-6">
                "{t('ceoVision.lookingForward.quote')}"
              </blockquote>
              
              <div className="border-t pt-6">
                <p className="font-bold text-gray-900 text-base sm:text-lg">{t('ceoVision.lookingForward.name')}</p>
                <p className="text-emerald-600">{t('ceoVision.lookingForward.role')}</p>
                <p className="text-gray-500 text-sm mt-2">{t('ceoVision.lookingForward.company')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CeoVision;