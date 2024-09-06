import { useState } from "react";
import http from "@/services/httpService";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import routerPush from "@/utils/routerPush";

function CommentForm({ postId, responseTo, setOnReply }) {
  const [commentValue, setCommentValue] = useState("");
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(commentValue, postId, responseTo);
    const data = {
      content: commentValue,
      responseTo,
    }

    http
    .post("post-comment/save-comment", data)
    .then((res) => {
      setCommentValue("");
      if(setOnReply) setOnReply(openReply => !openReply)
      toast.success(res.data.message);
      routerPush(router);
  })
    .catch((err) => {
      toast.error(err?.response?.data?.message);
    })
  }

  return (
    <form>
        <textarea className="focus:ring-primary p-4 rounded w-full border-none 
        ring-2 ring-slate-300 my-4 shadow-sm focus:outline-none focus:ring-2
        dark:focus-within:ring-purple-700"
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
        placeholder="نظرت رو برام بنویس ..."
        />
        <button 
        className="mt-4 mx-auto py-4 w-full sm:w-56 bg-violet-600 rounded-xl text-white px-3 md:text-lg"
        onClick={submitHandler}
        >
            ارسال نظر
        </button>
    </form>
  )
}

export default CommentForm;