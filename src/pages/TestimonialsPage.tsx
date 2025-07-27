import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, ThumbsUp, Heart, User, Award, Shield } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';

const TestimonialsPage = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState('all');
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

    const elements = document.querySelectorAll('[data-animate="testimonial"]');
    elements.forEach(el => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Jennifer Martinez',
      condition: 'Cardiac Surgery Patient',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      testimonial: 'The cardiac team at BigMedix saved my life. From the initial consultation to post-surgery care, every step was handled with incredible professionalism and compassion. I cannot thank Dr. Johnson and her team enough for giving me a second chance at life.',
      date: '2024-01-15',
      treatment: 'Heart Surgery',
      category: 'Cardiology',
      verified: true,
      helpful: 45
    },
    {
      id: 2,
      name: 'David Thompson',
      condition: 'Orthopedic Surgery Patient',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      testimonial: 'After my knee replacement surgery with Dr. Wilson, I\'m back to playing tennis again! The entire process was smooth, and the rehabilitation team helped me recover faster than I ever expected. The care I received was exceptional.',
      date: '2024-01-12',
      treatment: 'Knee Replacement',
      category: 'Orthopedics',
      verified: true,
      helpful: 38
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      condition: 'Pediatric Care Parent',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
      testimonial: 'Dr. Davis has been our family pediatrician for 3 years. She\'s amazing with children and always takes the time to address all our concerns. The staff is friendly and the facility is always clean and welcoming. We couldn\'t ask for better care.',
      date: '2024-01-10',
      treatment: 'Pediatric Care',
      category: 'Pediatrics',
      verified: true,
      helpful: 52
    },
    {
      id: 4,
      name: 'Robert Kim',
      condition: 'Neurology Patient',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      testimonial: 'Dr. Chen\'s expertise in neurology is exceptional. He diagnosed my condition quickly and developed a treatment plan that has significantly improved my quality of life. The entire neurology team is outstanding and truly cares about their patients.',
      date: '2024-01-08',
      treatment: 'Neurological Treatment',
      category: 'Neurology',
      verified: true,
      helpful: 41
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      condition: 'Emergency Care Patient',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      testimonial: 'When I had a medical emergency at 2 AM, the BigMedix emergency team was incredible. They were fast, professional, and provided excellent care during a very scary time for my family. I\'m grateful for their expertise and compassion.',
      date: '2024-01-05',
      treatment: 'Emergency Care',
      category: 'Emergency',
      verified: true,
      helpful: 67
    },
    {
      id: 6,
      name: 'Michael Brown',
      condition: 'Preventive Care Patient',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      testimonial: 'The preventive care program helped me identify health risks early. The comprehensive screening and personalized wellness plan have made a huge difference in my overall health and energy levels. Highly recommend their services.',
      date: '2024-01-03',
      treatment: 'Preventive Care',
      category: 'Internal Medicine',
      verified: true,
      helpful: 29
    },
    {
      id: 7,
      name: 'Sarah Williams',
      condition: 'Cancer Survivor',
      rating: 5,
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
      testimonial: 'The oncology team at BigMedix provided exceptional care throughout my cancer treatment. Their expertise, combined with genuine compassion, helped me through the most challenging time of my life. I\'m now cancer-free thanks to their dedication.',
      date: '2024-01-01',
      treatment: 'Cancer Treatment',
      category: 'Oncology',
      verified: true,
      helpful: 89
    },
    {
      id: 8,
      name: 'James Wilson',
      condition: 'Diabetes Patient',
      rating: 5,
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg',
      testimonial: 'Dr. Martinez has been instrumental in helping me manage my diabetes. Her comprehensive approach and ongoing support have helped me maintain excellent blood sugar control. The diabetes education program was incredibly valuable.',
      date: '2023-12-28',
      treatment: 'Diabetes Management',
      category: 'Internal Medicine',
      verified: true,
      helpful: 34
    },
    {
      id: 9,
      name: 'Amanda Foster',
      condition: 'Maternity Patient',
      rating: 5,
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg',
      testimonial: 'The maternity team made my pregnancy and delivery experience wonderful. From prenatal care to postpartum support, every staff member was knowledgeable, caring, and professional. I felt safe and supported throughout the entire journey.',
      date: '2023-12-25',
      treatment: 'Maternity Care',
      category: 'Women\'s Health',
      verified: true,
      helpful: 76
    }
  ];

  const categories = ['all', 'Cardiology', 'Orthopedics', 'Pediatrics', 'Neurology', 'Emergency', 'Internal Medicine', 'Oncology', 'Women\'s Health'];

  const filteredTestimonials = testimonials.filter(testimonial => 
    selectedCategory === 'all' || testimonial.category === selectedCategory
  );

  const stats = [
    { icon: Star, number: '4.9', label: 'Average Rating', color: 'text-yellow-400' },
    { icon: User, number: '1,247', label: 'Patient Reviews', color: 'text-blue-400' },
    { icon: ThumbsUp, number: '98%', label: 'Satisfaction Rate', color: 'text-green-400' },
    { icon: Award, number: '24/7', label: 'Support Available', color: 'text-purple-400' }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Patient
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 block">
                Stories
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Real stories from real patients who have experienced exceptional care at BigMedix. Their testimonials speak to our commitment to excellence in healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <stat.icon className={stat.color} size={36} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600 group-hover:text-gray-800 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Filter by Specialty</h2>
            <p className="text-gray-600">See what patients are saying about specific departments and treatments.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                }`}
              >
                {category === 'all' ? 'All Departments' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                data-index={index}
                data-animate="testimonial"
                className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-4 ${
                  visibleItems.has(index.toString()) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <Quote className="text-blue-600 group-hover:text-blue-700 transition-colors" size={32} />
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 italic group-hover:text-gray-800 transition-colors">
                  "{testimonial.testimonial}"
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                    <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-blue-200 group-hover:border-blue-300 transition-colors"
                      />
                      {testimonial.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <Shield size={12} className="text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                        {testimonial.condition}
                      </div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors">
                        {new Date(testimonial.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-current group-hover:text-yellow-500 transition-colors"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {testimonial.treatment}
                  </span>
                  <div className="flex items-center space-x-2 text-gray-500 group-hover:text-gray-600 transition-colors">
                    <ThumbsUp size={16} />
                    <span className="text-sm">{testimonial.helpful} helpful</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Quote size={64} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No testimonials found</h3>
              <p className="text-gray-600">Try selecting a different specialty filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                Featured Success Story
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">A Life-Changing Experience</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <ImageWithFallback
                  src={testimonials[6].image}
                  alt={testimonials[6].name}
                  className="w-full h-96 object-cover rounded-3xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <Heart className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">Cancer Survivor</div>
                      <div className="text-sm text-gray-600">2 Years Cancer-Free</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-2xl text-gray-700 leading-relaxed italic">
                  "{testimonials[6].testimonial}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <ImageWithFallback
                    src={testimonials[6].image}
                    alt={testimonials[6].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-200"
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonials[6].name}</div>
                    <div className="text-blue-600 font-medium">{testimonials[6].condition}</div>
                    <div className="text-sm text-gray-600">{testimonials[6].treatment}</div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Treatment Highlights:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Comprehensive cancer care team</li>
                    <li>• Personalized treatment plan</li>
                    <li>• Ongoing support and monitoring</li>
                    <li>• 2 years cancer-free and counting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Share Your Experience</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Have you received care at BigMedix? We'd love to hear about your experience and how our team has helped you on your healthcare journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105">
              Write a Review
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300 font-semibold border border-white/30">
              Schedule Your Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;