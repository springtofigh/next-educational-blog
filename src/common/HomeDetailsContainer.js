import HomePagePosts from '@/components/Posts/HomePage/HomePagePosts';
import CategoryPosts from '@/components/Posts/HomePage/CategoryPosts';

function HomeDetailsContainer({ blogsData, postCategories }) {
    console.log(blogsData);
  return (
    <main className='max-w-[1920px] mx-auto overflow-x-hidden'>
        <HomePagePosts blogsData={blogsData} />
        <CategoryPosts postCategories={postCategories} />
    </main>
  )
}

export default HomeDetailsContainer;

