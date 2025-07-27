import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Users, Heart, GraduationCap, Search, Filter } from 'lucide-react';

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const jobOpenings = [
    {
      id: 1,
      title: 'Registered Nurse - ICU',
      department: 'Nursing',
      type: 'Full-time',
      location: 'Main Medical Center',
      salary: '$75,000 - $95,000',
      experience: '2+ years',
      description: 'Join our critical care team providing exceptional patient care in our state-of-the-art ICU. We are seeking a compassionate and skilled RN to work with critically ill patients.',
      requirements: [
        'BSN degree preferred',
        'Current RN license',
        'ICU experience required',
        'BLS and ACLS certification',
        'Strong communication skills'
      ],
      benefits: ['Health Insurance', 'Retirement Plan', 'Paid Time Off', 'Continuing Education'],
      posted: '2024-01-15'
    },
    {
      id: 2,
      title: 'Cardiologist',
      department: 'Cardiology',
      type: 'Full-time',
      location: 'Main Medical Center',
      salary: '$350,000 - $450,000',
      experience: '5+ years',
      description: 'Seeking a board-certified cardiologist to join our growing cardiology practice. Opportunity to work with cutting-edge technology and a collaborative team.',
      requirements: [
        'MD degree',
        'Board certification in Cardiology',
        'Valid medical license',
        'Fellowship training preferred',
        'Excellent patient care skills'
      ],
      benefits: ['Competitive Salary', 'Malpractice Insurance', 'CME Allowance', 'Research Opportunities'],
      posted: '2024-01-12'
    },
    {
      id: 3,
      title: 'Medical Assistant',
      department: 'Primary Care',
      type: 'Full-time',
      location: 'Downtown Clinic',
      salary: '$35,000 - $45,000',
      experience: '1+ years',
      description: 'Support our primary care physicians by assisting with patient care, administrative tasks, and clinical procedures in a fast-paced environment.',
      requirements: [
        'Medical Assistant certification',
        'Experience in clinical setting',
        'Strong organizational skills',
        'Computer proficiency',
        'Bilingual preferred'
      ],
      benefits: ['Health Insurance', 'Paid Time Off', 'Training Programs', 'Career Growth'],
      posted: '2024-01-10'
    },
    {
      id: 4,
      title: 'Physical Therapist',
      department: 'Rehabilitation',
      type: 'Full-time',
      location: 'Westside Family Center',
      salary: '$70,000 - $85,000',
      experience: '2+ years',
      description: 'Provide comprehensive physical therapy services to patients recovering from injuries, surgeries, and chronic conditions.',
      requirements: [
        'DPT degree',
        'State PT license',
        'Clinical experience',
        'Strong interpersonal skills',
        'Commitment to patient care'
      ],
      benefits: ['Health Insurance', 'Retirement Plan', 'Professional Development', 'Flexible Schedule'],
      posted: '2024-01-08'
    },
    {
      id: 5,
      title: 'Pharmacy Technician',
      department: 'Pharmacy',
      type: 'Part-time',
      location: 'Main Medical Center',
      salary: '$18 - $22/hour',
      experience: 'Entry level',
      description: 'Assist pharmacists in preparing and dispensing medications, maintaining inventory, and providing excellent customer service.',
      requirements: [
        'High school diploma',
        'Pharmacy technician certification',
        'Attention to detail',
        'Customer service skills',
        'Ability to work in team environment'
      ],
      benefits: ['Flexible Hours', 'Training Provided', 'Employee Discounts', 'Growth Opportunities'],
      posted: '2024-01-05'
    },
    {
      id: 6,
      title: 'Emergency Medicine Physician',
      department: 'Emergency',
      type: 'Full-time',
      location: 'Main Medical Center',
      salary: '$280,000 - $350,000',
      experience: '3+ years',
      description: 'Join our 24/7 emergency department team providing critical care to patients with urgent and life-threatening conditions.',
      requirements: [
        'MD degree',
        'Board certification in Emergency Medicine',
        'ER experience required',
        'ATLS certification',
        'Ability to work shifts'
      ],
      benefits: ['Competitive Salary', 'Shift Differentials', 'Malpractice Coverage', 'CME Support'],
      posted: '2024-01-03'
    }
  ];

  const departments = ['all', 'Nursing', 'Cardiology', 'Primary Care', 'Rehabilitation', 'Pharmacy', 'Emergency'];
  const jobTypes = ['all', 'Full-time', 'Part-time', 'Contract', 'Per Diem'];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesType = selectedType === 'all' || job.type === selectedType;
    return matchesSearch && matchesDepartment && matchesType;
  });

  const benefits = [
    {
      icon: Heart,
      title: 'Comprehensive Health Benefits',
      description: 'Medical, dental, and vision insurance for you and your family',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Market-leading salaries with performance-based bonuses',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: GraduationCap,
      title: 'Professional Development',
      description: 'Continuing education support and career advancement opportunities',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible scheduling and generous paid time off policies',
      color: 'from-purple-500 to-purple-600'
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
              Join Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 block">
                Healthcare Team
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Build a rewarding career in healthcare with BigMedix. We're looking for passionate professionals who share our commitment to exceptional patient care and medical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose BigMedix?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team that values innovation, collaboration, and making a real difference in patients' lives every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2">
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="text-white" size={36} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search job titles, keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300"
                />
              </div>
              
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 appearance-none"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>
                      {dept === 'all' ? 'All Departments' : dept}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 appearance-none"
                >
                  {jobTypes.map(type => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Job Types' : type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600">
                Showing {filteredJobs.length} of {jobOpenings.length} available positions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredJobs.length > 0 ? (
              <div className="space-y-6">
                {filteredJobs.map((job) => (
                  <div key={job.id} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1">
                    <div className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {job.title}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              job.type === 'Full-time' ? 'bg-green-100 text-green-600' :
                              job.type === 'Part-time' ? 'bg-blue-100 text-blue-600' :
                              'bg-purple-100 text-purple-600'
                            }`}>
                              {job.type}
                            </span>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                            <div className="flex items-center space-x-1">
                              <Briefcase size={16} />
                              <span>{job.department}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin size={16} />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <DollarSign size={16} />
                              <span>{job.salary}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users size={16} />
                              <span>{job.experience}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                            Apply Now
                          </button>
                          <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-all duration-300 font-semibold">
                            Learn More
                          </button>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {job.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">Requirements:</h4>
                          <ul className="space-y-1">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="flex items-center text-sm text-gray-600">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">Benefits:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.benefits.map((benefit, index) => (
                              <span key={index} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          Posted: {new Date(job.posted).toLocaleDateString()}
                        </div>
                        <div className="text-sm text-gray-500">
                          Job ID: {job.id.toString().padStart(4, '0')}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <Briefcase size={64} className="mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No positions found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search criteria or check back later for new openings.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedDepartment('all');
                    setSelectedType('all');
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

      {/* Employee Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Team Says</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our employees about their experience working at BigMedix and why they love being part of our healthcare family.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Johnson',
                position: 'Chief Cardiologist',
                image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg',
                quote: 'BigMedix provides an environment where I can focus on what I love most - caring for patients. The support from administration and the collaborative culture make this an exceptional place to practice medicine.'
              },
              {
                name: 'Maria Rodriguez, RN',
                position: 'ICU Nurse',
                image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg',
                quote: 'The professional development opportunities here are incredible. I\'ve grown so much in my career, and the team truly feels like family. We support each other through everything.'
              },
              {
                name: 'James Thompson',
                position: 'Physical Therapist',
                image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg',
                quote: 'Working at BigMedix means having access to the latest technology and treatment methods. I can provide the best possible care to my patients while continuing to learn and grow professionally.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="text-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-lg"
                  />
                  <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                  <div className="text-blue-600 font-medium">{testimonial.position}</div>
                </div>
                
                <blockquote className="text-gray-600 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined application process is designed to be simple and efficient while ensuring we find the best candidates for our team.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Apply Online',
                description: 'Submit your application and resume through our online portal for the position that interests you.'
              },
              {
                step: 2,
                title: 'Initial Review',
                description: 'Our HR team reviews your application and qualifications to ensure a good fit for the role.'
              },
              {
                step: 3,
                title: 'Interview Process',
                description: 'Participate in interviews with the hiring manager and team members to discuss your experience and goals.'
              },
              {
                step: 4,
                title: 'Welcome Aboard',
                description: 'Complete onboarding, orientation, and begin your rewarding career with BigMedix.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Career with Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our team of healthcare professionals dedicated to making a difference in patients' lives every day.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105">
              View All Openings
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300 font-semibold border border-white/30">
              Contact HR Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;