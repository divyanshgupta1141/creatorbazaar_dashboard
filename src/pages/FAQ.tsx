import React, { useState } from 'react';
import { ChevronDown, Search, Phone, Mail, Calendar, CreditCard, Shield, Users } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqCategories = [
    { id: 'all', name: 'All Questions', icon: Users },
    { id: 'appointments', name: 'Appointments', icon: Calendar },
    { id: 'insurance', name: 'Insurance & Billing', icon: CreditCard },
    { id: 'services', name: 'Medical Services', icon: Shield },
    { id: 'general', name: 'General Information', icon: Phone }
  ];

  const faqs = [
    {
      category: 'appointments',
      question: 'How do I schedule an appointment?',
      answer: 'You can schedule an appointment in several ways: call us at +1 (555) 123-4567, use our online patient portal, visit any of our locations in person, or use our mobile app. Our scheduling team is available Monday through Friday from 8 AM to 6 PM.'
    },
    {
      category: 'appointments',
      question: 'How far in advance should I schedule my appointment?',
      answer: 'For routine appointments, we recommend scheduling 1-2 weeks in advance. For specialist consultations, allow 2-4 weeks. Urgent care appointments are often available same-day, and our emergency department is always open for immediate needs.'
    },
    {
      category: 'appointments',
      question: 'What is your cancellation policy?',
      answer: 'We require at least 24 hours notice for appointment cancellations to avoid a cancellation fee. You can cancel through our patient portal, by calling our office, or using our mobile app. Same-day cancellations may result in a $50 fee.'
    },
    {
      category: 'appointments',
      question: 'Can I request a specific doctor?',
      answer: 'Yes, you can request a specific doctor when scheduling your appointment. However, availability may vary based on the doctor\'s schedule and specialty. Our scheduling team will work with you to find the earliest available appointment with your preferred physician.'
    },
    {
      category: 'insurance',
      question: 'What insurance plans do you accept?',
      answer: 'We accept most major insurance plans including Medicare, Medicaid, Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and Humana. We also accept HSA and FSA payments. Please call our insurance verification team to confirm your specific plan coverage.'
    },
    {
      category: 'insurance',
      question: 'How do I verify my insurance coverage?',
      answer: 'You can verify your insurance coverage by calling our insurance verification team at +1 (555) 123-4567, submitting your information through our online form, or bringing your insurance card to your appointment. We recommend verifying coverage before your visit.'
    },
    {
      category: 'insurance',
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, checks, credit cards (Visa, MasterCard, American Express, Discover), debit cards, HSA/FSA cards, and offer payment plans. You can also pay online through our patient portal or set up automatic payments.'
    },
    {
      category: 'insurance',
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer interest-free payment plans for qualifying patients. Plans can extend up to 24 months with no credit check required. Contact our financial counselors to discuss options that fit your budget and financial situation.'
    },
    {
      category: 'insurance',
      question: 'What if I don\'t have insurance?',
      answer: 'We offer several options for uninsured patients including self-pay discounts, charity care programs, payment plans, and assistance with Medicaid applications. Our financial counselors can help you explore all available options to make care affordable.'
    },
    {
      category: 'services',
      question: 'What medical services do you provide?',
      answer: 'We provide comprehensive medical services including primary care, cardiology, neurology, orthopedics, pediatrics, women\'s health, emergency care, surgery, diagnostic imaging, laboratory services, and preventive care. Visit our services page for a complete list.'
    },
    {
      category: 'services',
      question: 'Do you provide emergency care?',
      answer: 'Yes, our Main Medical Center has a 24/7 emergency department staffed by board-certified emergency physicians. We are a Level II trauma center equipped to handle all types of medical emergencies, from minor injuries to life-threatening conditions.'
    },
    {
      category: 'services',
      question: 'Do you offer telemedicine appointments?',
      answer: 'Yes, we offer telemedicine appointments for many types of consultations, follow-up visits, and routine care. Telemedicine appointments can be scheduled through our patient portal and are available for both new and existing patients when clinically appropriate.'
    },
    {
      category: 'services',
      question: 'What should I bring to my appointment?',
      answer: 'Please bring a valid photo ID, your insurance card, a list of current medications, any relevant medical records or test results from other providers, and a list of questions or concerns you want to discuss with your doctor.'
    },
    {
      category: 'general',
      question: 'What are your hours of operation?',
      answer: 'Our Main Medical Center emergency department is open 24/7. Outpatient clinics are generally open Monday-Friday 8 AM to 6 PM, Saturday 9 AM to 4 PM. Specific department hours may vary. Please call the specific location or department for exact hours.'
    },
    {
      category: 'general',
      question: 'Where are you located?',
      answer: 'We have three convenient locations: Main Medical Center at 123 Medical Plaza, Downtown Clinic at 456 Downtown Ave, and Westside Family Center at 789 Westside Blvd. All locations offer free or low-cost parking and are accessible by public transportation.'
    },
    {
      category: 'general',
      question: 'How can I access my medical records?',
      answer: 'You can access your medical records through our secure patient portal online, request copies by contacting our medical records department, or pick up copies in person with proper identification. Most records are available immediately through the portal.'
    },
    {
      category: 'general',
      question: 'Do you have parking available?',
      answer: 'Yes, all our locations offer parking. The Main Medical Center and Westside Family Center have free parking lots. The Downtown Clinic has a paid parking garage adjacent to the building with discounted rates for patients.'
    },
    {
      category: 'general',
      question: 'Are your facilities accessible?',
      answer: 'Yes, all our facilities are fully ADA compliant with wheelchair accessibility, accessible parking spaces, elevators, accessible restrooms, and assistive listening devices. We also provide interpreter services when needed.'
    },
    {
      category: 'general',
      question: 'How do I get a prescription refill?',
      answer: 'You can request prescription refills through our patient portal, by calling your doctor\'s office, or by having your pharmacy contact us directly. Allow 24-48 hours for processing. For urgent medication needs, contact your doctor\'s office directly.'
    },
    {
      category: 'general',
      question: 'Do you offer interpreter services?',
      answer: 'Yes, we provide professional interpreter services for patients who need language assistance. Services are available in person, by phone, or video for over 200 languages. Please let us know your language needs when scheduling your appointment.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Frequently Asked
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 block">
                Questions
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Find quick answers to common questions about our services, appointments, insurance, and policies. Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 text-lg"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <category.icon size={16} />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                      <ChevronDown 
                        className={`text-blue-600 transition-transform duration-300 ${
                          openItems.has(index) ? 'rotate-180' : ''
                        }`} 
                        size={24} 
                      />
                    </button>
                    
                    {openItems.has(index) && (
                      <div className="px-8 pb-6">
                        <div className="border-t border-gray-200 pt-6">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <Search size={64} className="mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No questions found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search terms or category filter.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team is here to help. Contact us through any of these convenient methods for personalized assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-6">Speak directly with our patient services team</p>
              <div className="text-blue-600 font-bold text-lg mb-2">+1 (555) 123-4567</div>
              <div className="text-gray-500 text-sm">Mon-Fri: 8AM-6PM</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-6">Send us your questions via email</p>
              <div className="text-green-600 font-bold text-lg mb-2">info@bigmedix.com</div>
              <div className="text-gray-500 text-sm">24-48 hour response</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Patient Portal</h3>
              <p className="text-gray-600 mb-6">Message your care team securely online</p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors font-semibold">
                Login Portal
              </button>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule Visit</h3>
              <p className="text-gray-600 mb-6">Book an appointment to discuss in person</p>
              <button className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-colors font-semibold">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Popular Help Topics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick links to our most frequently requested information and resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Patient Portal Guide',
                description: 'Learn how to access your medical records, test results, and communicate with your care team online.',
                icon: Users,
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Insurance Verification',
                description: 'Understand how to verify your insurance coverage and what to expect for out-of-pocket costs.',
                icon: Shield,
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Appointment Preparation',
                description: 'Get ready for your visit with our comprehensive preparation guide and checklist.',
                icon: Calendar,
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Payment Options',
                description: 'Explore our flexible payment plans, financial assistance programs, and billing policies.',
                icon: CreditCard,
                color: 'from-orange-500 to-orange-600'
              },
              {
                title: 'Emergency Services',
                description: 'Learn about our 24/7 emergency care, when to visit the ER, and what to expect.',
                icon: Phone,
                color: 'from-red-500 to-red-600'
              },
              {
                title: 'Medical Records',
                description: 'Find out how to request, access, and transfer your medical records and test results.',
                icon: Mail,
                color: 'from-indigo-500 to-indigo-600'
              }
            ].map((topic, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                <div className={`w-12 h-12 bg-gradient-to-br ${topic.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <topic.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;