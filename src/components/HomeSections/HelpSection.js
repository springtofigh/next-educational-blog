
function HelpSection() {
  return (
    <section className='pt-25 sm:pt-40'>
      <div className='flex items-center justify-center'>
      <div>
        {/* Section Title */}
      <div className='flex sm:items-end justify-between flex-col mx-4 sm:flex-row gap-x-4 gap-y-6 mb-9 sm:mb-13'>
        <div className='flex flex-col items-start gap-y-2.5'>
          <h3 className='relative text-base md:text-lg text-gray-700 dark:text-gray-400'>آخرین مقالات ما</h3>
          <p className='font-semiBold text-xl md:text-2xl'>
              مطالب بروز برنامه نویسی و تکنولوژی
          </p>
        </div>
      </div>
      {/* Help Section */}
      <div className='grid grid-rows-2 md:grid-cols-2 gap-6 sm:gap-7 cursor-default'>
        {/* Help Card */}
        <div className='flex flex-col lg:flex-row items-center p-5 lg:p-6 bg-white dark:bg-darker rounded-xl'>
          <div className='class="flex justify-center lg:justify-end items-center w-[94px] h-13 lg:w-13 lg:h-[94px] mb-11 lg:mb-0 lg:ml-11 bg-amber-50 dark:bg-amber-400/20 rounded-full"'>
            <svg class="size-13 text-amber-400 translate-y-1/2 lg:translate-y-0 lg:-translate-x-1/2">
                <use href="#chat-bubble-left-right-services"></use>
            </svg>
          </div>
          <div>
            <h4 className='lg:text-lg font-bold'>
            سراغ حرفه ای ها رفتیم
            </h4>
            <p className="text-sm lg:text-base mt-3.5 lg:mt-2 text-gray-700 dark:text-gray-400">
            به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید.
            </p>
          </div>
        </div>
      </div>
      </div>
      </div>
    </section>
  )
}

export default HelpSection;