import React, { useEffect } from 'react';
import faker from "faker";

const Stories = () => {
    useEffect(() => {
        // generating fake data using faker.js
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            i
        }))
        console.log(suggestions);
    }, [])

    return (
        <div>
            Stories
        </div>
    )
}

export default Stories