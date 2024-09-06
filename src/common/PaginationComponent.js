import Pagination from '@mui/material/Pagination';
import { useRouter } from 'next/router';
import routerPush from '@/utils/routerPush';

function PaginationComponent({ page, totalPages }) {
    const router = useRouter();
    const pageHandler = (event, page) => {
    router.query.page = page;
    routerPush(router)
    }

  return (
    <div className='col-span-6 flex justify-center' dir='ltr'>
      {totalPages > 1 && (
                <Pagination 
                count={totalPages} 
                page={page} 
                onChange={pageHandler} 
                color="secondary"/>
      )
      }
    </div>
  )
}

export default PaginationComponent;


