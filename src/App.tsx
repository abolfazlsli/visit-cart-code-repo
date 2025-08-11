import React from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin, Twitter, Globe, User, Briefcase, Heart } from 'lucide-react';

function App() {
  const contactInfo = {
    name: "Alex Johnson",
    title: "Senior Product Designer",
    company: "Creative Solutions Inc.",
    phone: "+1 (555) 123-4567",
    email: "alex.johnson@email.com",
    address: "123 Design Street, San Francisco, CA 94102",
    bio: "Passionate product designer with 8+ years of experience creating user-centered digital experiences. I specialize in turning complex problems into simple, elegant solutions."
  };

  const socialLinks = [
    { icon: Linkedin, url: "https://linkedin.com/in/alexjohnson", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Instagram, url: "https://instagram.com/alexjohnson", label: "Instagram", color: "hover:text-pink-500" },
    { icon: Twitter, url: "https://twitter.com/alexjohnson", label: "Twitter", color: "hover:text-blue-400" },
    { icon: Globe, url: "https://alexjohnson.design", label: "Portfolio", color: "hover:text-green-500" }
  ];

  const handleContactClick = (type: string, value: string) => {
    switch (type) {
      case 'phone':
        window.open(`tel:${value}`);
        break;
      case 'email':
        window.open(`mailto:${value}`);
        break;
      case 'address':
        window.open(`https://maps.google.com/?q=${encodeURIComponent(value)}`);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-lg">
        {/* Header Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-6 border border-white/20">
          <div className="text-center">
            {/* Profile Photo */}
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 border-4 border-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Business Logo */}
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl shadow-lg">
                <User className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Name and Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{contactInfo.name}</h1>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <h2 className="text-lg font-semibold text-blue-600">{contactInfo.title}</h2>
            </div>
            <p className="text-gray-600 font-medium">{contactInfo.company}</p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 mb-6 border border-white/20">
          <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" />
            About Me
          </h3>
          <p className="text-gray-700 leading-relaxed">{contactInfo.bio}</p>
        </div>

        {/* Contact Information */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 mb-6 border border-white/20">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Get In Touch</h3>
          
          <div className="space-y-4">
            {/* Phone */}
            <button
              onClick={() => handleContactClick('phone', contactInfo.phone)}
              className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl shadow-md">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Call Me</p>
                <p className="text-gray-600 text-sm">{contactInfo.phone}</p>
              </div>
            </button>

            {/* Email */}
            <button
              onClick={() => handleContactClick('email', contactInfo.email)}
              className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-2xl hover:from-teal-100 hover:to-teal-200 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-xl shadow-md">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Email Me</p>
                <p className="text-gray-600 text-sm">{contactInfo.email}</p>
              </div>
            </button>

            {/* Address */}
            <button
              onClick={() => handleContactClick('address', contactInfo.address)}
              className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-2xl hover:from-indigo-100 hover:to-indigo-200 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-xl shadow-md">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Find Me</p>
                <p className="text-gray-600 text-sm">{contactInfo.address}</p>
              </div>
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 mb-8 border border-white/20">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Me</h3>
          
          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.05] active:scale-[0.95] ${social.color}`}
                >
                  <IconComponent className="w-6 h-6" />
                  <span className="font-medium">{social.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-white/30">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-gray-600 text-sm font-medium">Available for new opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;