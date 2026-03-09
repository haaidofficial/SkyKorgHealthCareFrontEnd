import content from '@/data/content.json';

export default function AboutPage() {
  return (
    <section className="prose max-w-none">
      <h1>{content.about.title}</h1>
      <p>{content.about.body}</p>
    </section>
  );
}
