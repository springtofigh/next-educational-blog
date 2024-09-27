import Link from 'next/link';
import Layout from '@/containers/Layout';
import { useSelector } from 'react-redux';

export default function Home() {
  const userInfo = useSelector(state => state.userSignin);
  const { user } = userInfo;
  return (
    <Layout>
    <div className='flex items-center justify-center'>
     {user && <h2>{user.name} سلام </h2>}
     <span> به پروژه Next.App خوش اومدی!</span>
      <Link href="/blogs">
            <span className="block p-2 hover:bg-purple-500">
              همه مقالات؟
            </span>
      </Link>
    </div>
    </Layout>
  )
}

