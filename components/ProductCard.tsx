import Link from 'next/link';

export default function ProductCard({
  href,
  name,
  shortDescription,
}: {
  href: string;
  name: string;
  shortDescription: string;
}) {
  return (
    <Link href={href} className="block rounded-xl border p-4 hover:shadow-md transition bg-white">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-600 mt-1">{shortDescription}</p>
    </Link>
  );
}
