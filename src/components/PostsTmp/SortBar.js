import routerPush from "@/utils/routerPush";
import { AdjustmentsIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useState } from "react";

const sortOptions = [
  {label: "پر بازدیدترین", id: "most"},
  {label: "محبوب ترین", id: "popular"},
  {label: "جدید ترین", id: "newest"},
]

function SortBar() {
  const router = useRouter();
  const [sort, setSort] = useState( router.query.sort || "");

  const sortHandler = (id) => {
    setSort(id);
    router.query.sort = id;
    routerPush(router)
  };

  return (
    <div className="bg-slate-100 rounded-xl px-4 flex items-center">
          <div className="flex items-center gap-x-2 ml-2">
            <AdjustmentsIcon className='w-6 h-6'/>
            <span className='text-gray-700'>مرتب سازی:</span>
          </div>
          <ul className="flex items-center gap-x-4">
            {
              sortOptions.map((sortOption) => {
                return (
                    <li 
                    className={`cursor-pointer py-4 relative text-gray-700 ${sortOption.id === sort ? "text-purple-700 font-bold" : ""}`}
                    key={sortOption.id}
                    onClick={() => sortHandler(sortOption.id)}
                    >{sortOption.label}
                    {sortOption.id === sort && <span className="h-[30px] bg-purple-700 absolute bottom-0 right-0 rounded-full"></span>}
                    </li>
                );
              })
            }
          </ul>
    </div>
  )
}

export default SortBar;