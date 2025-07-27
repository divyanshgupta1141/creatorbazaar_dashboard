import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    department: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Contact Us
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 block">
              Today
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to take the next step in your healthcare journey? Get in touch with us to schedule an appointment or learn more about our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Phone</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Call us for appointments or emergencies</p>
              <div className="space-y-2">
                <div className="font-bold text-blue-600 text-lg">+1 (555) 123-4567</div>
                <div className="text-sm text-gray-500">Emergency: +1 (555) 911-HELP</div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Email</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Send us your questions or concerns</p>
              <div className="space-y-2">
                <div className="font-bold text-green-600 text-lg">info@bigmedix.com</div>
                <div className="text-sm text-gray-500">appointments@bigmedix.com</div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">Location</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Visit us at our main medical center</p>
              <div className="font-bold text-orange-600 text-lg">123 Medical Plaza, Health City, HC 12345</div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-8">
                <Calendar className="text-blue-600 mr-4" size={32} />
                <h3 className="text-3xl font-bold text-gray-900">Book an Appointment</h3>
              </div>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 group-hover:border-gray-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 group-hover:border-gray-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 group-hover:border-gray-300"
                      placeholder="Enter your email address"
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
                    <label className="block text-sm font-bold text-gray-700 mb-3">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 group-hover:border-gray-300"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3">Department</label>
                    <select 
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 group-hover:border-gray-300"
                    >
                      <option value="">Select Department</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="neurology">Neurology</option>
                      <option value="ophthalmology">Ophthalmology</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="internal-medicine">Internal Medicine</option>
                      <option value="emergency">Emergency Care</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Message</label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 resize-none group-hover:border-gray-300"
                    placeholder="Tell us about your symptoms or concerns..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
                >
                  <Send size={24} />
                  <span>Book Appointment</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Hours and Additional Info */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl">
            <div className="flex items-center mb-6">
              <Clock className="mr-4" size={32} />
              <h3 className="text-2xl font-bold">Working Hours</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Monday - Friday</span>
                <span className="font-bold">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Saturday</span>
                <span className="font-bold">9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Sunday</span>
                <span className="font-bold">Emergency Only</span>
              </div>
              <div className="pt-4 border-t border-blue-400">
                <span className="font-bold text-orange-300">24/7 Emergency Care Available</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white shadow-xl">
            <div className="flex items-center mb-6">
              <MessageCircle className="mr-4" size={32} />
              <h3 className="text-2xl font-bold">Quick Response</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span>Average response time: 15 minutes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span>Emergency calls answered immediately</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span>Online chat support available</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white shadow-xl">
            <div className="flex items-center mb-6">
              <Award className="mr-4" size={32} />
              <h3 className="text-2xl font-bold">Why Choose Us</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span>Board-certified physicians</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span>State-of-the-art facilities</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span>Personalized care plans</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;