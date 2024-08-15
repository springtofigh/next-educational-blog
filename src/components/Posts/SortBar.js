import { AdjustmentsIcon } from "@heroicons/react/outline";

function SortBar() {
  return (
    <div className="bg-slate-100 rounded-xl px-4 flex items-center">
          <div className="flex items-center gap-x-2 ml-2">
            <AdjustmentsIcon className='w-6 h-6'/>
            <span className='text-gray-700'>مرتب سازی:</span>
          </div>
          <ul className="flex items-center gap-x-4">
            <li className='cursor-pointer text-gray-700 py-4'>پر بازدیدترین</li>
            <li className='cursor-pointer text-gray-700 py-4'>محبوب ترین</li>
            <li className='cursor-pointer text-gray-700 py-4'>جدید ترین</li>
          </ul>
    </div>
  )
}

export default SortBar;