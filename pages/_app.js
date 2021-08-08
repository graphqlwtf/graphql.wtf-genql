import Head from "next/head";
import Link from "next/link";

export default function MyApp({ Component, pageProps, router }) {
  const { route } = router;

  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="max-w-3xl mx-auto p-6">
        <header className="bg-gray-50 px-6 py-3 rounded-md">
          <ul className="flex space-x-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            {route === "/products/[slug]" && (
              <>
                <li className="text-gray-500">&rarr;</li>
                <li className="text-gray-500">Product Page</li>
              </>
            )}
          </ul>
        </header>
        <main className="pt-12">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
