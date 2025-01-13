import Layout from '@/containers/Layout';
import { useAuth } from '@/context/AuthContext';
import http from '@/services/httpService';
import queryString from 'query-string';
import HeroSection from '@/components/HomeSections/HeroSection';
import HomeDetailsContainer from '@/common/HomeDetailsContainer';
import HelpSectoin from '@/components/HomeSections/HelpSectoin';

export default function Home({ blogsData, postCategories }) {
  const user = useAuth();
  console.log(user);
  console.log(blogsData);
  
  return (
    <Layout>
      <HeroSection/>
      <HomeDetailsContainer blogsData={blogsData.docs}/>
      <HelpSectoin/>
    </Layout>
  )
}



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