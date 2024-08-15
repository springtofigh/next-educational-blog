import axios from 'axios';

function postPage({ post }) {
  console.log(post);
  
  return (
    <div>postPage</div>
  )
}

export default postPage;

export async function getServerSideProps(context) {
  const { query } =  context
  
  const { data: {data} } = await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`);

  return { props: { post: data } }
}