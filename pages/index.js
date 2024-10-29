import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-gray-800">Home Page</h1>
      <Link href="/newpage" legacyBehavior>
        <a className="mt-4 text-blue-500 hover:text-blue-700">
          Go to New Page
        </a>
      </Link>
    </div>
  );
}
