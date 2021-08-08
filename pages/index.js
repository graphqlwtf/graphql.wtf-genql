import Link from "next/link";
import Image from "next/image";

import { client } from "../lib/graphcms";

export const getStaticProps = async () => {
  const { products } = await client.query({
    products: {
      slug: true,
      name: true,
      image: {
        url: true,
      },
    },
  });

  return {
    props: {
      products,
    },
  };
};

export default function IndexPage({ products }) {
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {products.map(({ slug, name, image: { url, ...image } }) => (
        <li
          key={slug}
          className="rounded-md shadow p-6 flex items-center justify-center transform hover:-translate-y-1 transition hover:shadow-lg group"
        >
          <Link href={`/products/${slug}`}>
            <a className="space-y-6 text-center">
              {image && (
                <Image src={url} width={400} height={400} className="block" />
              )}
              <p className="text-gray-500 group-hover:text-black transition">
                {name}
              </p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
