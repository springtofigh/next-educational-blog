import styles from '../../styles/Home.module.css';
import { ChevronDownIcon, AdjustmentsIcon, HeartIcon, BookmarkIcon, AnnotationIcon, ClockIcon } from "@heroicons/react/outline";
import Link from 'next/link';
import { useState } from 'react';


export default function Home() {
  
  return (
<div className='gird gap-4 md:grid-cols-12 md:grid-rows-2'>
  <div className='bg-blue-300 hidden md:block md:col-span-3'>Desktop Categories</div>
  <div className='bg-blue-300 hidden md:block'>Desktop Sort</div>
  <div className='bg-blue-300 md:col-span-9'>Blogs</div>
</div>
  )
}
