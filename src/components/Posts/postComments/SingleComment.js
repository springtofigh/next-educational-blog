import toLocalDate from "@/utils/toLocalDate";
import { UserIcon } from "@heroicons/react/outline";
import { useState } from "react";
import CommentForm from './CommentForm';

function SingleComment({ comment, postId }) {
  const [onReply, setOnReply] = useState(false);
  return (
    <div className="border border-gray-300 rounded p-4 mb-8">
      <div className="flex items-center justify-start">
      <UserIcon className="w-12 h-12 stroke-gray-400" strokeWidth={1} />
        <div className="flex flex-col justify-between mr-4">
          <span className="text-sm text-gray-600 block">{comment.writer?.name}</span>
          <span className="text-xs text-gray-500 block mt-2 dark:text-slate-500">{toLocalDate(comment.createdAt)}</span>
        </div>
      </div>
      <div className="mt-4 leading-10">{comment.content}</div>
      <button 
      className="text-sm p-4 text-blue-600 cursor-pointer"
      onClick={() => setOnReply(!onReply)}>
        {onReply ? "بی‌خیال" : "پاسخ به"}
      </button>
      {onReply && 
        <div className="mt-4">
          <span className="text-gray-500 text-sm"> در حال پاسخ به {comment.writer?.name}</span>
          <CommentForm postId={postId} responseTo={comment._id} setOnReply={setOnReply} />
        </div>
      }
    </div>
  )
}

export default SingleComment