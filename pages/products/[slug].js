import Image from "next/image";

import { client } from "../../lib/graphcms";
// import { everything } from "../../generated";

export async function getStaticProps({ params }) {
  const { slug } = params;

  const { product } = await client.query({
    product: [
      {
        where: {
          slug,
        },
      },
      {
        name: true,
        description: true,
        price: true,
        image: {
          url: true,
        },
      },
    ],
  });

  // const product = await client.chain.query
  // .product({ where: { slug } })
  // .get({ ...everything, image: { ...everything } });

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const { products } = await client.query({
    products: {
      slug: true,
    },
  });

  return {
    paths: products.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default function ProductPage({ product }) {
  return (
    <div className="space-y-3">
      {product.image && (
        <Image src={product.image.url} width={300} height={300} />
      )}
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-xl font-mono">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "usd",
        }).format(product.price / 100)}
      </p>
      <p className="text-lg text-gray-500">{product.description}</p>
    </div>
  );
}
