import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from 'react';

function DesktopCategory({ postCategories }) {
  const [isOpen, setIsOpen] = useState(true);
  const { query } = useRouter();

  return (
    <div className="bg-white rounded-3xl overflow-hidden sticky top-24">
        {/* سربرگ منوی آکاردئونی */}
        <div className="flex items-center justify-between px-4 py-4 cursor-pointer bg-purple-200" onClick={() => setIsOpen(!isOpen)}>
          <span>دسته‌بندی مقالات</span>
          <ChevronDownIcon className={`w-6 h-6 stroke-purple-400 transition-all duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}/>
        </div>
        {/* محتوای منوی آکاردئونی */}
        <div className={`${isOpen ? "block" :"hidden"}`}>
          <Link href="/blogs">
          <span className={`block pr-4 py-2 hover:bg-purple-500 mb-1 ${
            !query.CategorySlug ? "bg-purple-700 text-white hover:bg-purple-500" : ""}`}>
            همه مقالات
          </span>
          </Link>
          {
            postCategories.map(category => {
              return (
                <Link href={`/blogs/${category.englishTitle}`} key={category._id}>
                <span className={`block pr-4 py-2 hover:bg-purple-500 mb-1 ${
                  query.CategorySlug === category.englishTitle ? "bg-purple-700 text-white hover:bg-purple-500" : ""}`}>
                  {category.title}
                </span>
                </Link>
              )
            })
          }
        </div>
    </div>
  )
}

export default DesktopCategory;