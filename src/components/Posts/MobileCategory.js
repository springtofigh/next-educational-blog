import Link from 'next/link';
import { useRouter } from 'next/router';

function MobileCategory({ postCategories }) {
  const { query } = useRouter();
  return (
<div className="flex md:hidden gap-x-4 overflow-auto pb-5">
          <Link href="/blogs">
                <span className={`block border border-gray-400 bg-white rounded-3xl px-3 py-1 whitespace-nowrap text-gray-400 text-sm ${
                  !query.CategorySlug ? "border-purple-700 text-purple-700 bg-purple-100" : ""}`}>
                  همه مقالات
                </span>
          </Link>
      {postCategories.map(category => {
              return (
                <Link href={`/blogs/${category.englishTitle}`} key={category._id}>
                <span className={`block border border-gray-400 bg-white rounded-3xl px-3 py-1 whitespace-nowrap text-gray-400 text-sm ${
                  query.CategorySlug === category.englishTitle ? "border-purple-700 text-purple-700 bg-purple-100" : ""}`}>
                  {category.title}
                </span>
                </Link>
              )
            })}
      </div>
  )
}

export default MobileCategory;