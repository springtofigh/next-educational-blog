import PostList from "@/components/Posts/PostList";
import MobileCategory from "@/components/Posts/MobileCategory";
import SortBar from "@/components/Posts/SortBar";
import DesktopCategory from "@/components/Posts/DesktopCategory";
import queryString from 'query-string';
import Layout from '@/containers/Layout';
import http from '@/services/httpService';


function blogCategory({ blogsData, postCategories }) {
  return (
    <Layout> 
    <div className="container mx-auto lg:max-w-screen-xl px-4 md:px-0">
            {/* Mobile category */}
              <MobileCategory postCategories={postCategories} />
        <div className='grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] min-h-screen'>
            <div className='hidden md:block md:row-span-2 md:col-span-3'>
              <DesktopCategory postCategories={postCategories} />
            </div>
            {/* Desktop sortbar */}
            <div className='hidden md:block md:col-span-9'>
              <SortBar />
            </div>
            {/* Blogs Section */}
            <div className='grid grid-cols-6 gap-4 md:col-span-9'>
              <PostList blogsData={blogsData.docs}/>
            </div>
        </div>
    </div>
    </Layout>
  )
}

export default blogCategory;


export async function getServerSideProps(context) {
  const { params, query, req } = context;

  // Create an object for the query parameters
  const apiParams = {
    page: 1,
    limit: 6,
    categorySlug: params.CategorySlug, // Ensure this matches what your backend expects
    ...query // This will merge any additional query parameters from the URL
  };

  // Construct the query string using query-string
  const queryStringified = queryString.stringify(apiParams);
  
  // Make the request to API
  const { data: result } = await http.get(`/posts?${queryStringified}`,{ 
    headers: {
    cookie: req.headers.cookie || "",
    },
  });
  const { data: postCategories } = await http.get('/post-category');
  const { data } = result || { data: [] }; // against undefined result

  return {
    props: {
      blogsData: data,
      postCategories: postCategories.data
    }
  };
}

