import { HeartIcon, BookmarkIcon, AnnotationIcon, ClockIcon } from "@heroicons/react/outline";
import Link from 'next/link';


function PostList({ blogsData }) {
  return (
    blogsData.docs.map((blog, index) => {
        return (
          <div key={index} 
          className='col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-3xl p-2 flex flex-col max-h-[330px]'>
              {/* COVER IMAGE */}
            <div className='aspect-w-16 aspect-h-9 mb-6'>
            <Link href={`posts/${blog.hashId}/${blog.slug}`}>
            <img src={blog.coverImage} alt='' className='rounded-2xl w-full h-full object-center object-cover'/>
            </Link>
            </div>
              {/* BLOG CONTENT */}
            <div className='bg-gray-50 p-2 rounded-2xl flex flex-col w-full justify-between flex-1'>
            <Link href={`posts/${blog.hashId}/${blog.slug}`}>
            <h2 className="mb-4 text-bold">{blog.title}</h2>
            </Link>
              {/* BLOG DATA */}
            <div>
              {/* BLOG AUTHOR-CATEGORY */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
              <img src="/images/avatar.jpg" alt="بهار توفیق" className="rounded-full w-6 h-6 ring-2 ring-violet-600 ml-2" />
                <span>{blog.author.name}</span>
              </div>
              <Link href={`/blogs/${blog.category.englishTitle}`}>
                <span className='text-xs px-2 py-1 rounded-xl bg-purple-300 text-purple-600 hover:text-purple-300 hover:bg-purple-600 cursor-pointer transition-all duration-300'>{blog.category.title}</span>
              </Link>
              </div>
            {/* BLOG INTERACTION */}
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-x-2'>
                  <button className='flex items-center bg-gray-200 p-0.5 rounded'>
                    <AnnotationIcon className='w-4 h-4 stroke-gray-500'/>
                    <span className='textxs text-gray-500 font-bold leading-3'>{blog.commentsCount}</span>
                  </button>
                  <button className='flex items-center bg-gray-200 p-0.5 rounded'>
                    <HeartIcon className='w-4 h-4 stroke-red-500'/>
                    <span className='text-xs text-red-500 font-bold leading-3'>{blog.likesCount}</span>
                  </button>
                  <button className='flex items-center bg-gray-200 p-0.5 rounded'>
                    <BookmarkIcon className='w-4 h-4 stroke-blue-500'/>
                  </button>
                </div>
                <div className='flex items-center text-gray-400 text-[10px] font-bold'>
                  <ClockIcon className='w-4 h-4 stroke-gray-400 ml-1'/>
                  <span className='ml-1'>زمان مطالعه:</span>
                  <span className='ml-1 leading-3'>{blog.readingTime}</span>
                  <span>دقیقه</span>
                </div>
              </div>
            </div>
            </div>
          </div>
        )
      })
  )
}

export default PostList;