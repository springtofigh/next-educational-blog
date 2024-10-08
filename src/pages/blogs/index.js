import axios from 'axios';
import PostList from "@/components/Posts/PostList";
import MobileCategory from "@/components/Posts/MobileCategory";
import SortBar from "@/components/Posts/SortBar";
import DesktopCategory from "@/components/Posts/DesktopCategory";
import Layout from '@/containers/Layout';
import http from '@/services/httpService';
import queryString from 'query-string';
import PaginationComponent from '@/common/PaginationComponent';

function Blog({ blogsData, postCategories }) {
  return (
    <Layout>
        <div className="container mx-auto lg:max-w-screen-xl px-4 md:px-0">
                {/* Mobile category */}
                <MobileCategory postCategories={ postCategories } />
            <div className='grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] min-h-screen'>
                <div className='hidden md:block md:row-span-2 md:col-span-3'>
                <DesktopCategory postCategories={ postCategories } />
                </div>
                {/* Desktop sortbar */}
                <div className='hidden md:block md:col-span-9'>
                  <SortBar />
                </div>
                {/* Blogs Section */}
                <div className='grid grid-cols-6 gap-4 md:col-span-9'>
                  <PostList blogsData={blogsData.docs}/>
                  <PaginationComponent page={blogsData.page} totalPages={blogsData.totalPages} />
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Blog;


export async function getServerSideProps({ req, query }) {
  console.log(query);
  const { data: result } = await http.get(`/posts?${queryString.stringify(query)}`, { 
    headers: {
    cookie: req.headers.cookie || "",
    },
  });
  const { data: postCategories } = await http.get('/post-category');
  const { data } = result;

  return { props: { blogsData: data, postCategories: postCategories.data } }
}