import HomePagePosts from '@/components/Posts/HomePage/HomePagePosts';
import HelpSection from '@/components/HomeSections/HelpSection';
import PopularPosts from '@/components/Posts/HomePage/PopularPosts';
import CategoryPosts from '@/components/Posts/HomePage/CategoryPosts';

function HomeDetailsContainer({ blogsData, postCategories }) {
    console.log(blogsData);
  return (
    <main className='max-w-[1920px] mx-auto overflow-x-hidden'>
        <HomePagePosts blogsData={blogsData} />
        <CategoryPosts postCategories={postCategories} />
        <PopularPosts postCategories={postCategories} />
        <HelpSection />
    </main>
  )
}

export default HomeDetailsContainer;

