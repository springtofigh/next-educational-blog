import { HeartIcon, BookmarkIcon, AnnotationIcon } from "@heroicons/react/outline";
import { HeartIcon as SolidHeartIcon, BookmarkIcon as SolidBookmarkIcon } from "@heroicons/react/solid";
import { convertToPersianNumbers } from "@/utils/toPersianNumbers";

function PostInteraction({ post, isSmall }) {
    const iconSize = `${isSmall ? "w-4 h-4": "w-6 h-6"}`
  return (
    <div className={`flex items-center ${isSmall ? "gap-x-2": "gap-x-4"}`}>
    <button className='flex items-center bg-gray-200 p-0.5 rounded'>
      <AnnotationIcon className={`${iconSize} stroke-gray-500`}/>
      <span className='textxs text-gray-500 font-bold leading-3'>{convertToPersianNumbers(post.commentsCount)}</span>
    </button>
    <button className='flex items-center bg-red-200 p-0.5 text-red-500 rounded hover:bg-red-500 hover:text-red-100 transition'>
      {
            post.isLiked ?  <SolidHeartIcon className={`${iconSize} fill-current`}/> : <HeartIcon className={`${iconSize} stroke-current`} />
      }
      <span className='text-xs font-bold leading-3'>{convertToPersianNumbers(post.likesCount)}</span>
    </button>
    <button className='flex items-center bg-blue-200 p-0.5 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition'>
        {
            post.isBookmarked ? <SolidBookmarkIcon className={`${iconSize} fill-current`}/>  : <BookmarkIcon className={`${iconSize} stroke-current`} />
        }
    </button>
  </div>
  )
}

export default PostInteraction;