import ImageWithFallback from './ImageWithFallback';
import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Clock, MapPin, CheckCircle, Play } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, doctors: 0, patients: 0, locations: 0 });
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { years: 25, doctors: 50, patients: 15000, locations: 5 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        years: Math.floor(targets.years * progress),
        doctors: Math.floor(targets.doctors * progress),
        patients: Math.floor(targets.patients * progress),
        locations: Math.floor(targets.locations * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);
  };

  const stats = [
    { icon: Award, number: `${counters.years}+`, label: 'Years Experience', color: 'from-blue-500 to-blue-600' },
    { icon: Users, number: `${counters.doctors}+`, label: 'Expert Doctors', color: 'from-green-500 to-green-600' },
    { icon: Clock, number: `${counters.patients.toLocaleString()}+`, label: 'Happy Patients', color: 'from-orange-500 to-orange-600' },
    { icon: MapPin, number: `${counters.locations}`, label: 'Locations', color: 'from-purple-500 to-purple-600' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                  About BigMedix
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Trusted Healthcare
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 block">
                  Since 1998
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                For over two decades, BigMedix has been at the forefront of medical excellence, providing compassionate, comprehensive healthcare services to our community. Our commitment to innovation and patient-centered care has made us a trusted name in healthcare.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Advanced Medical Technology',
                  description: 'State-of-the-art equipment and cutting-edge medical technology for accurate diagnosis and effective treatment.'
                },
                {
                  title: 'Expert Medical Team',
                  description: 'Board-certified physicians and healthcare professionals dedicated to providing exceptional patient care.'
                },
                {
                  title: 'Patient-Centered Approach',
                  description: 'Personalized care plans tailored to each patient\'s unique needs and health goals.'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="text-white" size={16}     />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1">
                Learn More About Us
              </button>
              
              <button className="group flex items-center space-x-3 text-blue-600 hover:text-orange-500 transition-all duration-300 font-semibold px-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-orange-100 transition-all duration-300 group-hover:scale-110">
                  <Play size={20} className="ml-1"     />
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>
          </div>

          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-3xl shadow-xl group">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Diverse medical team collaborating on patient care"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
                <div className="relative overflow-hidden rounded-3xl shadow-xl group">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Modern medical facility with advanced equipment"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="relative overflow-hidden rounded-3xl shadow-xl group">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Healthcare professional providing compassionate patient care"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
                <div className="relative overflow-hidden rounded-3xl shadow-xl group">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="State-of-the-art medical equipment and technology"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-200">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <stat.icon className="text-white" size={36}     />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;