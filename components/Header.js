import React from 'react'
import Image from "next/image";

const Header = () => {
    return (
        <div className='flex justify-between max-w-6xl'>
            {/* Left */}
            <div className='relative w-24'>
                <Image src="https://links.papareact.com/ocw" alt='logo' layout='fill' objectFit='contain' />
            </div>

            {/* Center */}

            {/* Right */}

        </div>
    )
}

export default Header;