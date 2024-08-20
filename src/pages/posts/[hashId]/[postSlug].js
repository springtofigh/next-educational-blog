import { BookmarkIcon, LinkIcon } from "@heroicons/react/outline";
import { BookmarkIcon as SolidBookmarkIcon } from "@heroicons/react/solid";
import { convertToPersianNumbers } from "@/utils/toPersianNumbers";
import axios from 'axios';
import Link from 'next/link';
import PostInteraction from "@/components/Posts/PostInteraction";

function postPage({ post }) {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <div className="md:max-w-screen-lg container mx-auto">
      <header className='flex flex-col gap-y-5 md:flex-row md:justify-between md:items-start mx-auto mb-12'>
        {/* Author */}
        <div className="flex items-stretch">
          <img src='/images/avatar.jpg' alt={post.author.name} className="w-14 h-14 md:w-20 md:h-20 rounded-full ring ring-violet-600"/>
          <div className="flex flex-col justify-between mr-4">
          <div className="flex items-center">
            <h1>بهار توفیق</h1>
            <Link href={`/blogs/${post.category.englishTitle}`}>
            <span className='text-xs px-2 py-1 border border-blue-600 rounded-xl text-blue-600 mr-3 hover:text-blue-300 hover:bg-blue-600 cursor-pointer transition-all duration-300'>{post.category.title}</span>
            </Link>
          </div>
          <span className="hidden md:block font-bold text-xs">{post.author.biography}</span>
          <div className="font-normal text-gray-400 text-xs">
            <span className="mx-1">{new Date(post.createdAt).toLocaleDateString('fa-IR')}</span>
            <span>&bull;</span>
            <span>
              <span> خواندن </span>
              <span>{convertToPersianNumbers(post.readingTime)}</span>
              <span>دقیقه</span>
            </span>
          </div>
        </div>
        </div>
        {/* Buttons */}
        <div className="flex">
          <button>
            <LinkIcon className="w-6 h-6 text-gray-500 hover:text-black cursor-pointer"/>
          </button>
          <button className="mr-4 border border-gray-300 text-gray-500 hover:text-gray-600 px-3 py-1 rounded-full flex items-start">
            <span className="ml-1 text-xs">
              {post.isBookmarked ? "ذخیره شده" : "ذخیره"}
            </span>
            {
              post.isBookmarked ? (<SolidBookmarkIcon className="w-6 h-6 fill-current"/>) : <BookmarkIcon className="w-6 h-6 stroke-current"/>
            }
          </button>
        </div>
      </header>
      <main className="prose prose-xl prose-slate prose-h1:text-xl md:prose-h1:text-3xl prose-h1:font-black prose-h2:text-xl md:prose-h2:text-2xl prose-h2:font-extrabold prose-p:text-base prose-p:leading-8 md:prose-p:text-lg md:prose-p:leading-10 prose-img:rounded-xl prose-a:text-blue-600 mb-8">
        <h1>{post.title}</h1>
        <h2>عنوان اول تستی</h2>
        <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل <a href="https://www.w3schools.com/">www.w3schools.com</a> دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
        <img src={post.coverImage}  />
        <h2>عنوان دوم تستی</h2>
        <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که <code>jsconfig.json</code> تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
        <pre dir='ltr'>
          {`module.exports = {
              content: [],
              theme: {
                extend: {}
              },
              plugins: [],
            }`}
        </pre>
      </main>
      {/* tags like bookmark */}
      <section>
        <ul className='flex items-center flex-wrap gap-x-4'>
          {["فرانت اند", "برنامه‌نویسی" , "جاوااسکریپت", "React.js"].map((tag, index) => {
            return (
              <li
              key={index}
              className="bg-gray-200 px-3 py-1 rounded-2xl text-gray-600 tesxt-sm hover:bg-gray-100 cursor-pointer mb-3 transition-all block"
              >
                {tag}
              </li>
            )
          })
          }
        </ul>
        {/* Link comment Bookmark */}
        <div>
          <PostInteraction post={post}/>
        </div>
      </section>
      </div>
    </div>
  )
}

export default postPage;

export async function getServerSideProps(context) {
  const { query } =  context
  
  const { data: {data} } = await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`);

  return { props: { post: data } }
}