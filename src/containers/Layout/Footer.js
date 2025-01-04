import { RiHeadphoneLine } from "react-icons/ri";
import Link from 'next/link';

function Footer() {
  return (
    <footer className=" py-7 relative bottom-0 footer-bg flex flex-col gap-y-4 justify-center items-center">
      {/* Logo */}
      <div className='flex items-center justify-center gap-x-4'>
        <img src='/images/logo.png' alt='front top learn' className='w-20' />
        <p className='text-white'>
         فرانت تاپ لرن
        </p>
      </div>
      {/* Links */}
      <div className='flex justify-center items-center px-1 md:px-3 border border-slate-700 rounded-lg footer-links'>
        <div className='flex items-center py-1'>
      <Link href='/' >
        <span className='text-white block p-2 md:px-5 text-xs md:text-sm text-center font-normal md:font-light border-l border-l-slate-700'>
          صفحه اصلی
        </span>
      </Link>
        </div>
        <div className='flex items-center py-1'>
      <Link href='/signup' >
        <span className='text-white block p-2 md:px-5 text-xs md:text-sm text-center font-light border-l border-l-slate-700'>
          ورود و ثبت نام
        </span>
      </Link>
        </div>
        <div className='flex items-center justify-center py-1'>
      <Link href='/blogs' >
        <span className='text-white block p-2 md:px-5 text-xs md:text-sm text-center font-light border-l border-l-slate-700'>
          وبلاگ
        </span>
      </Link>
        </div>
        <div className='flex items-center py-1'>
      <Link href='/contact-us' >
        <span className='text-white block p-2 md:px-5 text-xs md:text-sm text-center font-light'>
          تماس با ما
        </span>
      </Link>
        </div>
      </div>
      {/* support */}
      <div className='flex justify-center items-center px-3 border border-slate-700 rounded-lg footer-links mb-3'>
        <div className='flex items-center py-1 px-1'>
        < RiHeadphoneLine className="md:w-7 md:h-7 fill-white"/>
        <span className='text-white block p-2 text-xs md:text-sm text-center font-normal md:font-light'>
          پشتیبانی :
        </span>
        </div>
        <div className='flex items-center py-1 px-1'>
        <img src='/images/logos_whatsapp-icon.svg' alt='واتساپ' />
        <span className='text-white block pl-2 p-2 text-xs md:text-sm text-center font-normal md:font-light border-l border-l-slate-700'>
          واتساپ
        </span>
        </div>
        <div className='flex items-center py-1 px-1'>
        <img src='/images/logos_telegram.svg' alt='تلگرام' />
        <span className='text-white block pl-2 p-2 text-xs md:text-sm text-center font-normal md:font-light'>
          تلگرام
        </span>
        </div>
      </div>
      <div className='px-5'>
      <p className='text-xs md:text-sm text-center footer-text font-extralight'>&#169; تمام حقوق مادی و معنوی برای فرانت تاپ لرن محفوظ می‌باشد </p>
      </div>
    </footer>
  )
}

export default Footer;