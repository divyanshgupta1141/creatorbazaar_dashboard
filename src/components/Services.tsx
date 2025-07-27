import React, { useEffect, useRef, useState } from 'react';
import { Heart, Brain, Eye, Bone, Baby, Stethoscope, Activity, Shield, ArrowRight } from 'lucide-react';

const Services = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate="service"]');
    elements.forEach(el => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care with advanced diagnostic and treatment options for all cardiovascular conditions.',
      features: ['ECG & Echocardiography', 'Cardiac Surgery', 'Heart Disease Prevention'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert neurological care for brain, spine, and nervous system disorders with cutting-edge technology.',
      features: ['MRI & CT Imaging', 'Stroke Treatment', 'Memory Disorders'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to complex surgical procedures for optimal vision health.',
      features: ['LASIK Surgery', 'Cataract Treatment', 'Retinal Disorders'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Advanced bone, joint, and muscle care with minimally invasive surgical techniques and rehabilitation.',
      features: ['Joint Replacement', 'Sports Medicine', 'Fracture Treatment'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents in a child-friendly environment.',
      features: ['Well-Child Visits', 'Immunizations', 'Growth Monitoring'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Stethoscope,
      title: 'Internal Medicine',
      description: 'Comprehensive adult healthcare focusing on prevention, diagnosis, and treatment of internal diseases.',
      features: ['Annual Check-ups', 'Chronic Disease Management', 'Health Screenings'],
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: Activity,
      title: 'Emergency Care',
      description: '24/7 emergency medical services with rapid response times and state-of-the-art trauma care.',
      features: ['Trauma Center', 'Critical Care Unit', 'Ambulance Services'],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Proactive healthcare programs designed to prevent illness and maintain optimal health and wellness.',
      features: ['Health Screenings', 'Wellness Programs', 'Lifestyle Counseling'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
              Our Medical Services
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive Healthcare
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 block">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide world-class medical services across multiple specialties, ensuring you receive the best possible care for all your health needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              data-animate="service"
              className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer transform hover:-translate-y-4 ${
                visibleItems.has(index.toString()) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <service.icon className="text-white" size={36} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 group-hover:scale-125 transition-transform`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="flex items-center space-x-2 text-blue-600 font-semibold group-hover:text-orange-500 transition-colors">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;