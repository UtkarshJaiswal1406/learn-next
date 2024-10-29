import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import Sahaj from "./sahaj";


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
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Link href="/sahaj" className="bg-blue-500 text-white py-2 px-4 rounded">
        Go to Sahaj's Page
      </Link>
    </div>
  );
}
