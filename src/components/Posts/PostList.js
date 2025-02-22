import { ClockIcon } from "@heroicons/react/outline";
import Link from 'next/link';
import PostInteraction from "./PostInteraction";
import { convertToPersianNumbers } from "@/utils/toPersianNumbers";


function PostList({ blogsData }) {
  return (
    blogsData.map((blog, index) => {
        return (
          <div key={index} 
          className='col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-3xl p-2 flex flex-col max-h-[350px]'>
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
            <div className='flex items-center justify-between mb-4'>
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
                <PostInteraction post={blog} isSmall />
                <div className='flex items-center text-gray-400 text-[10px] font-bold'>
                  <ClockIcon className='w-4 h-4 stroke-gray-400 ml-1'/>
                  <span className='ml-1'>زمان مطالعه:</span>
                  <span className='ml-1 leading-3'>{convertToPersianNumbers(blog.readingTime)}</span>
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