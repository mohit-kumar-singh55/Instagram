import React, { useEffect, useState } from 'react';
import faker from "@faker-js/faker";
import Story from "./Story";
import { useSession } from 'next-auth/react';

const Stories = () => {
    const { data: session } = useSession();

    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        // generating fake data using faker.js
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i
        }))
        setSuggestions(suggestions);
    }, [])

    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll'>
            {session && (
                <Story username={session?.user?.username} image={session?.user?.image} />
            )}

            {suggestions.map((profile) => (
                <Story key={profile.id} username={profile.username} image={profile.avatar} />
            ))}
        </div>
    )
}

export default Stories