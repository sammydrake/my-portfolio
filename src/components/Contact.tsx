import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { FormEvent, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Container from './layout/Container';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    status: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    status: 'idle',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus({ status: 'loading', message: 'Sending your message...' });

    // Get EmailJS credentials from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if environment variables are properly loaded
    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS environment variables are not properly configured');
      setFormStatus({ 
        status: 'error', 
        message: 'Server configuration error. Please contact the administrator.' 
      });
      return;
    }

    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
          console.log('SUCCESS!', result.text);
          setFormStatus({ status: 'success', message: 'Thank you! Your message has been received.' });
          setFormData({ name: '', email: '', subject: '', message: '' });
          
          setTimeout(() => {
            setFormStatus({ status: 'idle', message: '' });
          }, 5000);
        }, (error) => {
          console.log('FAILED...', error.text);
          setFormStatus({ 
            status: 'error', 
            message: 'Failed to send the message. Please try again later.' 
          });
          
          setTimeout(() => {
            setFormStatus({ status: 'idle', message: '' });
          }, 5000);
        });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>
            <form ref={form} onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                  required
                />
              </div>

              {/* Subject */}
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                  required
                ></textarea>
              </div>

              {formStatus.status !== 'idle' && (
                <div className={`mb-4 p-3 rounded ${
                  formStatus.status === 'success' 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
                    : formStatus.status === 'error'
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                    : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                }`}>
                  {formStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus.status === 'loading'}
                className={`w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 ${
                  formStatus.status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {formStatus.status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-md mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                      <Mail size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-400">
                      Email
                    </h4>
                    <a 
                      href="mailto:drakesammy0101@gmail.com" 
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      drakesammy0101@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                      <Phone size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-400">
                      Phone
                    </h4>
                    <a 
                      href="tel:+2347031590997" 
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      +234 703 159 0997
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-300">
                      <MessageCircle size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-400">
                      WhatsApp
                    </h4>
                    <a
                      href="https://wa.me/2347031590997?text=Hello%2C%20I%27m%20interested%20in%20your%20web%20development%20services.%20Could%20you%20please%20provide%20more%20details%20about%20your%20offerings%20and%20how%20we%20can%20work%20together%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      Chat about Web Development
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                      <MapPin size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-400">
                      Location
                    </h4>
                    <p className="text-gray-900 dark:text-white">
                      Adex Cafe, Opposite University of Abuja (Old site), Gwagwalada, Abuja, Nigeria.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Work Availability
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm currently available for freelance work and interesting projects. My typical response time is within 24 hours.
              </p>
              <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span className="font-medium">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}