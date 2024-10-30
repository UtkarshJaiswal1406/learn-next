import Image from "next/image";
import localFont from "next/font/local";
import MyPage from './page';

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <a href="/page" className="
          px-6 py-3 
          text-white 
          font-semibold 
          bg-blue-500 
          rounded-lg 
          shadow-lg 
          transform 
          ease-in-out 
          hover:-translate-y-1 
          hover:scale-105
        "
      >
        PAGES
      </a>
    </div>
  );
}
