import Image from "next/image";
import localFont from "next/font/local";
import NewPage from "./newWebpage";
import Link from "next/link";

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
   
    <div class="flex justify-center">
         <Link href="/newWebpage">
    <button class="flex items-center px-4 py-3 text-white bg-blue-500 hover:bg-blue-400 justify-centre mt-52">CLICK ME</button>
    </Link>
</div>

  
  );
}

      
        
            
