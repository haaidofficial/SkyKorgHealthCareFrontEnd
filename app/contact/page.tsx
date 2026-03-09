import content from '@/data/content.json';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <section className="grid gap-8 md:grid-cols-2">
      <div>
        <h1 className="text-2xl font-bold">{content.contact.title}</h1>
        <p className="mt-2 text-gray-600">{content.contact.body}</p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
      <div className="rounded-xl border bg-white p-6">
        <p className="text-sm text-gray-600">
          You can replace this with a map or additional contact details (address, hours, etc.).
        </p>
      </div>
    </section>
  );
}
