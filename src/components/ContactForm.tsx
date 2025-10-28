import React, { useState, useRef } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  isDarkMode: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isDarkMode }) => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace these with your EmailJS credentials
      // Sign up at https://www.emailjs.com/ to get these values
      await emailjs.sendForm(
        'service_v3xpw9d', // Replace with your EmailJS service ID
        'template_zi2jv21', // Replace with your EmailJS template ID
        form.current,
        'lkXElqZwYjiDje1qt' // Replace with your EmailJS public key
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
    isDarkMode 
      ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
  }`;

  const cardClasses = isDarkMode
    ? 'bg-slate-800 border-slate-700'
    : 'bg-white border-gray-200';

  return (
    <div className={`p-8 rounded-2xl border ${cardClasses}`}>
      <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-lg flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-emerald-500" />
          <p className="text-emerald-500">Message sent successfully! I'll get back to you soon.</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500" />
          <p className="text-red-500">Failed to send message. Please try again or contact me directly.</p>
        </div>
      )}

      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold mb-2 text-blue-500">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={inputClasses}
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 text-emerald-500">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={inputClasses}
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-bold mb-2 text-purple-500">Subject *</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className={inputClasses}
            placeholder="What's this about?"
          />
        </div>
        
        <div>
          <label className="block text-sm font-bold mb-2 text-orange-500">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className={inputClasses}
            placeholder="Tell me about your project or question..."
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 ${
            isSubmitting ? 'cursor-not-allowed' : ''
          } shadow-lg hover:shadow-xl transform hover:scale-105`}
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
      </form>
      
      <div className={`mt-6 p-4 rounded-lg border ${
        isDarkMode ? 'bg-slate-700/50 border-slate-600' : 'bg-gray-50 border-gray-200'
      }`}>
        <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
          <strong>Hint:</strong> Fill out the form with your details and message — I’ll get back to you as soon as possible.  
          Make sure to include a valid email so I can reply quickly.
          </p>
      </div>
    </div>
  );
};

export default ContactForm;