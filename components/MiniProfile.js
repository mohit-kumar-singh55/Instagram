import React from 'react';
import { signOut, useSession } from 'next-auth/react';

const MiniProfile = () => {
    const { data: session } = useSession();
    console.log(session);

    return (
        <div className='flex items-center justify-between mt-14 ml-10'>
            {session && (
                <>
                    <img className='w-16 h-16 rounded-full border p-[2px]' src={session?.user?.image} alt="user" />
                    <div className='flex-1 mx-4'>
                        <h2 className='font-bold'>{session?.user?.username}</h2>
                        <h3 className='text-sm text-gray-500'>Welcome to Instagram</h3>
                    </div>
                    <button className='text-blue-400 text-sm font-semibold' onClick={signOut}>Sign Out</button>
                </>
            )}
        </div>
    )
}

export default MiniProfile;