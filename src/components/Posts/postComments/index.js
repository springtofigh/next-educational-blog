import React from 'react'
import SingleComment from "./SingleComment";
import CommentForm from "./CommentForm";
import ReplyComment from "./ReplyComment";

function PostComments({ post }) {
  return (
    <div>
        <h2 className="font-black text-2xl mb-8">نظرات</h2>
        {post.comments.map((comment) => {
                return !comment.responseTo && comment.status === 2 && (
                  <React.Fragment key={comment._id}>
                  <SingleComment comment={comment} postId={post._id} />
                  <ReplyComment
                  comments={post.comments} 
                  parentCommentId={comment._id}
                  postId={post._id}
                  />
                </React.Fragment>
                )
            })
          }
            {/* Send Comments */}
            <div className="mt-8">
                <span className="font-bold md:text-lg">ارسال نظر جدید</span>
                <CommentForm postId={post._id} responseTo={null} />
            </div>
    </div>
  )
}

export default PostComments;