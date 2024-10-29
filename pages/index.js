// pages/index.js
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <Link href="/homiepage">
        <a>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Go to My Page
          </button>
        </a>
      </Link>
    </div>
  );
};

export default HomePage;
