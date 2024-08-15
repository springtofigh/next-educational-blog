import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex items-center justify-center'>
      <h2>سلام بهار</h2>
      <Link href="/blogs">
            <span className="block p-2 hover:bg-purple-500">
              همه مقالات؟
            </span>
      </Link>
    </div>
  )
}

