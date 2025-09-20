"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function CustomOrdersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDescription: '',
    budget: '',
    deadline: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.projectDescription) {
      setStatus('Please fill out all required fields.');
      return;
    }
    // Process form submission here (e.g., send to backend or email)
    setStatus('Thank you for your project inquiry! We will reach out soon.');
    setFormData({
      name: '',
      email: '',
      projectDescription: '',
      budget: '',
      deadline: ''
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-[80vh] max-w-xl mx-auto px-6 py-20 bg-background dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Custom Orders</h1>
        <p className="mb-8 text-center text-lg">
          Share your vision with our artisans! Fill out the form below to request a custom creation tailored to your desires.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold">Your Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="projectDescription" className="block mb-1 font-semibold">Project Description*</label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="budget" className="block mb-1 font-semibold">Estimated Budget (Optional)</label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="$"
              className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="deadline" className="block mb-1 font-semibold">Desired Deadline (Optional)</label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 w-full"
          >
            Submit Custom Order Request
          </button>

          {status && <p className="mt-4 text-center text-green-600 dark:text-green-400">{status}</p>}
        </form>
      </main>
      <Footer />
    </>
  );
}
