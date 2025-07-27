import React from 'react';
import ImageWithFallback from '../components/ImageWithFallback';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Heart, Bookmark } from 'lucide-react';

const BlogPost = () => {

  // This would typically come from an API or CMS
  const post = {
    title: 'Heart Health: Prevention Tips for a Stronger Cardiovascular System',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: `
      <p>Cardiovascular disease remains one of the leading causes of death worldwide, but the good news is that many heart conditions are preventable through lifestyle modifications and proactive healthcare management. As a cardiologist with over 15 years of experience, I've seen firsthand how simple changes can dramatically improve heart health outcomes.</p>

      <h2>Understanding Your Heart Health</h2>
      <p>Your heart is a remarkable muscle that beats approximately 100,000 times per day, pumping blood throughout your body to deliver oxygen and nutrients to every cell. Maintaining optimal heart health requires attention to several key factors that work together to support cardiovascular function.</p>

      <h2>Essential Prevention Strategies</h2>
      
      <h3>1. Maintain a Heart-Healthy Diet</h3>
      <p>Nutrition plays a crucial role in heart health. Focus on incorporating these foods into your daily diet:</p>
      <ul>
        <li><strong>Omega-3 rich fish:</strong> Salmon, mackerel, and sardines help reduce inflammation and lower triglycerides</li>
        <li><strong>Leafy greens:</strong> Spinach, kale, and arugula provide nitrates that support healthy blood pressure</li>
        <li><strong>Whole grains:</strong> Oats, quinoa, and brown rice help manage cholesterol levels</li>
        <li><strong>Nuts and seeds:</strong> Almonds, walnuts, and flaxseeds provide healthy fats and fiber</li>
        <li><strong>Berries:</strong> Blueberries, strawberries, and blackberries are rich in antioxidants</li>
      </ul>

      <h3>2. Stay Physically Active</h3>
      <p>Regular exercise strengthens your heart muscle and improves circulation. Aim for at least 150 minutes of moderate-intensity aerobic activity per week, such as:</p>
      <ul>
        <li>Brisk walking or hiking</li>
        <li>Swimming or water aerobics</li>
        <li>Cycling or stationary bike</li>
        <li>Dancing or group fitness classes</li>
      </ul>

      <h3>3. Manage Stress Effectively</h3>
      <p>Chronic stress can contribute to heart disease by raising blood pressure and promoting unhealthy behaviors. Incorporate stress-reduction techniques such as:</p>
      <ul>
        <li>Meditation and mindfulness practices</li>
        <li>Deep breathing exercises</li>
        <li>Regular yoga or tai chi</li>
        <li>Adequate sleep (7-9 hours per night)</li>
        <li>Social connections and support systems</li>
      </ul>

      <h2>Know Your Numbers</h2>
      <p>Regular monitoring of key health metrics is essential for early detection and prevention:</p>
      <ul>
        <li><strong>Blood Pressure:</strong> Aim for less than 120/80 mmHg</li>
        <li><strong>Cholesterol:</strong> Total cholesterol should be less than 200 mg/dL</li>
        <li><strong>Blood Sugar:</strong> Fasting glucose should be less than 100 mg/dL</li>
        <li><strong>Body Mass Index (BMI):</strong> Maintain a healthy weight range</li>
      </ul>

      <h2>When to Seek Medical Attention</h2>
      <p>Don't ignore warning signs that may indicate heart problems. Seek immediate medical attention if you experience:</p>
      <ul>
        <li>Chest pain or discomfort</li>
        <li>Shortness of breath</li>
        <li>Unusual fatigue</li>
        <li>Dizziness or lightheadedness</li>
        <li>Rapid or irregular heartbeat</li>
      </ul>

      <h2>The Role of Preventive Care</h2>
      <p>Regular check-ups with your healthcare provider are crucial for maintaining heart health. During these visits, we can:</p>
      <ul>
        <li>Monitor your cardiovascular risk factors</li>
        <li>Adjust medications as needed</li>
        <li>Provide personalized lifestyle recommendations</li>
        <li>Screen for early signs of heart disease</li>
        <li>Coordinate care with other specialists if necessary</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Taking care of your heart is one of the most important investments you can make in your long-term health and quality of life. By implementing these evidence-based strategies and working closely with your healthcare team, you can significantly reduce your risk of cardiovascular disease and enjoy a healthier, more active life.</p>

      <p>Remember, it's never too early or too late to start taking better care of your heart. Small changes can lead to significant improvements in your cardiovascular health over time.</p>
    `
  };

  return (
    <div className="pt-32">
      {/* Back Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User size={20} />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={20} />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={20} />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center space-x-4 mb-8 pb-8 border-b">
              <button className="flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors">
                <Heart size={18} />
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-50 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
                <Bookmark size={18} />
                <span>Save</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-50 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
                <Share2 size={18} />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <ImageWithFallback
                src={post.image}
                alt={post.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-start space-x-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt={post.author}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{post.author}</h3>
                  <div className="text-blue-600 font-medium mb-4">Chief Cardiologist at BigMedix</div>
                  <p className="text-gray-600 leading-relaxed">
                    Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in cardiovascular medicine. 
                    She specializes in preventive cardiology and has published numerous research papers on heart disease prevention. 
                    Dr. Johnson is passionate about patient education and helping individuals achieve optimal heart health through 
                    lifestyle modifications and evidence-based medical care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Understanding Cholesterol: Good vs Bad',
                  excerpt: 'Learn about different types of cholesterol and how to maintain healthy levels through diet and lifestyle.',
                  image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                  slug: 'understanding-cholesterol'
                },
                {
                  title: 'Exercise Guidelines for Heart Patients',
                  excerpt: 'Safe and effective exercise recommendations for individuals with existing heart conditions.',
                  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                  slug: 'exercise-guidelines-heart-patients'
                }
              ].map((article, index) => (
                <Link
                  key={index}
                  to={`/blog/${article.slug}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;