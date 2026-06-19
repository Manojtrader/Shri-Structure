import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-amber-500" />
              <span className="text-amber-500 font-medium tracking-widest uppercase text-sm">Contact Us</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-serif text-white mb-8"
            >
              Let's Build Something Great Together
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8 mb-12"
            >
              <div className="flex max-w-md gap-4">
                <div className="w-12 h-12 bg-zinc-900 shrink-0 rounded-sm flex items-center justify-center border border-zinc-800">
                  <MapPin size={24} className="text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Our Location</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Main Hambran Rd, near Fathe Cold Store, South City, Rishi Nagar, Ayali Khurd, Ludhiana, Punjab 142027
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-zinc-900 shrink-0 rounded-sm flex items-center justify-center border border-zinc-800">
                  <Phone size={24} className="text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone Number</h4>
                  <a href="tel:09915765340" className="text-zinc-400 text-sm hover:text-amber-500 transition-colors">
                    099157-65340
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-zinc-900 shrink-0 rounded-sm flex items-center justify-center border border-zinc-800">
                  <Clock size={24} className="text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Working Hours</h4>
                  <p className="text-zinc-400 text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-zinc-900 p-8 rounded-sm border border-zinc-800">
              <h3 className="text-2xl font-serif text-white mb-6">Send a Message</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wider">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wider">Phone</label>
                    <input 
                      type="tel" 
                      id="phone"
                      required
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="+91 00000-00000"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wider">Service Needed</label>
                  <select 
                    id="service"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none"
                  >
                    <option>Building Construction</option>
                    <option>Architectural Design</option>
                    <option>Home Renovation</option>
                    <option>Other Services</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wider">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold py-4 rounded-sm transition-colors flex items-center justify-center gap-2 mt-4"
                >
                  {status === 'idle' && (
                    <>Submit Request <Send size={18} /></>
                  )}
                  {status === 'submitting' && 'Sending...'}
                  {status === 'success' && 'Message Sent!'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 w-full h-[400px] bg-zinc-900 rounded-sm border border-zinc-800 overflow-hidden"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.8646961122676!2d75.8115664!3d30.9044565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a830062ab0b67%3A0xe54955b2591ae9bb!2sShri%20Structures%20Interior.%2C%20Structures%20and%20Exterior%20Building%20Designer%20%26%20Consultant.!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
