import React from "react";
import type { User } from "./types/User";

interface UserListProps {
  users: User[];
}

const Userlist: React.FC<UserListProps> = ({ users }) => {
  if (!users.length) {
    return (
      <h1 className='font-title text-2xl md:text-3xl lg:text-4xl font-bold'>
        No user, list is empty
      </h1>
    );
  }

  return (
    <ul className='list bg-base-100 rounded-box'>
      {users.map((user) => (
        <li className='list-row hover:shadow-lg transition-all duration-300' key={user.id}>
          <a href=''>
            <p className="font-bold capitalize">{user.name}</p>
            <p className='text-xs font-semibold opacity-60'>{user.email}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Userlist;
