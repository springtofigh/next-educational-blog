import { ChevronDownIcon, AdjustmentsIcon, HeartIcon, BookmarkIcon, AnnotationIcon, ClockIcon } from "@heroicons/react/outline";
import Link from 'next/link';
import { useState } from 'react';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="bg-purple-100">
          <div className="container mx-auto lg:max-w-screen-xl">
          <div className='grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] min-h-screen'>
      <div className='hidden md:block md:row-span-2 md:col-span-3'>
        <div className="bg-white rounded-3xl overflow-hidden">
          {/* سربرگ منوی آکاردئونی */}
        <div className="flex items-center justify-between px-4 py-4 cursor-pointer bg-purple-200" onClick={() => setIsOpen(!isOpen)}>
          <span>دسته‌بندی مقالات</span>
          <ChevronDownIcon className={`w-6 h-6 stroke-purple-400 transition-all duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}/>
        </div>
        {/* محتوای منوی آکاردئونی */}
        <div className={`${isOpen ? "block" :"hidden"}`}>
          <Link href="#">
          <span className="block pr-4 py-2 hover:bg-purple-500 mb-1">
            همه مقالات
          </span>
          </Link>
          <Link href="#">
          <span className="block pr-4 py-2 hover:bg-purple-500 mb-1">
            ریکت
          </span>
          </Link>
          <Link href="#">
          <span className="block pr-4 py-2 hover:bg-purple-500">
            جاوااسکریپت
          </span>
          </Link>
        </div>
        
        </div>
      </div>
      <div className='hidden md:block md:col-span-9'>
        <div className="bg-slate-100 rounded-xl px-4 flex items-center">
          <div className="flex items-center gap-x-2 ml-2">
            <AdjustmentsIcon className='w-6 h-6'/>
            <span className='text-gray-700'>مرتب سازی:</span>
          </div>
          <ul className="flex items-center gap-x-4">
            <li className='cursor-pointer text-gray-700 py-4'>پر بازدیدترین</li>
            <li className='cursor-pointer text-gray-700 py-4'>محبوب ترین</li>
            <li className='cursor-pointer text-gray-700 py-4'>جدید ترین</li>
          </ul>
        </div>
      </div>
      {/* بخش بلاگ */}
      <div className='grid grid-cols-6 gap-4 md:col-span-9'>{["2.png","3.png","4.png","vuejs.png","nuxt-icon.png", "next-JS-framework.png"].map((item, index) => {
        return (
          <div className="bg-white col-span-6 md:col-span-3 lg:col-span-2 rounded-3xl p-2 object-cover w-full h-full object-center" key={index}>
          {/* تصویر مقاله */}
          <div className="aspect-h-9 aspect-w-16">
            <img src={`/images/${item}`} alt="" className="rounded-2xl" />
          </div>
          {/* محتوا */}
          <div className="bg-gray-50 py-2 rounded-2xl">
            <h2 className="mb-4 text-bold">بررسی کامل ریکت و ریداکس</h2>
            <div className='flex items-center justify-between'>
              <div className="flex items-center">
                <img src="/images/nodejs-logo.png" alt="" className="rounded-full w-6 h-6 ring-2 ring-violet-600 ml-2" />
                <span>بهار توفیق</span>
              </div>
              <span className="text-xs px-2 py-1 bg-purple-300 text-purple-600 rounded-xl hover:bg-purple-600 hover:text-purple-300 transition-all duration-300 cursor-pointer">ری‌اکت</span>
            </div>
          </div>
        </div>
        )
      })}</div>
          </div>
    </div>
    </div>
  )
}
