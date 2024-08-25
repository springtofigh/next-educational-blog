
function CommentForm({ comment, setComment }) {
  return (
    <form>
        <textarea className="focus:ring-primary p-4 rounded w-full border-none 
        ring-2 ring-slate-300 my-4 shadow-sm focus:outline-none focus:ring-2
        dark:focus-within:ring-purple-700"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="نظرت رو برام بنویس ..."
        />
        <button className="mt-4 mx-auto py-4 w-full sm:w-56 bg-violet-600 rounded-xl text-white px-3 md:text-lg">
            ارسال نظر
        </button>
    </form>
  )
}

export default CommentForm;