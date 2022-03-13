import React from 'react';
import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import { HeartIconFilled } from "@heroicons/react/solid";

const Post = ({ post }) => {
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
            <HeartIcon className='btn' />
            <ChatIcon className='btn' />
            <PaperAirplaneIcon className='btn' />

            {/* Caption */}

            {/* Comments */}

            {/* Input */}
        </div>
    )
}

export default Post