import Link from 'next/link';

function CategoryPosts({ postCategories }) {
    return (
        <section>
        <div className='flex items-center justify-center'>
            <div>
            {/* Section Title */}
            <div className='flex sm:items-end justify-between flex-col mx-4 sm:flex-row gap-x-4 gap-y-6 mb-9 sm:mb-13'>
              <div className='flex flex-col items-center lg:items-start lg:mr-16 gap-y-2.5'>
                <h3 className='relative text-base md:text-lg text-gray-700 dark:text-gray-400'>دسته‌بندی مقالات</h3>
                <p className='font-semiBold text-xl md:text-2xl'>حضور درخشان ما در هر زمینه‌ای</p>
              </div>
            </div>
            {/* All categories */}
            <div className='flex flex-wrap items-center justify-center'>
            {postCategories.map(( category ) => {
              return (
                <Link key={category.id} href={`/blogs/${category.englishTitle}`}>
                    <div className='flex items-center justify-center mx-4 my-4'>
                  <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    {/* Icons perhaps */}
                    <div className="p-6">
                      <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {category.title}
                      </h5>
                    </div>
                  </div>
                    </div>
                </Link>
                
              )
            })}
            </div>
            </div>
        </div>
      </section>
      )
}

export default CategoryPosts