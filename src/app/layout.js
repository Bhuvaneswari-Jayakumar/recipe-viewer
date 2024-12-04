import Link from 'next/link';

export const metadata = {
  title: 'Recipe App',
  description: 'A simple recipe app with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900">
        <nav className="bg-blue-500 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Recipe App</h1>
            <div className="space-x-4">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/all-meals" className="hover:underline">All Meals</Link>
              <Link href="/favorites" className="hover:underline">Favorites</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto py-8">{children}</main>
      </body>
    </html>
  );
}
