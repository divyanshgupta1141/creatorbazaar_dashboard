import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, Send, MessageCircle, Navigation, Car, Bus } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    department: '',
    message: '',
    contactMethod: 'email'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const locations = [
    {
      name: 'Main Medical Center',
      address: '123 Medical Plaza, Health City, HC 12345',
      phone: '+1 (555) 123-4567',
      fax: '+1 (555) 123-4568',
      email: 'main@bigmedix.com',
      hours: {
        weekdays: '24/7 Emergency Care',
        weekend: '24/7 Emergency Care'
      },
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
      services: ['Emergency Care', 'Surgery', 'Cardiology', 'Neurology', 'Oncology'],
      parking: 'Free parking available',
      publicTransport: 'Metro Line 1, Bus Routes 15, 22, 45'
    },
    {
      name: 'Downtown Clinic',
      address: '456 Downtown Ave, Health City, HC 12346',
      phone: '+1 (555) 234-5678',
      fax: '+1 (555) 234-5679',
      email: 'downtown@bigmedix.com',
      hours: {
        weekdays: 'Mon-Fri: 8AM-6PM',
        weekend: 'Sat: 9AM-4PM, Sun: Closed'
      },
      image: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg',
      services: ['Family Medicine', 'Pediatrics', 'Preventive Care', 'Lab Services'],
      parking: 'Paid parking garage adjacent',
      publicTransport: 'Metro Line 2, Bus Routes 8, 12, 33'
    },
    {
      name: 'Westside Family Center',
      address: '789 Westside Blvd, Health City, HC 12347',
      phone: '+1 (555) 345-6789',
      fax: '+1 (555) 345-6790',
      email: 'westside@bigmedix.com',
      hours: {
        weekdays: 'Mon-Fri: 8AM-5PM',
        weekend: 'Sat: 9AM-2PM, Sun: Closed'
      },
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
      services: ['Women\'s Health', 'Obstetrics', 'Gynecology', 'Mammography'],
      parking: 'Free parking lot',
      publicTransport: 'Bus Routes 7, 19, 28'
    }
  ];

  const departments = [
    { name: 'Cardiology', phone: '+1 (555) 123-4567', ext: '101' },
    { name: 'Neurology', phone: '+1 (555) 123-4567', ext: '102' },
    { name: 'Orthopedics', phone: '+1 (555) 123-4567', ext: '103' },
    { name: 'Pediatrics', phone: '+1 (555) 123-4567', ext: '104' },
    { name: 'Emergency', phone: '+1 (555) 911-HELP', ext: 'Direct' },
    { name: 'Women\'s Health', phone: '+1 (555) 345-6789', ext: 'Direct' }
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
              Contact
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 block">
                BigMedix
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for appointments, questions, or emergency care. We're here to help you 24/7 with all your healthcare needs.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Emergency Care</h3>
              <p className="text-red-100 mb-6">24/7 emergency medical services</p>
              <div className="text-3xl font-bold mb-2">+1 (555) 911-HELP</div>
              <div className="text-red-200">Available 24/7</div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Appointments</h3>
              <p className="text-blue-100 mb-6">Schedule your visit online or by phone</p>
              <div className="text-3xl font-bold mb-2">+1 (555) 123-4567</div>
              <div className="text-blue-200">Mon-Fri: 8AM-6PM</div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Patient Portal</h3>
              <p className="text-green-100 mb-6">Access records and message your doctor</p>
              <button className="bg-white text-green-600 px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors">
                Login Portal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-8">
                <Send className="text-blue-600 mr-4" size={32} />
                <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
              </div>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 group-hover:border-gray-300"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 group-hover:border-gray-300"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 group-hover:border-gray-300"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 group-hover:border-gray-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3">Department</label>
                    <select 
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 group-hover:border-gray-300"
                    >
                      <option value="">Select Department</option>
                      <option value="general">General Inquiry</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="neurology">Neurology</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="emergency">Emergency Care</option>
                      <option value="billing">Billing</option>
                    </select>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3">Preferred Contact Method</label>
                    <select 
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 group-hover:border-gray-300"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="text">Text Message</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Message *</label>
                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 resize-none group-hover:border-gray-300"
                    placeholder="Please describe your inquiry or concern..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  <Send size={24} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Phone</h4>
                      <p className="text-gray-600 mb-2">Main: +1 (555) 123-4567</p>
                      <p className="text-red-600 font-medium">Emergency: +1 (555) 911-HELP</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Mail className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                      <p className="text-gray-600 mb-1">info@bigmedix.com</p>
                      <p className="text-gray-600">appointments@bigmedix.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <MapPin className="text-orange-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Main Location</h4>
                      <p className="text-gray-600">123 Medical Plaza<br />Health City, HC 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Clock className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Hours</h4>
                      <p className="text-gray-600 mb-1">Mon-Fri: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600 mb-1">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-red-600 font-medium">Emergency: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Directory */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Department Directory</h3>
                
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors">
                      <div>
                        <div className="font-medium text-gray-900">{dept.name}</div>
                        <div className="text-sm text-gray-600">Ext. {dept.ext}</div>
                      </div>
                      <div className="text-blue-600 font-medium">{dept.phone}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at any of our convenient locations throughout the city. Each facility offers specialized services and expert care.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{location.name}</h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-blue-600 mt-1" size={20} />
                    <div>
                      <div className="font-medium text-gray-900">Address</div>
                      <div className="text-gray-600">{location.address}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="text-green-600 mt-1" size={20} />
                    <div>
                      <div className="font-medium text-gray-900">Contact</div>
                      <div className="text-gray-600">{location.phone}</div>
                      <div className="text-gray-600">{location.email}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="text-orange-600 mt-1" size={20} />
                    <div>
                      <div className="font-medium text-gray-900">Hours</div>
                      <div className="text-gray-600">{location.hours.weekdays}</div>
                      <div className="text-gray-600">{location.hours.weekend}</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Car className="text-purple-600 mt-1" size={20} />
                    <div>
                      <div className="font-medium text-gray-900">Parking</div>
                      <div className="text-gray-600">{location.parking}</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Bus className="text-indigo-600 mt-1" size={20} />
                    <div>
                      <div className="font-medium text-gray-900">Public Transport</div>
                      <div className="text-gray-600 text-sm">{location.publicTransport}</div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-sm font-medium text-gray-900 mb-3">Services Available:</div>
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service, serviceIndex) => (
                        <span key={serviceIndex} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2">
                    <Navigation size={18} />
                    <span>Get Directions</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our services, appointments, and policies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "How do I schedule an appointment?",
                answer: "You can schedule an appointment by calling us at +1 (555) 123-4567, using our online patient portal, or visiting any of our locations in person."
              },
              {
                question: "What insurance plans do you accept?",
                answer: "We accept most major insurance plans including Medicare, Medicaid, Blue Cross Blue Shield, Aetna, Cigna, and UnitedHealthcare. Please call to verify your specific plan."
              },
              {
                question: "What should I bring to my appointment?",
                answer: "Please bring a valid ID, insurance card, list of current medications, and any relevant medical records or test results from other providers."
              },
              {
                question: "Do you offer emergency services?",
                answer: "Yes, our Main Medical Center provides 24/7 emergency care with a full trauma center and emergency department staffed by board-certified emergency physicians."
              },
              {
                question: "How can I access my medical records?",
                answer: "You can access your medical records through our secure patient portal online, or request copies by contacting our medical records department."
              },
              {
                question: "What is your cancellation policy?",
                answer: "We require at least 24 hours notice for appointment cancellations. Late cancellations or no-shows may result in a fee."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;