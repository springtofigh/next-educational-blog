import { useAuth, useAuthActions } from '@/context/AuthContext';
import Link from 'next/link';

function Header() {
    const { user, isLoading} = useAuth();
    const dispatch = useAuthActions();
  return (
    <header className='bg-white shadow-md py-2 mb-8'>
        <div className={`container mx-auto xl:max-w-screen-xl transition-all ${isLoading ? "opacity-0" : "opacity-100"}`}>
            <nav className='flex justify-between'>
                <ul className='flex items-center gap-x-5'>
                    <li>
                        <Link href="/">
                        خانه
                        </Link>
                    </li>
                    <li>
                        <Link href="/blogs">
                        وبلاگ
                        </Link>
                    </li>
                </ul>
                <div className='flex items-center gap-x-4'>
                    {
                    user  ? (
                    <>
                    <Link href="/profile" className='py-2 block'>
                    به پروفایلت خوش اومدی <span className='text-sm'>{user.name}</span>
                    </Link>
                    <button 
                    className='bg-red-600 px-2 py-1 rounded text-red-100'
                    onClick={() => dispatch({type: "SIGNOUT"})}
                    >خروج
                    </button>
                    </> ) : (<>
                    <Link href="/signin" className='py-2 block'>
                    ورود
                    </Link>
                    <Link href="/signup" className='py-2 block'>
                    ثبت نام
                    </Link>
                    </>)
                    }
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header