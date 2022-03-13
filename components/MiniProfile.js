import React from 'react'

const MiniProfile = () => {
    return (
        <div className='flex items-center justify-between mt-14 ml-10'>
            <img className='w-16 h-16 rounded-full border p-[2px]' src="https://avatars.githubusercontent.com/u/90032935?s=400&u=e77e31ecdf99c0ddcd66c0567b13d88669207d6e&v=4" alt="user" />
            <div className='flex-1 mx-4'>
                <h2 className='font-bold'>sniper.mks_55</h2>
                <h3 className='text-sm text-gray-500'>Welcome to Instagram</h3>
            </div>
            <button className='text-blue-400 text-sm font-semibold'>Sign Out</button>
        </div>
    )
}

export default MiniProfile;