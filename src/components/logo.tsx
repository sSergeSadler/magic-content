import React from 'react'
import Image from 'next/image';
import { MuseoModerno } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const museo = MuseoModerno({
    weight: "700",
    subsets: ["latin"]
});

const logo = () => {
  return (
    <Link href='/' className='flex flex-col items-center'>
        <Image src="/logo.svg" width={64} height={64} alt='logo'/>
        <h2 className={cn(museo.className, "text-xl")}>Magic Content</h2>        
    </Link>
  )
}

export default logo;
