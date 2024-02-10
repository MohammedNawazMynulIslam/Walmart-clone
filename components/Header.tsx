import { Grid2X2, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export const Header = () => {
  return (
    <header className='flex bg-walmart items-center px-10 py-7 space-x-5'>
        <Link href={"/"}>
            <Image
            src="http://links.papareact.com/yur" alt="logo" width={150} height={150}
            />
        </Link>

{/* search bar */}
<form className='flex items-center bg-white rounded-full w-full flex-1'>
<input className='flex-1 px-4 rounded-l-full outline-none placeholder:text-sm' type="text" placeholder="Search for products"/>
<button type="submit">
<Search className='rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer'/>
</button>
</form>

<div>
  <Link href="/" className='hidden xl:flex text-white font-bold items-center space-x-2 text-sm'>
    <Grid2X2 size={20}/>

    <p>Departments</p>
  </Link>
</div>

    </header>
  )
}
