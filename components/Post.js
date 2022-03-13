import React from 'react';
import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import { HeartIconFilled } from "@heroicons/react/solid";

const Post = ({ post }) => {
    return (
        <div>
            {/* Header */}
            <div>
                <img src={post.userImg} alt="user" />
                <p>{post.username}</p>
                <DotsHorizontalIcon />
            </div>

            {/* Img */}

            {/* Buttons */}

            {/* Caption */}

            {/* Comments */}

            {/* Input */}
        </div>
    )
}

export default Post