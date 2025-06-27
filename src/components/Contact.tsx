// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission here
//     setIsSubmitted(true);
//     setTimeout(() => setIsSubmitted(false), 3000);
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: 'Info',
//       details: 'info@edgeble.ai',
//       subtitle: ''
//     },
//     {
//       icon: Mail,
//       title: 'Sales',
//       details: 'sales@edgeble.ai',
//       subtitle: ''
//     },
//     {
//       icon: Phone,
//       title: 'Phone',
//       details: '+91 91000 90959',
//       subtitle: ''
//     },
//     {
//       icon: MapPin,
//       title: 'Address',
//       details: 'T-Hub, 1/C, 83/1, Panmaktha, Raidurgam, Knowledge City Rd, Hyderabad',
//       subtitle: 'Telangana - 500081'
//     },
//     {
//       icon: Clock,
//       title: 'Business Hours',
//       details: 'Mon - Fri: 9:00 AM - 6:00 PM IST',
//       subtitle: 'Weekend: Emergency Support'
//     }
//   ];

//   return (
//     <section id="contact" className="py-24 bg-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Get in <span className="text-white">Touch</span>
//           </h2>
//           <p className="text-xl text-white max-w-3xl mx-auto">
//             Ready to accelerate your AI journey? Our experts are here to help you find the perfect edge AI solution.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <div className="bg-white/5 rounded-2xl shadow-lg p-8 border border-white/10">
//             <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
//             {isSubmitted && (
//               <div className="mb-6 p-4 bg-white/10 border border-white/20 rounded-xl flex items-center">
//                 <CheckCircle className="w-5 h-5 text-white mr-3" />
//                 <span className="text-white">Thank you! Your message has been sent successfully.</span>
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
//                     placeholder="Your full name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
//                     placeholder="your@email.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
//                   Company
//                 </label>
//                 <input
//                   type="text"
//                   id="company"
//                   name="company"
//                   value={formData.company}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
//                   placeholder="Your company name"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
//                   Subject *
//                 </label>
//                 <select
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
//                 >
//                   <option value="">Select a subject</option>
//                   <option value="product-inquiry">Product Inquiry</option>
//                   <option value="custom-solution">Custom Solution</option>
//                   <option value="partnership">Partnership</option>
//                   <option value="support">Support</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
//                   Message *
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={6}
//                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 resize-none"
//                   placeholder="Tell us about your project and requirements..."
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-white text-black hover:bg-white/90 py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center group"
//               >
//                 Send Message
//                 <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </form>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div className="bg-white/5 rounded-2xl shadow-lg p-8 border border-white/10">
//               <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
//               <div className="space-y-6">
//                 {contactInfo.map((info, index) => {
//                   const IconComponent = info.icon;
//                   return (
//                     <div key={index} className="flex items-start">
//                       <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
//                         <IconComponent className="w-6 h-6 text-black" />
//                       </div>
//                       <div>
//                         <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
//                         <p className="text-white">{info.details}</p>
//                         <p className="text-white/70 text-sm">{info.subtitle}</p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Map Placeholder */}
//             <div className="bg-white/5 rounded-2xl shadow-lg p-8 border border-white/10">
//               <h3 className="text-2xl font-bold text-white mb-6">Our Location</h3>
//               <div className="bg-white/10 rounded-xl h-64 flex items-center justify-center">
//                 <div className="text-center">
//                   <MapPin className="w-12 h-12 text-white mx-auto mb-3" />
//                   <p className="text-white">Interactive map would be integrated here</p>
//                   <p className="text-sm text-white/70">Hyderabad, Telangana, India</p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


// MODIFIED CODE 2

// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission here
//     setIsSubmitted(true);
//     setTimeout(() => setIsSubmitted(false), 3000);
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: 'Info',
//       details: 'info@edgeble.ai',
//       subtitle: ''
//     },
//     {
//       icon: Mail,
//       title: 'Sales',
//       details: 'sales@edgeble.ai',
//       subtitle: ''
//     },
//     {
//       icon: Phone,
//       title: 'Phone',
//       details: '+91 91000 90959',
//       subtitle: ''
//     },
//     {
//       icon: MapPin,
//       title: 'Address',
//       details: 'T-Hub, 1/C, 83/1, Panmaktha, Raidurgam, Knowledge City Rd, Hyderabad',
//       subtitle: 'Telangana - 500081'
//     },
//     {
//       icon: Clock,
//       title: 'Business Hours',
//       details: 'Mon - Fri: 9:00 AM - 6:00 PM IST',
//       subtitle: 'Weekend: Emergency Support'
//     }
//   ];

