import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export const Header = () => {
  return (
    <header>
        <Link href={"/"}>
            <Image
            src="http://links.papareact.com/xsi" alt="logo" width={150} height={150}
            />
        </Link>
    </header>
  )
}
