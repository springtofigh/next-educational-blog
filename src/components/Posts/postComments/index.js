import React, { useState } from "react";
import SingleComment from "./SingleComment";
import CommentForm from "./commentForm";

function PostComments({ post }) {
  const [commentValue, setCommentValue] = useState(" ");
  return (
    <div>
        <h2 className="font-black text-2xl mb-8">نظرات</h2>
        {post.comments.map((comment) => {
                return !comment.responseTo && comment.status === 2 && <React.Fragment key={comment._id}>
                  <SingleComment comment={comment} />
                </React.Fragment>
            })}

            {/* Send Comments */}
            <div className="mt-8">
                <span className="font-bold md:text-lg">ارسال نظر جدید</span>
                <CommentForm comment={commentValue} setComment={setCommentValue} />
            </div>
    </div>
  )
}

export default PostComments;