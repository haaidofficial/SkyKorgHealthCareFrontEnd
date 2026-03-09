'use client';
import { useState } from 'react';
import content from '@/data/content.json';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await fetch('/api/contact', { method: 'POST', body: formData });
    setStatus('sent');
    (e.currentTarget as HTMLFormElement).reset();
  }

  if (status === 'sent') {
    return <p className="text-green-700">{content.forms.contactThanks}</p>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">{content.forms.name}</label>
        <input name="name" required className="mt-1 w-full rounded border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">{content.forms.email}</label>
        <input name="email" type="email" required className="mt-1 w-full rounded border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">{content.forms.phone}</label>
        <input name="phone" type="tel" className="mt-1 w-full rounded border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">{content.forms.message}</label>
        <textarea name="message" rows={4} className="mt-1 w-full rounded border px-3 py-2" />
      </div>
      <button className="rounded bg-brand-600 px-4 py-2 text-white hover:bg-brand-700">
        {content.forms.submit}
      </button>
    </form>
  );
}
