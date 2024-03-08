import Image from 'next/image';
import CNavbar from './components/CNavbar';

export default function HomePage() {
  return (
    <div>
      <CNavbar />
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Logo */}
        <Image
          src="/logoserenity.jpg"
          alt="Your Company Logo"
          width={200}
          height={100}
          priority
        />

        {/* Button */}
        <button className="mt-8 px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold">
          Click Me!
        </button>
      </div>
    </main>
    </div>
    
  );
}