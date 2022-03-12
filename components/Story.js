import React from 'react';

const Story = ({ profile }) => {
    return (
        <div className='hover:scale-110 transition-all duration-300 cursor-pointer'>
            <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain' src={profile.avatar} alt="user" />
            <p className='text-xs w-14 truncate text-center'>{profile.username}</p>
        </div>
    )
}

export default Story;