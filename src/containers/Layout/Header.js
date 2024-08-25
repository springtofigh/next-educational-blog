import Link from 'next/link';

function Header() {
  return (
    <header className='bg-white shadow-md py-2 mb-8'>
        <div className='container mx-auto xl:max-w-screen-xl'>
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
                    <Link href="/profile" className='py-2 block'>
                    پروفایل
                    </Link>
                    <Link href="/signin" className='py-2 block'>
                    ورود
                    </Link>
                    <Link href="/signup" className='py-2 block'>
                    ثبت نام
                    </Link>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header