'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Job Application Inquiry');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumb items={[{ label: 'Contact Us' }]} />

      <div className="mb-8 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-saudi-700 bg-saudi-50 px-2.5 py-1 rounded border border-saudi-200">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
          Contact SaudiJobsHub Support
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
          Have questions about job listings, employer verification, or advertising opportunities? Our support team is here to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Contact Information Column */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
            <h3 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-3">
              Support Information
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-saudi-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">KSA Office Desk</span>
                  <span>King Fahd Road, Olaya District, Riyadh, Saudi Arabia</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-saudi-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Email Inquiries</span>
                  <span>support@saudijobshub.com</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Employer Verification</span>
                  <span>employers@saudijobshub.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-saudi-900 text-white rounded-2xl p-6 shadow-md text-xs space-y-2">
            <h4 className="font-bold text-emerald-300 text-sm">Working Hours</h4>
            <p className="text-slate-300">Sunday - Thursday: 8:00 AM - 5:00 PM (AST / KSA Time)</p>
            <p className="text-slate-400">Friday &amp; Saturday: Closed</p>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-extrabold text-slate-900 text-xl mb-4">
                  Send Us a Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Al-Harbi"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saudi-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saudi-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Subject *
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saudi-600"
                  >
                    <option value="Job Application Inquiry">Job Application Inquiry</option>
                    <option value="Report Listing / Safety Concern">Report Listing / Safety Concern</option>
                    <option value="Employer Partnership">Employer Partnership / Post a Job</option>
                    <option value="Feedback & General Support">Feedback &amp; General Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Message Details *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your inquiry in detail..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saudi-600 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-saudi-800 hover:bg-saudi-900 text-white font-bold text-sm rounded-xl shadow transition-colors flex items-center space-x-2"
                >
                  <Send className="w-4 h-4 text-emerald-300" />
                  <span>Send Message</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for contacting SaudiJobsHub. Our support team will review your message and respond within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-saudi-800 text-white font-bold text-xs rounded-xl hover:bg-saudi-900"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
