import React, { useEffect, useRef, useState } from 'react';
import { Heart, Brain, Eye, Bone, Baby, Stethoscope, Activity, Shield, ArrowRight, CheckCircle, Clock, Award } from 'lucide-react';

const ServicesPage = () => {
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
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
      features: ['ECG & Echocardiography', 'Cardiac Surgery', 'Heart Disease Prevention', 'Cardiac Rehabilitation'],
      procedures: ['Angioplasty', 'Bypass Surgery', 'Pacemaker Implantation', 'Heart Valve Repair'],
      color: 'from-red-500 to-pink-500',
      specialists: 3,
      emergencyAvailable: true
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert neurological care for brain, spine, and nervous system disorders with cutting-edge technology.',
      image: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg',
      features: ['MRI & CT Imaging', 'Stroke Treatment', 'Memory Disorders', 'Epilepsy Management'],
      procedures: ['Brain Surgery', 'Spinal Procedures', 'Deep Brain Stimulation', 'Nerve Blocks'],
      color: 'from-purple-500 to-indigo-500',
      specialists: 2,
      emergencyAvailable: true
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to complex surgical procedures for optimal vision health.',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg',
      features: ['LASIK Surgery', 'Cataract Treatment', 'Retinal Disorders', 'Glaucoma Management'],
      procedures: ['Cataract Surgery', 'Retinal Detachment Repair', 'Corneal Transplant', 'Laser Eye Surgery'],
      color: 'from-blue-500 to-cyan-500',
      specialists: 2,
      emergencyAvailable: false
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Advanced bone, joint, and muscle care with minimally invasive surgical techniques and rehabilitation.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg',
      features: ['Joint Replacement', 'Sports Medicine', 'Fracture Treatment', 'Physical Therapy'],
      procedures: ['Hip Replacement', 'Knee Replacement', 'Arthroscopy', 'Spine Surgery'],
      color: 'from-green-500 to-emerald-500',
      specialists: 4,
      emergencyAvailable: true
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents in a child-friendly environment.',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg',
      features: ['Well-Child Visits', 'Immunizations', 'Growth Monitoring', 'Developmental Assessments'],
      procedures: ['Pediatric Surgery', 'Allergy Testing', 'Behavioral Therapy', 'Nutrition Counseling'],
      color: 'from-yellow-500 to-orange-500',
      specialists: 3,
      emergencyAvailable: true
    },
    {
      icon: Stethoscope,
      title: 'Internal Medicine',
      description: 'Comprehensive adult healthcare focusing on prevention, diagnosis, and treatment of internal diseases.',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg',
      features: ['Annual Check-ups', 'Chronic Disease Management', 'Health Screenings', 'Preventive Care'],
      procedures: ['Endoscopy', 'Colonoscopy', 'Biopsy', 'Chronic Care Management'],
      color: 'from-teal-500 to-blue-500',
      specialists: 5,
      emergencyAvailable: false
    },
    {
      icon: Activity,
      title: 'Emergency Care',
      description: '24/7 emergency medical services with rapid response times and state-of-the-art trauma care.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
      features: ['Trauma Center', 'Critical Care Unit', 'Ambulance Services', 'Emergency Surgery'],
      procedures: ['Emergency Surgery', 'Trauma Care', 'Critical Care', 'Life Support'],
      color: 'from-red-500 to-orange-500',
      specialists: 8,
      emergencyAvailable: true
    },
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Proactive healthcare programs designed to prevent illness and maintain optimal health and wellness.',
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg',
      features: ['Health Screenings', 'Wellness Programs', 'Lifestyle Counseling', 'Vaccination Services'],
      procedures: ['Health Assessments', 'Cancer Screenings', 'Cardiac Risk Assessment', 'Wellness Coaching'],
      color: 'from-indigo-500 to-purple-500',
      specialists: 6,
      emergencyAvailable: false
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Medical
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 block">
                Services
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive healthcare solutions across multiple specialties with state-of-the-art technology and expert medical professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Specialties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Specialists Available:</span>
                    <span className="font-bold text-blue-600">{service.specialists}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Emergency Care:</span>
                    <span className={`font-bold ${service.emergencyAvailable ? 'text-green-600' : 'text-gray-400'}`}>
                      {service.emergencyAvailable ? 'Available' : 'Not Available'}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.slice(0, 4).map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center`}>
                      <service.icon className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                      <div className="text-blue-600 font-medium">Comprehensive Care</div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <CheckCircle className="text-green-600 mr-2" size={20} />
                        Services Offered
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <Activity className="text-blue-600 mr-2" size={20} />
                        Procedures
                      </h4>
                      <ul className="space-y-2">
                        {service.procedures.map((procedure, procedureIndex) => (
                          <li key={procedureIndex} className="flex items-center text-gray-600">
                            <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                            {procedure}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105">
                      Schedule Consultation
                    </button>
                    <button className="flex items-center justify-center space-x-2 text-blue-600 hover:text-orange-500 transition-colors font-semibold px-8 py-4 border-2 border-blue-600 rounded-full hover:border-orange-500">
                      <span>View Specialists</span>
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Stats Card */}
                  <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center`}>
                        <Award className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">{service.specialists} Specialists</div>
                        <div className="text-sm text-gray-600">Expert Care Team</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services Highlight */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Activity className="text-white" size={36} />
            </div>
            <h2 className="text-4xl font-bold mb-6">24/7 Emergency Care</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Our emergency department is staffed around the clock with board-certified emergency physicians and trauma specialists, ready to provide immediate, life-saving care when you need it most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Rapid Response',
                description: 'Average triage time under 15 minutes with immediate assessment of critical cases.'
              },
              {
                icon: Heart,
                title: 'Advanced Life Support',
                description: 'State-of-the-art equipment and protocols for cardiac emergencies and trauma care.'
              },
              {
                icon: Shield,
                title: 'Trauma Center',
                description: 'Level II trauma center with specialized teams for complex emergency cases.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-red-100 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="text-3xl font-bold mb-2">Emergency Hotline</div>
            <div className="text-2xl text-red-200 mb-6">+1 (555) 911-HELP</div>
            <button className="bg-white text-red-600 px-8 py-4 rounded-full hover:bg-red-50 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105">
              Emergency Services Info
            </button>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Insurance & Payment Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We accept most major insurance plans and offer flexible payment options to make quality healthcare accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Medicare & Medicaid',
              'Blue Cross Blue Shield',
              'Aetna Health Plans',
              'Cigna Healthcare',
              'UnitedHealthcare',
              'Humana Insurance',
              'Kaiser Permanente',
              'Self-Pay Options'
            ].map((insurance, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-blue-50 transition-colors duration-300 group">
                <Shield className="text-blue-600 mx-auto mb-4 group-hover:text-blue-700 transition-colors" size={32} />
                <div className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors">{insurance}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105">
              Verify Insurance Coverage
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;