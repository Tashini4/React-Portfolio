import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    // Add email logic here
  };

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/Tashini4', label: "Github" },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/tashini-wijethunga-9474b02b2/', label: "LinkedIn" },
    { icon: <FaFacebook />, href: 'https://www.facebook.com/share/1FkTevPvbU/', label: "Facebook" },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/_tashimadu_?igsh=NngxMjdkZzQ3eDYw', label: "Instagram" }
  ];

  return (
    <div className="min-h-screen py-20 px-4 md:px-20 bg-black text-white relative z-10 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-12 tracking-tighter">
            Let's <br />
            <span className="text-transparent text-stroke">Connect</span>
          </h2>

          <div className="space-y-8 text-lg font-light text-gray-300">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl" />
              <a href="mailto:tashiniwijethunga@gmail.com" className="hover:text-white transition-colors">tashiniwijethunga@gmail.com</a>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl" />
              <span>Mathugama, Sri Lanka</span>
            </div>
          </div>

          <div className="mt-12 flex gap-6">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 rounded-full"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white transition-colors"
              placeholder="YOUR NAME"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white transition-colors"
              placeholder="YOUR EMAIL"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white transition-colors resize-none"
              placeholder="TELL ME ABOUT YOUR PROJECT"
            />
          </div>

          <button
            type="submit"
            className="px-10 py-5 bg-white text-black font-black uppercase tracking-wider hover:bg-transparent hover:text-white hover:border hover:border-white transition-all duration-300 w-full md:w-auto"
          >
            Send Message
          </button>
        </motion.form>

      </div>
    </div>
  );
};

export default Contact;