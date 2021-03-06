import React, { useEffect } from 'react';
import Image from "next/image";
import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from 'recoil';

const Header = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const [open, setOpen] = useRecoilState(modalState);

    const handleClick = () => {
        router.push('/');
    }

    return (
        <nav className='shadow-md backdrop-blur-sm sticky top-0 z-50'>
            <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
                {/* Left */}
                <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
                    <Image onClick={handleClick} src="https://links.papareact.com/ocw" alt='logo' layout='fill' objectFit='contain' />
                </div>
                <div className='relative lg:hidden w-10 flex-shrink-0 cursor-pointer'>
                    <Image onClick={handleClick} src="https://links.papareact.com/jjm" alt='logo' layout='fill' objectFit='contain' />
                </div>

                {/* Center */}
                <div className='max-w-xs'>
                    <div className='relative mt-1 p-3 rounded-md'>
                        <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                            <SearchIcon className='w-5 h-5 text-gray-500' />
                        </div>
                        <input className='w-full bg-transparent pl-10 block sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-full' type="search" placeholder='Search' />
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon onClick={handleClick} className='navbtn' />
                    <MenuIcon className='h-6 md:hidden' />

                    {session ? (
                        <>
                            <div className='relative navbtn'>
                                <PaperAirplaneIcon className='navbtn rotate-45' />
                                <div className="absolute -top-1 -right-2 text-sm w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
                            </div>
                            <PlusCircleIcon onClick={() => setOpen(true)} className='navbtn' />
                            <UserGroupIcon className='navbtn' />
                            <HeartIcon className='navbtn' />

                            <img src={session?.user?.image} onClick={signOut} alt="user_pic" className='h-10 rounded-full cursor-pointer' />
                        </>
                    ) : (
                        <button onClick={signIn}>Sign In</button>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Header;