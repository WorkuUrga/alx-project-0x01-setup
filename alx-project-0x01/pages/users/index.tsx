import React from 'react';
import UserCards from '@/components/common/UserCard';
import { UserProps } from '@/interfaces'; 

interface UserPageProps {
  posts: UserProps[]; 
}

const User: React.FC<UserPageProps> = ({ posts }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((user) => (
          <UserCards
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            phone={user.phone}
            website={user.website}
            address={user.address}
            company={user.company}
          />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts: UserProps[] = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default User;
