import React from 'react';
import SingleComment from './SingleComment';

function ReplyComment({ comments, parentCommentId, postId }) {
    return comments.map((comment) =>{
      return (
          parentCommentId === comment.responseTo && ( 
            comment.status === 2 && <div className='mr-5'>
            <React.Fragment key={comment._id}>
          <SingleComment comment={comment} postId={postId} />
          <ReplyComment 
          comments={comments} 
          parentCommentId={comment._id} 
          postId={postId} 
          />
        </React.Fragment>
          </div>
          )
      );
    });
  };
  
  export default ReplyComment;