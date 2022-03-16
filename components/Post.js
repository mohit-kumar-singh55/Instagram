import React from 'react';
import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import { HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from 'next-auth/react';

const Post = ({ post }) => {
    const { data: session } = useSession();

    return (
        <div className='bg-white my-7 rounded-sm border'>
            {/* Header */}
            <div className='flex items-center p-5'>
                <img className='rounded-full h-12 w-12 object-contain border p-1 mr-3' src={post.userImg} alt="user" />
                <p className='flex-1'>{post.username}</p>
                <DotsHorizontalIcon className='h-5' />
            </div>

            {/* Img */}
            <img src={post.img} alt="post_Img" className='w-full object-cover' />

            {/* Buttons */}
            {session && (
                <div className='flex justify-between items-center px-4 pt-4'>
                    <div className='flex space-x-4'>
                        <HeartIcon className='btn' />
                        <ChatIcon className='btn' />
                        <PaperAirplaneIcon className='btn rotate-45' />
                    </div>
                    <BookmarkIcon className='btn' />
                </div>
            )}

            {/* Caption */}
            <p className='p-5'>
                <span className='font-bold mr-1'>{post.username}</span>
                {post.caption}
            </p>

            {/* Comments */}

            {/* Input */}
            {session && (
                <form className='flex items-center p-4'>
                    <EmojiHappyIcon className='h-7' />
                    <input type="text" placeholder='Add a comment...' className='border-none flex-1 focus:ring-0 outline-none' />
                    <button className='font-semibold text-blue-400'>Post</button>
                </form>
            )}
        </div>
    )
}

export default Post