import React, { useState, useEffect } from 'react';
import faker from "@faker-js/faker";

const Suggestions = () => {
    const [suggestions, setSuggetions] = useState([]);

    useEffect(() => {
        const suggetions = [...Array(5)].map((_, i) => (
            {
                ...faker.helper.contextualCard(),
                id: i
            }
        ))
    }, [])

    return (
        <div>Suggestions</div>
    )
}

export default Suggestions;