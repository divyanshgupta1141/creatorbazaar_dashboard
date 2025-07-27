import React from 'react';
import { Shield, CreditCard, FileText, Phone, CheckCircle, AlertCircle, DollarSign, Calendar } from 'lucide-react';

const Insurance = () => {
  const insurancePlans = [
    {
      category: 'Government Plans',
      plans: [
        { name: 'Medicare', accepted: true, notes: 'All parts accepted' },
        { name: 'Medicaid', accepted: true, notes: 'State and federal programs' },
        { name: 'TRICARE', accepted: true, notes: 'Military health coverage' },
        { name: 'Veterans Affairs', accepted: true, notes: 'VA healthcare benefits' }
      ]
    },
    {
      category: 'Major Insurance Providers',
      plans: [
        { name: 'Blue Cross Blue Shield', accepted: true, notes: 'All plans accepted' },
        { name: 'Aetna', accepted: true, notes: 'Including Better Health plans' },
        { name: 'Cigna', accepted: true, notes: 'All product lines' },
        { name: 'UnitedHealthcare', accepted: true, notes: 'Including Oxford plans' },
        { name: 'Humana', accepted: true, notes: 'Medicare and commercial plans' },
        { name: 'Kaiser Permanente', accepted: false, notes: 'Emergency services only' }
      ]
    },
    {
      category: 'Regional & Specialty Plans',
      plans: [
        { name: 'Anthem', accepted: true, notes: 'All state plans' },
        { name: 'Molina Healthcare', accepted: true, notes: 'Medicaid and marketplace plans' },
        { name: 'WellCare', accepted: true, notes: 'Medicare and Medicaid plans' },
        { name: 'Centene', accepted: true, notes: 'Marketplace and Medicaid' }
      ]
    }
  ];

  const paymentOptions = [
    {
      title: 'Online Payment Portal',
      description: 'Pay your bills securely online 24/7 with our patient portal',
      features: ['Credit/Debit Cards', 'Bank Transfer', 'Payment Plans', 'Auto-Pay Setup'],
      icon: CreditCard,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Payment Plans',
      description: 'Flexible payment arrangements to fit your budget',
      features: ['0% Interest Options', 'Extended Terms', 'Low Monthly Payments', 'No Credit Check'],
      icon: Calendar,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Financial Assistance',
      description: 'Programs to help make healthcare affordable for everyone',
      features: ['Charity Care', 'Sliding Scale Fees', 'Hardship Programs', 'Medicaid Assistance'],
      icon: Shield,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'HSA/FSA Accepted',
      description: 'Use your health savings accounts for medical expenses',
      features: ['Health Savings Account', 'Flexible Spending Account', 'Direct Billing', 'Receipt Provided'],
      icon: DollarSign,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const billingProcess = [
    {
      step: 1,
      title: 'Insurance Verification',
      description: 'We verify your insurance coverage before your appointment to ensure you understand your benefits and any out-of-pocket costs.'
    },
    {
      step: 2,
      title: 'Service Delivery',
      description: 'You receive the medical care you need from our expert healthcare professionals in our state-of-the-art facilities.'
    },
    {
      step: 3,
      title: 'Insurance Billing',
      description: 'We submit claims directly to your insurance company and handle all the paperwork and follow-up communications.'
    },
    {
      step: 4,
      title: 'Patient Billing',
      description: 'You receive a clear, detailed bill for any remaining balance after insurance processing, with multiple payment options available.'
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
              Insurance &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 block">
                Payment
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We accept most major insurance plans and offer flexible payment options to make quality healthcare accessible and affordable for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Verification */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Insurance Verification</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Before your visit, we'll verify your insurance coverage to help you understand your benefits and any potential out-of-pocket costs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Phone className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-6">Call our insurance verification team at +1 (555) 123-4567 to check your coverage before your appointment.</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold">
                Call Now
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <FileText className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Online Form</h3>
              <p className="text-gray-600 mb-6">Submit your insurance information online and we'll verify your coverage and contact you with details.</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold">
                Submit Form
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bring Your Card</h3>
              <p className="text-gray-600 mb-6">Bring your insurance card to your appointment and we'll verify your coverage on the spot.</p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Accepted Insurance Plans */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Accepted Insurance Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with most major insurance providers to ensure you can access the care you need. If you don't see your plan listed, please contact us.
            </p>
          </div>

          <div className="space-y-8">
            {insurancePlans.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.plans.map((plan, planIndex) => (
                      <div key={planIndex} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors">
                        <div className="mt-1">
                          {plan.accepted ? (
                            <CheckCircle className="text-green-600" size={20} />
                          ) : (
                            <AlertCircle className="text-orange-500" size={20} />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 mb-1">{plan.name}</div>
                          <div className="text-sm text-gray-600">{plan.notes}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Don't See Your Plan?</h3>
              <p className="text-gray-600 mb-6">
                Insurance plans change frequently. If you don't see your specific plan listed, please contact our insurance verification team to confirm coverage.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold">
                Contact Insurance Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Payment Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer multiple convenient payment options and financial assistance programs to help make healthcare affordable for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paymentOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
                <div className={`bg-gradient-to-br ${option.color} p-6`}>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                    <option.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{option.title}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  
                  <ul className="space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="text-green-600 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Billing Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How Billing Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined billing process is designed to be transparent and hassle-free, so you can focus on your health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {billingProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                
                {index < billingProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-blue-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Assistance */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Financial Assistance Programs</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We believe everyone deserves access to quality healthcare. Our financial assistance programs help make care affordable for those who qualify.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Charity Care</h3>
              <p className="text-blue-100 mb-6">Free or reduced-cost care for qualifying patients based on income and family size.</p>
              <ul className="text-left text-blue-100 space-y-2">
                <li>• Income-based eligibility</li>
                <li>• Application assistance available</li>
                <li>• Covers emergency and essential care</li>
                <li>• No interest or fees</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Payment Plans</h3>
              <p className="text-blue-100 mb-6">Interest-free payment plans to help you manage medical expenses over time.</p>
              <ul className="text-left text-blue-100 space-y-2">
                <li>• 0% interest options</li>
                <li>• Flexible terms up to 24 months</li>
                <li>• No credit check required</li>
                <li>• Easy online setup</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Medicaid Assistance</h3>
              <p className="text-blue-100 mb-6">Help with Medicaid applications and understanding your benefits and coverage options.</p>
              <ul className="text-left text-blue-100 space-y-2">
                <li>• Application assistance</li>
                <li>• Eligibility screening</li>
                <li>• Benefits explanation</li>
                <li>• Ongoing support</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-colors font-bold shadow-xl hover:shadow-2xl transform hover:scale-105">
              Apply for Financial Assistance
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Questions About Billing or Insurance?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our patient financial services team is here to help you understand your insurance benefits and payment options.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-blue-50 transition-colors">
              <Phone className="text-blue-600 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-500">Mon-Fri: 8AM-5PM</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-blue-50 transition-colors">
              <FileText className="text-green-600 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">billing@bigmedix.com</p>
              <p className="text-sm text-gray-500">24-48 hour response</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-blue-50 transition-colors">
              <CreditCard className="text-purple-600 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">Online Portal</h3>
              <p className="text-gray-600">Pay bills online</p>
              <p className="text-sm text-gray-500">Available 24/7</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-blue-50 transition-colors">
              <Shield className="text-orange-600 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">In Person</h3>
              <p className="text-gray-600">Visit any location</p>
              <p className="text-sm text-gray-500">Business hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;