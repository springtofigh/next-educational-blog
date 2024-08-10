import { ChevronDownIcon, AdjustmentsIcon } from "@heroicons/react/outline";
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import PostList from "@/components/Posts/PostList";


export default function Home({ blogsData, postCategories }) {
  console.log(postCategories);
  
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
          <Link href="/blogs">
          <span className="block pr-4 py-2 hover:bg-purple-500 mb-1">
            همه مقالات
          </span>
          </Link>
          {
            postCategories.map(category => {
              return (
                <Link href={`/blogs/${category.englishTitle}`} key={category._id}>
                <span className="block pr-4 py-2 hover:bg-purple-500 mb-1">
                  {category.title}
                </span>
                </Link>
              )
            })
          }
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
      <div className='grid grid-cols-6 gap-4 md:col-span-9'>
        <PostList  blogsData = { blogsData } />
      </div>
          </div>
    </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { data: result } = await axios.get('http://localhost:5000/api/posts?page=1&limit=6');
  const { data: postCategories } = await axios.get('http://localhost:5000/api/post-category')
  const { data } = result;

  return { props: { blogsData: data, postCategories: postCategories.data } }
}