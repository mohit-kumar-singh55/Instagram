import React from 'react';
import Post from "./Post";
import faker from '@faker-js/faker';

const posts = [
    {
        id: Date.now(),
        username: faker.helpers.contextualCard().username,
        userImg: faker.helpers.contextualCard().avatar,
        img: faker.helpers.contextualCard().avatar,
        caption: "This is a post you know!"
    },
    {
        id: Date.now(),
        username: faker.helpers.contextualCard().username,
        userImg: faker.helpers.contextualCard().avatar,
        img: faker.helpers.contextualCard().avatar,
        caption: "This is a post you know!"
    },
    {
        id: Date.now(),
        username: faker.helpers.contextualCard().username,
        userImg: faker.helpers.contextualCard().avatar,
        img: faker.helpers.contextualCard().avatar,
        caption: "This is a post you know!"
    },
]

const Posts = () => {
    return (
        <div>
            {posts.map((post) => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    )
}

export default Posts;