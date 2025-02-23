import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Sidebar = ({ handlemenuClick }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
        const ref = useRef(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    useEffect(() => {
        const handleOutSideClick = (event) => {
          if (!ref.current?.contains(event.target)) {
            handlemenuClick()
          }
        };
    
        document.addEventListener("mousedown", handleOutSideClick);

        return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  return (
    <>
        {
            isSidebarOpen 
            && 
            <div className='overlay z-30' onClick={toggleSidebar}>
            <div
            className="fixed top-0 bottom-0 w-[300px] right-0 p-2 text-center bg-gray-900 overflow-y-auto"
            ref={ref}
            >
                <div className="text-gray-100 text-xl">
                <div className="p-2.5 mt-1 flex items-center justify-between">
                    <h1 className="font-extrabold text-gray-200 text-[24px] ml-3">
                        متاورس فارسی
                    </h1>
                    <button onClick={handlemenuClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="fill-white w-[24px] h-[24px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                <div className="h-[1px] bg-gray-600 my-2"></div>
                </div>
                <div
                className="flex items-center p-2.5 mt-3 px-4 rounded-md duration-300 cursor-pointer text-white hover:bg-violet-800"
                >
                    <Link href="#home" onClick={toggleSidebar}>
                    <span className="font-bold text-[15px] ml-4 text-gray-200">
                        خانه
                    </span>
                    </Link>
                    </div>
                <div
                className="flex items-center p-2.5 mt-3 px-4 rounded-md duration-300 cursor-pointer text-white hover:bg-violet-800"
                >
                    <span className="font-bold text-[15px] ml-4 text-gray-200">
                    <Link href="#about" onClick={toggleSidebar}>
                        درباره متاورس
                    </Link>
                    </span>
                </div>
                <div
                className="flex items-center p-2.5 mt-3 px-4 rounded-md duration-300 cursor-pointer text-white hover:bg-violet-800"
                >
                    <Link href="#explore" onClick={toggleSidebar}>
                    <span className="font-bold text-[15px] ml-4 text-gray-200">
                        جهان ها
                    </span>    
                    </Link>
                </div>
                <div
                className="flex items-center p-2.5 mt-3 px-4 rounded-md duration-300 cursor-pointer text-white hover:bg-violet-800"
                >
                    <Link href="#know-metavers" onClick={toggleSidebar}>
                    <span className="font-bold text-[15px] ml-4 text-gray-200">
                        آشنایی با متاورس
                    </span>
                    </Link>
                </div>
                <div
                className="flex items-center p-2.5 mt-3 px-4 rounded-md duration-300 cursor-pointer text-white hover:bg-violet-800"
                >
                    <Link href="#newest" onClick={toggleSidebar}>
                    <span className="font-bold text-[15px] ml-4 text-gray-200">
                        تازه ترین ها
                    </span>
                    </Link>
                </div>
                <div
                className="flex items-center p-2.5 mt-3 px-4 rounded-md duration-300 cursor-pointer text-white hover:bg-violet-800"
                >
                    <Link href="#articles" onClick={toggleSidebar}>
                    <span className="font-bold text-[15px] ml-4 text-gray-200">
                        مقالات
                    </span>
                    </Link>
                </div>
            </div>
            </div>
        }
    </>
  )
}

export default Sidebar