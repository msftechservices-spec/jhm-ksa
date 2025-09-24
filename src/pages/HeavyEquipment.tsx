import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Clock, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

const HeavyEquipment = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const equipment = [
    {
      nameKey: 'services.heavyEquipment.equipment.mobileCranes.name',
      capacityKey: 'services.heavyEquipment.equipment.mobileCranes.capacity',
      descriptionKey: 'services.heavyEquipment.equipment.mobileCranes.description',
      image: 'https://www.uniccm.com/uploads/blogs/Mobile_Crane.webp',
      featuresKeys: [
        'services.heavyEquipment.equipment.mobileCranes.features.allTerrain',
        'services.heavyEquipment.equipment.mobileCranes.features.certifiedOperators',
        'services.heavyEquipment.equipment.mobileCranes.features.regularMaintenance',
        'services.heavyEquipment.equipment.mobileCranes.features.support24x7'
      ]
    },
    {
      nameKey: 'services.heavyEquipment.equipment.lowBedTrailers.name',
      capacityKey: 'services.heavyEquipment.equipment.lowBedTrailers.capacity',
      descriptionKey: 'services.heavyEquipment.equipment.lowBedTrailers.description',
      image: 'https://www.cnhtcgroup.com/wp-content/uploads/2024/09/3-Low-Bed-Semi-Trailer.jpg',
      featuresKeys: [
        'services.heavyEquipment.equipment.lowBedTrailers.features.multiAxle',
        'services.heavyEquipment.equipment.lowBedTrailers.features.hydraulicSteering',
        'services.heavyEquipment.equipment.lowBedTrailers.features.loadSecuring',
        'services.heavyEquipment.equipment.lowBedTrailers.features.gpsTracking'
      ]
    },
    {
      nameKey: 'services.heavyEquipment.equipment.flatbedTrucks.name',
      capacityKey: 'services.heavyEquipment.equipment.flatbedTrucks.capacity',
      descriptionKey: 'services.heavyEquipment.equipment.flatbedTrucks.description',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/348461804/KI/XL/ZC/197299806/40ftflatbed-trailer-hapl-jpg.jpg',
      featuresKeys: [
        'services.heavyEquipment.equipment.flatbedTrucks.features.variousSizes',
        'services.heavyEquipment.equipment.flatbedTrucks.features.quickLoading',
        'services.heavyEquipment.equipment.flatbedTrucks.features.flexibleScheduling',
        'services.heavyEquipment.equipment.flatbedTrucks.features.competitiveRates'
      ]
    },
    {
      nameKey: 'services.heavyEquipment.equipment.excavators.name',
      capacityKey: 'services.heavyEquipment.equipment.excavators.capacity',
      descriptionKey: 'services.heavyEquipment.equipment.excavators.description',
      image: 'https://worldwidemachinery.com/wp-content/uploads/2022/11/excavators.jpg',
      featuresKeys: [
        'services.heavyEquipment.equipment.excavators.features.latestTechnology',
        'services.heavyEquipment.equipment.excavators.features.fuelEfficient',
        'services.heavyEquipment.equipment.excavators.features.multipleAttachments',
        'services.heavyEquipment.equipment.excavators.features.skilledOperators'
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      titleKey: 'services.heavyEquipment.benefits.safety.title',
      descriptionKey: 'services.heavyEquipment.benefits.safety.description'
    },
    {
      icon: Clock,
      titleKey: 'services.heavyEquipment.benefits.availability.title',
      descriptionKey: 'services.heavyEquipment.benefits.availability.description'
    },
    {
      icon: Award,
      titleKey: 'services.heavyEquipment.benefits.operators.title',
      descriptionKey: 'services.heavyEquipment.benefits.operators.description'
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
            {t('services.heavyEquipment.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200"
          >
            {t('services.heavyEquipment.description')}
          </motion.p>
        </div>
      </section>

      {/* Equipment Grid */}
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
              {t('services.heavyEquipment.fleet.title')}
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('services.heavyEquipment.fleet.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {equipment.map((item, index) => (
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
                    src={item.image}
                    alt={t(item.nameKey)}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t(item.capacityKey)}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t(item.nameKey)}</h3>
                  <p className="text-gray-600 mb-4">{t(item.descriptionKey)}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {item.featuresKeys.map((featureKey, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                        {t(featureKey)}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center">
                    {t('services.heavyEquipment.requestQuote')}
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
              {t('services.heavyEquipment.benefits.title')}
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
              {t('services.heavyEquipment.cta.title')}
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              {t('services.heavyEquipment.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                {t('services.heavyEquipment.cta.getQuote')}
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-emerald-600 transition-colors duration-200">
                {t('services.heavyEquipment.cta.callNow')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeavyEquipment;