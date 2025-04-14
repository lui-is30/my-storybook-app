import React from "react";

type UserCardProps = {
    name: string;
    email: string;
}

export const UserCard: React.FC<UserCardProps> = ({ name, email }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    );
};