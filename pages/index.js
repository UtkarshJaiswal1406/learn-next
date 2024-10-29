import Image from "next/image";
import localFont from "next/font/local";
import Blog from "./blog";
import Backside from "./backside";
import Link from 'next/link';
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
export default function home() {
  return (<div className="h-screen bg-gradient-to-b from-purple-200 to-green-500" >
      <h1 className="text-4xl text-center pt-3">Hello world</h1>
      <br></br>
      <hr className="pt-4 border-green-500"></hr>
      <nav className="">
      <ul class="flex justify-end space-x-4 mr-4">
      <li><p href=""><button className="flex pl-2 pr-3 bg-blue-200 rounded border border-purple-500 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">home</button></p></li>
      <li><Link href="/about"><button className="flex pl-2 pr-3 bg-blue-200 rounded border border-purple-500 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">about</button></Link></li>
      </ul>
      </nav>
      <br></br>
      <hr className="pt-4 border-green-500"></hr>
      <h1 className="grid text-3xl p-4 text-center text-red-500">Home page</h1>
      <p className="flex mr-2 ml-2">"Hello World!" is more than just a simple phrase; it is a powerful symbol in the programming community, representing the first step for countless beginners embarking on their coding journeys. This introductory program, which displays the text "Hello, World!" on the screen, is often the first piece of code that aspiring programmers write when learning a new programming language. Its simplicity belies its significance, as it encapsulates fundamental programming concepts, including syntax, structure, and the method for outputting text to a console or screen. The origins of the "Hello, World!" program can be traced back to the early days of computer science, gaining popularity through the influential book *The C Programming Language* by Brian Kernighan and Dennis Ritchie, published in 1978. This iconic example is not just a trivial exercise; it serves as a gateway into more complex programming concepts and logic. The program instills a sense of achievement and motivation in beginners, as seeing their first output can inspire confidence and curiosity about coding. Over the years, "Hello, World!" has transcended its original purpose, evolving into a cultural touchstone within the tech community, symbolizing the excitement and challenges of learning to program. Its presence can be felt in numerous coding boot camps, online tutorials, and educational courses, reminding learners that every expert was once a beginner. Whether in Python, Java, JavaScript, or any other language, the act of writing this simple program marks the start of a new adventure into the vast and creative world of programming, encouraging individuals to explore, innovate, and push the boundaries of what they can create.</p><Backside/>
    </div>
    );
}
