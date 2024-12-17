import Link from 'next/link';
import './globals.css';
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
            <div>
              <Link 
                href="/" 
                className="hover:underline" 
                style={{ paddingRight: '10px' }} 
              >
                Home
              </Link>
              <Link 
                href="/favorites" 
                className="hover:underline"
              >
                Favorites
              </Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto py-8">{children}</main>
      </body>
    </html>
  );
}


