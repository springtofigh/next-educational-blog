import Link from 'next/link';

function MobileCategory({ postCategories }) {
  return (
<div className="flex md:hidden gap-x-4 overflow-auto pb-5">
      {postCategories.map(category => {
              return (
                <Link href={`/blogs/${category.englishTitle}`} key={category._id}>
                <span className="block border border-gray-400 bg-white rounded-3xl px-3 py-1 whitespace-nowrap text-gray-400 text-sm">
                  {category.title}
                </span>
                </Link>
              )
            })}
      </div>
  )
}

export default MobileCategory;