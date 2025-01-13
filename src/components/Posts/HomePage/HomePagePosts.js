import Link from 'next/link';
import { RiArrowLeftUpLine } from "react-icons/ri";


function HomePagePosts({ blogsData }) {
  return (
    <section>
      <div className='flex items-center justify-center'>
          <div>
          {/* Section Title */}
          <div className='flex sm:items-end justify-between flex-col mx-4 sm:flex-row gap-x-4 gap-y-6 mb-9 sm:mb-13'>
            <div className='flex flex-col items-start gap-y-2.5'>
              <h3 className='relative text-base md:text-lg text-gray-700 dark:text-gray-400'>آخرین مقالات ما</h3>
              <p className='font-semiBold text-xl md:text-2xl'>تازه ترین‌ها در فرانت تاپ لرن</p>
            </div>
            <Link href='/blogs' className='flex items-center gap-x-1.5 py-1 text-gray-700 dark:text-gray-400 hover:text-purple-500 self-end transition-all'>
            <span>
              آخرین مقالات
            </span>
            <RiArrowLeftUpLine />
            </Link>
          </div>
          {/* Blog's Cards */}
          <div className='flex flex-wrap items-center justify-center'>
          {blogsData.map(( blog , index ) => {
            return (
              <div key={index} className='flex items-center justify-center mx-4 my-4'>
                <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img src={blog.coverImage} />
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      {blog.title}
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                      {blog.text} 
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <Link href={`posts/${blog.hashId}/${blog.slug}`}>
                    <span className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                      مطالعه بیشتر
                    </span>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
          </div>
          </div>
      </div>
    </section>
  )
}

export default HomePagePosts;