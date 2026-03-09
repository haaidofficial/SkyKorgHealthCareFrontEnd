import content from '@/data/content.json';

export default function ServicesPage() {
  return (
    <section className="prose max-w-none">
      <h1>{content.services.title}</h1>
      <p>{content.services.body}</p>
    </section>
  );
}
