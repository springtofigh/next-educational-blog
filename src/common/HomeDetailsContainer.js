import HomePagePosts from '@/components/Posts/HomePagePosts';

function HomeDetailsContainer({ blogsData }) {
    console.log(blogsData);
  return (
    <main className='max-w-[1920px] mx-auto overflow-x-hidden'>
        <HomePagePosts blogsData={blogsData}/>
    </main>
  )
}

export default HomeDetailsContainer;

