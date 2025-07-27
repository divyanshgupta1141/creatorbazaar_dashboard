import ImageWithFallback from './ImageWithFallback';
import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Shield, Award, Users, Clock } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-300 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-200 rounded-full animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold animate-pulse">
                  #1 Medical Center in the City
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Your Health is Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 block animate-gradient">
                  Top Priority
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                Experience world-class healthcare with our team of expert medical professionals. We provide comprehensive medical services with cutting-edge technology and compassionate care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold flex items-center justify-center space-x-3 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 hover:-translate-y-1">
                <span>Book Appointment</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"  />
              </button>
              
              <button className="group flex items-center space-x-3 text-white hover:text-orange-300 transition-all duration-300 font-semibold">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                  <Play size={20} className="ml-1"  />
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <Shield className="text-orange-400" size={32}  />
                </div>
                <div className="text-3xl font-bold text-white group-hover:text-orange-300 transition-colors">24/7</div>
                <div className="text-blue-200 text-sm">Emergency Care</div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <Award className="text-orange-400" size={32}  />
                </div>
                <div className="text-3xl font-bold text-white group-hover:text-orange-300 transition-colors">25+</div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <Users className="text-orange-400" size={32}  />
                </div>
                <div className="text-3xl font-bold text-white group-hover:text-orange-300 transition-colors">50+</div>
                <div className="text-blue-200 text-sm">Expert Doctors</div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <Clock className="text-orange-400" size={32}  />
                </div>
                <div className="text-3xl font-bold text-white group-hover:text-orange-300 transition-colors">15K+</div>
                <div className="text-blue-200 text-sm">Happy Patients</div>
              </div>
            </div>
          </div>

          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Diverse medical team providing compassionate patient care"
                  className="w-full h-[700px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-300 animate-float">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">24/7 Available</div>
                    <div className="text-sm text-gray-600">Emergency Services</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl animate-float-delayed">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="text-blue-600" size={24}  />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Award Winning</div>
                    <div className="text-sm text-gray-600">Healthcare Excellence</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl -z-10 opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full -z-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;