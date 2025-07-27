import React from 'react';
import { FileText, Download, Calendar, CreditCard, MapPin, Phone, Clock, Shield, Heart, Users } from 'lucide-react';

const PatientResources = () => {
  const resources = [
    {
      category: 'Forms & Documents',
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      items: [
        { name: 'New Patient Registration Form', type: 'PDF', size: '2.1 MB' },
        { name: 'Medical History Questionnaire', type: 'PDF', size: '1.8 MB' },
        { name: 'Insurance Information Form', type: 'PDF', size: '1.2 MB' },
        { name: 'HIPAA Privacy Notice', type: 'PDF', size: '3.4 MB' },
        { name: 'Financial Policy Agreement', type: 'PDF', size: '1.5 MB' },
        { name: 'Prescription Refill Request', type: 'PDF', size: '0.8 MB' }
      ]
    },
    {
      category: 'Health Education',
      icon: Heart,
      color: 'from-red-500 to-red-600',
      items: [
        { name: 'Heart Health Guidelines', type: 'PDF', size: '4.2 MB' },
        { name: 'Diabetes Management Guide', type: 'PDF', size: '3.8 MB' },
        { name: 'Nutrition and Wellness Tips', type: 'PDF', size: '2.9 MB' },
        { name: 'Exercise Safety Guidelines', type: 'PDF', size: '2.1 MB' },
        { name: 'Medication Safety Checklist', type: 'PDF', size: '1.6 MB' },
        { name: 'Preventive Care Schedule', type: 'PDF', size: '1.9 MB' }
      ]
    },
    {
      category: 'Preparation Guides',
      icon: Calendar,
      color: 'from-green-500 to-green-600',
      items: [
        { name: 'Pre-Surgery Instructions', type: 'PDF', size: '2.7 MB' },
        { name: 'Lab Test Preparation Guide', type: 'PDF', size: '1.4 MB' },
        { name: 'Imaging Study Instructions', type: 'PDF', size: '2.2 MB' },
        { name: 'Colonoscopy Prep Instructions', type: 'PDF', size: '3.1 MB' },
        { name: 'Cardiac Stress Test Prep', type: 'PDF', size: '1.8 MB' },
        { name: 'Post-Operative Care Guide', type: 'PDF', size: '2.5 MB' }
      ]
    }
  ];

  const quickLinks = [
    {
      title: 'Patient Portal',
      description: 'Access your medical records, test results, and communicate with your care team.',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      link: '#'
    },
    {
      title: 'Appointment Scheduling',
      description: 'Schedule, reschedule, or cancel appointments online at your convenience.',
      icon: Calendar,
      color: 'from-blue-500 to-blue-600',
      link: '#'
    },
    {
      title: 'Bill Pay',
      description: 'View and pay your medical bills securely online with multiple payment options.',
      icon: CreditCard,
      color: 'from-green-500 to-green-600',
      link: '#'
    },
    {
      title: 'Find a Doctor',
      description: 'Search our directory of specialists and primary care physicians.',
      icon: MapPin,
      color: 'from-orange-500 to-orange-600',
      link: '#'
    }
  ];

  const contactInfo = [
    {
      title: 'Main Hospital',
      phone: '+1 (555) 123-4567',
      hours: 'Open 24/7',
      address: '123 Medical Plaza, Health City, HC 12345',
      services: ['Emergency Care', 'Surgery', 'Inpatient Care']
    },
    {
      title: 'Outpatient Clinic',
      phone: '+1 (555) 234-5678',
      hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
      address: '456 Wellness Ave, Health City, HC 12346',
      services: ['Primary Care', 'Specialists', 'Lab Services']
    },
    {
      title: 'Women\'s Health Center',
      phone: '+1 (555) 345-6789',
      hours: 'Mon-Fri: 8AM-5PM',
      address: '789 Family Blvd, Health City, HC 12347',
      services: ['OB/GYN', 'Mammography', 'Women\'s Wellness']
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
              Patient
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 block">
                Resources
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Everything you need for a smooth healthcare experience - from forms and guides to appointment scheduling and bill payment.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Quick Access</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access the most commonly used patient services and tools with just one click.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-4"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${link.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Downloadable Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download important forms, educational materials, and preparation guides to help you prepare for your visit.
            </p>
          </div>

          <div className="space-y-12">
            {resources.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${category.color} p-8`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <category.icon className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{category.category}</h3>
                      <p className="text-white/80">Essential documents and information</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="group bg-gray-50 rounded-2xl p-6 hover:bg-blue-50 transition-all duration-300 cursor-pointer hover:-translate-y-1">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                              {item.name}
                            </h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="bg-gray-200 px-2 py-1 rounded text-xs font-medium">
                                {item.type}
                              </span>
                              <span>{item.size}</span>
                            </div>
                          </div>
                          <button className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                            <Download className="text-blue-600" size={20} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with the right department for your needs. Our staff is here to help you navigate your healthcare journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((location, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{location.title}</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-green-600" size={20} />
                    <div>
                      <div className="font-bold text-gray-900">{location.phone}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="text-blue-600" size={20} />
                    <div>
                      <div className="text-gray-600">{location.hours}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-orange-600 mt-1" size={20} />
                    <div>
                      <div className="text-gray-600">{location.address}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-sm font-medium text-gray-900 mb-3">Services Available:</div>
                  <div className="flex flex-wrap gap-2">
                    {location.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-white" size={36} />
            </div>
            <h2 className="text-4xl font-bold mb-6">Your Privacy & Security</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We are committed to protecting your personal health information and maintaining the highest standards of privacy and security.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'HIPAA Compliant',
                description: 'All patient information is protected according to HIPAA regulations and industry best practices.'
              },
              {
                title: 'Secure Systems',
                description: 'Our electronic health records and patient portal use advanced encryption and security measures.'
              },
              {
                title: 'Privacy Rights',
                description: 'You have the right to access, correct, and control how your health information is used and shared.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105">
              View Privacy Policy
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientResources;