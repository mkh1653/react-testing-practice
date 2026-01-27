import React from "react";
import type { User } from "./types/User";

interface UserListProps {
  users: User[];
  onDelete: (id: string) => void;
}

const Userlist: React.FC<UserListProps> = ({ users, onDelete }) => {
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
        <li
          className='list-row hover:shadow-lg transition-all duration-300'
          key={user.id}
          data-testid='user-item'>
          <div className='list-col-grow cursor-pointer'>
            <p className='font-bold capitalize'>{user.name}</p>
            <p className='text-xs font-semibold opacity-60'>{user.email}</p>
          </div>
          <button
            className='btn btn-sm btn-error capitalize'
            onClick={() => {
              onDelete(user.id);
            }}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Userlist;
