"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const faqs = [
  {
    question: 'How do I browse and purchase art?',
    answer: 'You can browse art by visiting the Browse Art section where all products are listed. To purchase, add items to your cart and follow the checkout process.'
  },
  {
    question: 'How can I contact an artist?',
    answer: 'Each artist profile contains contact information or a messaging feature you can use to reach out to them directly.'
  },
  {
    question: 'What is your return and refund policy?',
    answer: 'Returns and refunds must be requested within 30 days of purchase. Conditions apply; please refer to our policy page for full details.'
  },
  {
    question: 'How do I become a seller on the platform?',
    answer: 'To become a seller, you can start by creating an account and applying through the Start Selling page. Our team will guide you through the onboarding process.'
  }
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto bg-stone-50 dark:bg-neutral-900 rounded-xl p-6 shadow-md">
      {faqs.map(({ question, answer }, idx) => (
        <div key={idx} className="border-b border-stone-200 dark:border-neutral-700 last:border-none">
          <button
            onClick={() => toggleIndex(idx)}
            className={`w-full text-left py-4 font-semibold text-lg transition-colors duration-300 ${
              openIndex === idx ? 'text-primary' : 'text-neutral-900 dark:text-neutral-100'
            } focus:outline-none`}
          >
            {question}
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              openIndex === idx ? 'max-h-96 mt-2 text-neutral-700 dark:text-neutral-300' : 'max-h-0'
            }`}
          >
            <p>{answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HelpPage() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] max-w-4xl mx-auto px-6 py-20 bg-background dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
        <h1 className="text-4xl font-bold mb-6">Help Center</h1>
        <p className="text-lg mb-8">
          Welcome to the Help Center! Here you can find answers to common questions and support resources.
        </p>

        <FAQAccordion />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
          <p>
            If you need further assistance, please email us at{' '}
            <a href="mailto:support@artisansmarketplace.com" className="text-primary underline">
              support@artisansmarketplace.com
            </a>{' '}
            or call us at <a href="tel:+1234567890" className="text-primary underline">+1 (234) 567-890</a>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
