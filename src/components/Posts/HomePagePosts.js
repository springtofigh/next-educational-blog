import Link from 'next/link';

function HomePagePosts({ blogsData }) {
  return (
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
  )
}

export default HomePagePosts;