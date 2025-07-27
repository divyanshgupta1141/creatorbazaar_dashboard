import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Clock, MapPin, CheckCircle, Heart, Shield, Target, Eye } from 'lucide-react';

const AboutPage = () => {
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

  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Chief Medical Officer',
      specialty: 'Cardiology',
      experience: '15 years',
      education: 'Harvard Medical School',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Dr. Johnson leads our medical team with expertise in cardiovascular medicine and a passion for patient-centered care.'
    },
    {
      name: 'Dr. Michael Chen',
      position: 'Director of Neurology',
      specialty: 'Neurology',
      experience: '12 years',
      education: 'Johns Hopkins University',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Specializing in neurological disorders, Dr. Chen brings cutting-edge treatment approaches to complex cases.'
    },
    {
      name: 'Dr. Emily Davis',
      position: 'Head of Pediatrics',
      specialty: 'Pediatrics',
      experience: '10 years',
      education: 'Stanford Medical School',
      image: 'https://images.unsplash.com/photo-1594824475317-d3c2b8b7b3b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Dr. Davis is dedicated to providing comprehensive healthcare for children in a compassionate environment.'
    },
    {
      name: 'Dr. Robert Wilson',
      position: 'Chief of Surgery',
      specialty: 'Orthopedic Surgery',
      experience: '18 years',
      education: 'Mayo Clinic',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'With extensive surgical experience, Dr. Wilson specializes in complex orthopedic procedures and joint replacements.'
    }
  ];

  const coreValues = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and dignity, ensuring they feel heard and valued throughout their healthcare journey.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Patient safety is our top priority. We maintain the highest standards of medical practice and continuously improve our safety protocols.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from medical procedures to patient experience, setting the standard for quality healthcare.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'We embrace cutting-edge medical technology and innovative treatment approaches to provide the best possible outcomes for our patients.',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const locations = [
    {
      name: 'Main Medical Center',
      address: '123 Medical Plaza, Health City, HC 12345',
      phone: '+1 (555) 123-4567',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      services: ['Emergency Care', 'Surgery', 'Cardiology', 'Neurology']
    },
    {
      name: 'Downtown Clinic',
      address: '456 Downtown Ave, Health City, HC 12346',
      phone: '+1 (555) 234-5678',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      services: ['Family Medicine', 'Pediatrics', 'Preventive Care']
    },
    {
      name: 'Westside Family Center',
      address: '789 Westside Blvd, Health City, HC 12347',
      phone: '+1 (555) 345-6789',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      services: ['Women\'s Health', 'Obstetrics', 'Gynecology']
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
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 block">
                BigMedix
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Dedicated to providing exceptional healthcare services with compassion, innovation, and excellence for over 25 years.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  To provide world-class healthcare services that combine medical excellence with compassionate care, 
                  ensuring every patient receives personalized treatment in a safe, comfortable environment.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Since 1998, BigMedix has been at the forefront of medical innovation, continuously expanding our 
                  services and expertise to meet the evolving healthcare needs of our community.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  'Patient-centered approach to healthcare delivery',
                  'Continuous investment in medical technology',
                  'Commitment to medical education and research',
                  'Community health and wellness programs'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-blue-600" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern medical facility with advanced healthcare technology"
                className="w-full h-96 object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our commitment to exceptional healthcare.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2">
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced medical professionals who lead BigMedix with expertise, dedication, and vision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.position}`}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">{member.specialty}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-2">{member.position}</div>
                  <div className="text-sm text-gray-600 mb-3">
                    {member.experience} • {member.education}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, number: `${counters.years}+`, label: 'Years of Excellence', color: 'text-yellow-400' },
              { icon: Users, number: `${counters.doctors}+`, label: 'Medical Professionals', color: 'text-green-400' },
              { icon: Heart, number: `${counters.patients.toLocaleString()}+`, label: 'Patients Served', color: 'text-red-400' },
              { icon: MapPin, number: `${counters.locations}`, label: 'Convenient Locations', color: 'text-orange-400' }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <stat.icon className={stat.color} size={36} />
                </div>
                <div className="text-4xl font-bold mb-2 group-hover:text-orange-300 transition-colors">
                  {stat.number}
                </div>
                <div className="text-blue-100 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conveniently located throughout the city to serve you better with comprehensive healthcare services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={location.image}
                    alt={`${location.name} - healthcare facility`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{location.name}</h3>
                  <div className="flex items-start space-x-2 mb-3">
                    <MapPin className="text-blue-600 mt-1" size={16} />
                    <span className="text-gray-600">{location.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="text-green-600" size={16} />
                    <span className="text-gray-600">{location.phone}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-900">Services Available:</div>
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service, serviceIndex) => (
                        <span key={serviceIndex} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Certifications & Affiliations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is recognized by leading healthcare organizations and accreditation bodies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Joint Commission Accredited',
              'American Hospital Association',
              'Healthcare Financial Management Association',
              'American Medical Association',
              'National Association of Healthcare Quality',
              'Commission on Accreditation of Medical Transport Systems',
              'American Organization for Nursing Leadership',
              'Healthcare Information and Management Systems Society'
            ].map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-blue-50 transition-colors duration-300 group">
                <Award className="text-blue-600 mx-auto mb-4 group-hover:text-blue-700 transition-colors" size={32} />
                <div className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;