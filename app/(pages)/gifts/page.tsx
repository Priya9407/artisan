"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

const giftCardValues = [25, 50, 100, 200];

export default function GiftCardsPage() {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [personalMessage, setPersonalMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedValue || !recipientEmail) {
      setStatus('Please select an amount and provide a recipient email.');
      return;
    }
    setStatus(`Gift card of $${selectedValue} sent to ${recipientEmail}!`);
    setRecipientEmail('');
    setPersonalMessage('');
    setSelectedValue(null);
  };

  return (
    <>
      <Header />
      <main className="min-h-[80vh] max-w-xl mx-auto px-6 py-20 bg-background dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Gift Cards</h1>
        <p className="mb-8 text-center text-lg">
          Give the gift of handmade art and unique creations. Select the amount and personalize your gift card.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <fieldset>
            <legend className="mb-4 font-semibold text-lg">Choose Gift Card Amount</legend>
            <div className="flex justify-between flex-wrap gap-4">
              {giftCardValues.map((value) => (
                <label
                  key={value}
                  className={`cursor-pointer px-6 py-3 rounded-lg border-2 transition-colors duration-300 ${
                    selectedValue === value
                      ? 'border-primary bg-primary text-white'
                      : 'border-neutral-300 dark:border-neutral-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="giftAmount"
                    value={value}
                    checked={selectedValue === value}
                    onChange={() => setSelectedValue(value)}
                    className="hidden"
                  />
                  ${value}
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">
              Recipient Email
            </label>
            <input
              required
              id="email"
              name="email"
              type="email"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
              placeholder="recipient@example.com"
              className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-semibold">
              Personal Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={personalMessage}
              onChange={(e) => setPersonalMessage(e.target.value)}
              rows={4}
              placeholder="Write a message for the recipient..."
              className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 w-full"
          >
            Send Gift Card
          </button>

          {status && <p className="text-center mt-4 text-green-600 dark:text-green-400">{status}</p>}
        </form>
      </main>
      <Footer />
    </>
  );
}
