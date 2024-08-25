import React from 'react'
import SingleComment from './SingleComment';

function ReplyComment({ comments, parentCommentId }) {
    return comments.map((comment) =>{
      return (
          parentCommentId === comment.responseTo && ( 
            comment.status === 2 && <div className='mr-5'>
            <React.Fragment key={comment._id}>
          <SingleComment comment={comment} />
          <ReplyComment comments={comments} parentCommentId={comment._id} />
        </React.Fragment>
          </div>
          )
      );
    });
  };
  
  export default ReplyComment;