//   return (
//     <section id="contact" className="py-24 bg-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Get in <span className="text-white">Touch</span>
//           </h2>
//           <p className="text-xl text-white max-w-3xl mx-auto">
//             Ready to accelerate your AI journey? Our experts are here to help you find the perfect edge AI solution.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <div className="bg-white/5 rounded-2xl shadow-lg p-8 border border-white/10">
//             <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
//             {isSubmitted && (
//               <div className="mb-6 p-4 bg-white/10 border border-white/20 rounded-xl flex items-center">
//                 <CheckCircle className="w-5 h-5 text-white mr-3" />
//                 <span className="text-white">Thank you! Your message has been sent successfully.</span>
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
//                     placeholder="Your full name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
//                     placeholder="your@email.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
//                   Company
//                 </label>
//                 <input
//                   type="text"
//                   id="company"
//                   name="company"
//                   value={formData.company}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
//                   placeholder="Your company name"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
//                   Subject *
//                 </label>
//                 <select
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
//                 >
//                   <option value="">Select a subject</option>
//                   <option value="product-inquiry">Product Inquiry</option>
//                   <option value="custom-solution">Custom Solution</option>
//                   <option value="partnership">Partnership</option>
//                   <option value="support">Support</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
//                   Message *
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={6}
//                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 resize-none"
//                   placeholder="Tell us about your project and requirements..."
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-white text-black hover:bg-white/90 py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center group"
//               >
//                 Send Message
//                 <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </form>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div className="bg-white/5 rounded-2xl shadow-lg p-8 border border-white/10">
//               <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
//               <div className="space-y-6">
//                 {contactInfo.map((info, index) => {
//                   const IconComponent = info.icon;
//                   return (
//                     <div key={index} className="flex items-start">
//                       <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
//                         <IconComponent className="w-6 h-6 text-black" />
//                       </div>
//                       <div>
//                         <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
//                         <p className="text-white">{info.details}</p>
//                         <p className="text-white/70 text-sm">{info.subtitle}</p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Interactive Map */}
//             <div className="bg-white/5 rounded-2xl shadow-lg p-8 border border-white/10">
//               <h3 className="text-2xl font-bold text-white mb-6">Our Location</h3>
//               <div className="rounded-xl h-64 overflow-hidden">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.263318090854!2d78.3772!3d17.4435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzM2LjYiTiA3OMKwMjInMzcuOSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   className="rounded-xl"
//                   title="Edgeble AI Location"
//                 ></iframe>
//               </div>
//               <p className="text-white mt-4 text-center">
//                 T-Hub, 1/C, 83/1, Panmaktha, Raidurgam, Knowledge City Rd, Hyderabad
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

//MODIFIED CODE 3

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Info',
      details: 'info@edgeble.ai',
      subtitle: ''
    },
    {
      icon: Mail,
      title: 'Sales',
      details: 'sales@edgeble.ai',
      subtitle: ''
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 91000 90959',
      subtitle: ''
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'T-Hub, 1/C, 83/1, Panmaktha, Raidurgam, Knowledge City Rd, Hyderabad',
      subtitle: 'Telangana - 500081'
    },
  ];

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="text-white">Touch</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Ready to accelerate your Edge AI journey? Our experts are here to help you find the perfect edge AI solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 rounded-2xl shadow-lg p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-white/10 border border-white/20 rounded-xl flex items-center">
                <CheckCircle className="w-5 h-5 text-white mr-3" />
                <span className="text-white">Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="custom-solution">Custom Solution</option>
                  <option value="partnership">Partnership</option>
                  <option value="support">Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project and requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black hover:bg-white/90 py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 rounded-2xl shadow-lg p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                        <p className="text-white">{info.details}</p>
                        <p className="text-white/70 text-sm">{info.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-white/5 rounded-2xl shadow-lg p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Our Location</h3>
              <div className="rounded-xl h-64 overflow-hidden relative">
		<iframe
		   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5373101725936!2d78.3791418!3d17.433978600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb937f2ada4f9b%3A0x860789ba1f939b5!2sEdgeble%20AI!5e0!3m2!1sen!2sin!4v1750931755624!5m2!1sen!2sin"
		   width="100%"
		   height="100%"
		   style={{ border: 0, position: 'relative', zIndex: 10 }}
		   allowFullScreen
		   loading="lazy"
		   referrerPolicy="no-referrer-when-downgrade"
		   className="rounded-xl"
		   title="Edgeble AI Office Location"
		/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


