import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <h1 className="text-4xl font-bold text-blue-600">Pokemon</h1>
            <Link href="/myPage">
                <a className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Catch them all
                </a>
            </Link>
        </div>
    );
}
