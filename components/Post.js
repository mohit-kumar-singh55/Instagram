import React, { useState, useEffect } from 'react';
import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import { HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from 'next-auth/react';
import { addDoc, collection, onSnapshot, serverTimestamp, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import Moment from "react-moment";

const Post = ({ post }) => {
    const { data: session } = useSession();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);

    useEffect(() => (
        onSnapshot(
            query(collection(db, 'posts', post.id, 'comments'), orderBy('timestamp', 'desc')),
            (snapshot) => setComments(snapshot.docs)
        )
    ), [db])

    useEffect(() => (
        onSnapshot(
            collection(db, 'posts', post.id, 'comments'),
            (snapshot) => setComments(snapshot.docs)
        )
    ), [db])


    const sendComment = async (e) => {
        e.preventDefault()

        const commentToSent = comment;
        setComment("");

        await addDoc(collection(db, 'posts', post.id, 'comments'), {
            comment: commentToSent,
            username: session?.user?.username,
            userImage: session?.user?.image,
            timestamp: serverTimestamp()
        })
    }
    return (
        <div className='bg-white my-7 rounded-sm border'>
            {/* Header */}
            <div className='flex items-center p-5'>
                <img className='rounded-full h-12 w-12 object-contain border p-1 mr-3' src={post.data().profileImg} alt="user" />
                <p className='flex-1'>{post.data().username}</p>
                <DotsHorizontalIcon className='h-5' />
            </div>

            {/* Img */}
            <img src={post.data().image} alt="post_Img" className='w-full object-cover' />

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
                <span className='font-bold mr-1'>{post.data().username}</span>
                {post.data().caption}
            </p>

            {/* Comments */}
            {comments.length > 0 && (
                <div className='ml-10 h-20 overflow-y-scroll'>
                    {comments.map((comment) => (
                        <div key={comment.id} className='flex items-center space-x-2 mb-3'>
                            <img className='h-7 rounded-full' src={comment.data().userImage} alt="user" />
                            <p className='text-sm flex-1'>
                                <span className='font-bold'>{comment.data().username}</span>
                                <span>{" "}</span>
                                {comment.data().comment}
                            </p>

                            <Moment fromNow className='pr-5 text-xs'>
                                {comment.data().timestamp?.toDate()}
                            </Moment>
                        </div>
                    ))}
                </div>
            )}

            {/* Input */}
            {session && (
                <form onSubmit={sendComment} className='flex items-center p-4'>
                    <EmojiHappyIcon className='h-7' />
                    <input type="text" placeholder='Add a comment...' value={comment} onChange={(e) => setComment(e.target.value)} className='border-none flex-1 focus:ring-0 outline-none' />
                    <button type='submit' disabled={!comment.trim()} className='font-semibold text-blue-400'>Post</button>
                </form>
            )}
        </div>
    )
}

export default Post