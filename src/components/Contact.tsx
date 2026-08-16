import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, RefreshCw } from 'lucide-react';
import { personalInfo } from '../data';

interface ContactProps {
  theme: 'dark' | 'light';
}

export default function Contact({ theme }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Simulate API submission call
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 1500);
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFormSubmitted(false);
  };

  const contactCards = [
    {
      icon: <Mail size={18} className="text-brand-purple" />,
      title: 'Email Address',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      actionLabel: 'Send email',
    },
    {
      icon: <Phone size={18} className="text-brand-blue" />,
      title: 'Phone Number',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`,
      actionLabel: 'Call directly',
    },
    {
      icon: <MapPin size={18} className="text-brand-cyan" />,
      title: 'Office Location',
      value: personalInfo.location,
      href: 'https://maps.google.com',
      actionLabel: 'Open maps',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-purple dark:text-brand-cyan mb-2">
            09. GET IN TOUCH
          </h2>
          <h3 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
          }`}>
            Let's Collaborate On Your Next Project
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-blue mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="space-y-4">
              {contactCards.map((card, i) => (
                <a
                  key={i}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-5 rounded-2xl border flex items-center gap-4 transition-all duration-300 hover:scale-[1.01] ${
                    theme === 'dark'
                      ? 'glass-card border-slate-850 hover:border-brand-purple/20'
                      : 'glass-card-light border-slate-200 hover:border-brand-purple/10'
                  }`}
                  referrerPolicy="no-referrer"
                >
                  <div className={`p-3.5 rounded-xl ${
                    theme === 'dark' ? 'bg-slate-900 border border-slate-850' : 'bg-slate-100 border border-slate-200'
                  }`}>
                    {card.icon}
                  </div>
                  <div>
                    <h5 className={`text-xs font-bold uppercase tracking-wider ${
                      theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      {card.title}
                    </h5>
                    <p className={`text-sm font-semibold truncate ${
                      theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                    }`}>
                      {card.value}
                    </p>
                    <span className="text-[10px] font-bold text-brand-purple uppercase tracking-widest mt-1 inline-block">
                      {card.actionLabel} &rarr;
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 sm:p-10 rounded-3xl border h-full flex flex-col justify-between ${
              theme === 'dark' ? 'glass-card' : 'glass-card-light shadow-sm'
            }`}>
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className={`text-lg font-bold mb-1 ${
                        theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                      }`}>
                        Send a Message
                      </h4>
                      <p className={`text-xs ${
                        theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                      }`}>
                        I reply to all recruiting proposals within 24 business hours.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className={`text-xs font-bold uppercase tracking-wider ${
                          theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none transition-all ${
                            theme === 'dark'
                              ? 'bg-slate-900/60 border-slate-800 text-slate-100 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple'
                              : 'bg-white border-slate-200 text-slate-800 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple'
                          }`}
                          placeholder="Nithya Priya"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label className={`text-xs font-bold uppercase tracking-wider ${
                          theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none transition-all ${
                            theme === 'dark'
                              ? 'bg-slate-900/60 border-slate-800 text-slate-100 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple'
                              : 'bg-white border-slate-200 text-slate-800 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple'
                          }`}
                          placeholder="nithya@example.com"
                        />
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-1.5">
                      <label className={`text-xs font-bold uppercase tracking-wider ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none transition-all ${
                          theme === 'dark'
                            ? 'bg-slate-900/60 border-slate-800 text-slate-100 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple'
                            : 'bg-white border-slate-200 text-slate-800 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple'
                        }`}
                        placeholder="Opportunity / Collaboration"
                      />
                    </div>

                    {/* Message textarea */}
                    <div className="space-y-1.5">
                      <label className={`text-xs font-bold uppercase tracking-wider ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        Message Content *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none transition-all resize-none ${
                          theme === 'dark'
                            ? 'bg-slate-900/60 border-slate-800 text-slate-100 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple'
                            : 'bg-white border-slate-200 text-slate-800 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple'
                        }`}
                        placeholder="Hi Nithya, we loved your portfolio! We would like to interview you for a Full Stack Developer position..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      id="contact-form-submit-btn"
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white font-bold shadow-lg shadow-brand-purple/20 hover:shadow-xl hover:shadow-brand-purple/35 transition-all hover:scale-[1.01] active:scale-98 disabled:opacity-60 cursor-pointer"
                    >
                      {loading ? (
                        <div className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center h-full py-10 space-y-6"
                  >
                    <div className="h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20 shadow-xl shadow-emerald-500/5">
                      <CheckCircle2 size={32} />
                    </div>
                    <div className="space-y-2">
                      <h4 className={`text-xl font-bold ${
                        theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
                      }`}>
                        Message Dispatched!
                      </h4>
                      <p className={`text-sm max-w-sm leading-relaxed ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        Thank you, {formData.name}. Your message has been sent successfully. I will reach out to you at {formData.email} as soon as possible.
                      </p>
                    </div>

                    <button
                      id="contact-form-reset-btn"
                      onClick={handleResetForm}
                      className={`flex items-center gap-1.5 px-6 py-2.5 rounded-xl border text-xs font-bold transition-all hover:scale-105 cursor-pointer ${
                        theme === 'dark'
                          ? 'border-slate-850 bg-slate-900 text-slate-300'
                          : 'border-slate-200 bg-slate-100 text-slate-700'
                      }`}
                    >
                      <RefreshCw size={12} />
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
