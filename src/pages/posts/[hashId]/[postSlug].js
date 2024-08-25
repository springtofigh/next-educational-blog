import { BookmarkIcon, LinkIcon } from "@heroicons/react/outline";
import { BookmarkIcon as SolidBookmarkIcon } from "@heroicons/react/solid";
import { convertToPersianNumbers } from "@/utils/toPersianNumbers";
import axios from 'axios';
import Link from 'next/link';
import PostInteraction from "@/components/Posts/PostInteraction";
import { IoLogoLinkedin, IoLogoTwitter  } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from "react";
import PostList from "@/components/Posts/PostList";
import PostComments from "@/components/Posts/PostComments";
import toLocalDate from "@/utils/toLocalDate";
import Layout from '@/containers/Layout';


function postPage({ post }) {
  const [copied, setCopied] = useState(false);
  const copyHandler = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000);
  }

  return (
    <Layout>
      <div className="md:max-w-screen-lg container mx-auto">
      <header className='max-w-screen-md flex flex-col gap-y-5 md:flex-row md:justify-between md:items-start mx-auto mb-12'>
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
            <span className="mx-1">{toLocalDate(post.createdAt)}</span>
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
      <main className="prose prose-xl prose-slate prose-h1:text-xl md:prose-h1:text-3xl prose-h1:font-black prose-h2:text-xl md:prose-h2:text-2xl prose-h2:font-extrabold prose-p:text-base prose-p:leading-8 md:prose-p:text-lg md:prose-p:leading-10 prose-img:rounded-xl prose-a:text-blue-600 mb-8 mx-auto max-w-screen-md">
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
        <ul className='flex items-center flex-wrap gap-x-4 mb-6'>
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
        <div className="flex items-center flex-col gap-y-8 md:flex-row md:justify-between">
          <PostInteraction post={post} className="w-full justify-evenly md:w-auto"/>
          {/* Share media btns */}
          <div className="flex items-center gap-x-6 justify-between w-full md:w-auto">
          <div className="flex items-center md:gap-x-4 gap-x-6 w-full md:w-auto">
            <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${post.hashId}/${post.slug}`}
            target="_blank"
            className="block"
            rel="noreferrer"
            >
              <IoLogoLinkedin size={30} className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer" />
            </a>
            <a
            href={`https://twitter.com/share?text=${post.title}&url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${post.hashId}/${post.slug}`}
            target="_blank"
            className="block"
            rel="noreferrer"
            >
              <IoLogoTwitter size={24} className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer" />
            </a>
            <a
            href={`https://telegram.me/share/url?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${post.hashId}/${post.slug}&text=${post.title}`}
            target="_blank"
            className="block"
            rel="noreferrer"
            >
              <FaTelegram size={24} className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer" />
            </a>
          </div>
          <div className='relative'>
          <CopyToClipboard 
            text={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${post.hashId}/${post.slug}`}
            onCopy={copyHandler}>
            <div className="flex items-center bg-gray-100 px-3 py-1 text-gray-600 border rounded-2xl gap-x-2 text-sm cursor-pointer md:text-base">
              <span>کپی&nbsp;لینک</span>
              <MdContentCopy size={24} />
            </div>
          </CopyToClipboard>
          {
            copied && <span className='absolute top-0 left-0 px-3 py-1 rounded-2xl bg-blue-500 text-white text-sm'>کپی شد</span>
          }
          </div>
          </div>
        </div>
      </section>
      <section className="mb-20">
        <h2 className='font-extrabold text-2xl md:text-3xl mb-8'>
          پست های مشابه
        </h2>
        <div className='grid grid-cols-6 gap-8'>
        <PostList blogsData={post.related} />
        </div>
      </section>
      {/* Post Comments */}
      <PostComments post={post} />
      </div>
    </Layout>
  )
}

export default postPage;

export async function getServerSideProps(context) {
  const { query } =  context
  
  const { data: {data} } = await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`);

  return { props: { post: data } }
}