import React from 'react';

const Story = ({ profile }) => {
    return (
        <div>
            <img src={profile.avatar} alt="user" />
            <p>{profile.username}</p>
        </div>
    )
}

export default Story;