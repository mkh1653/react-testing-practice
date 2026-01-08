import { useState } from "react";
import UserForm from "./components/UserForm";
import Userlist from "./components/UserList";
import type { User } from "./components/types/User";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = ({ name, email }: { name: string; email: string }) => {
    const newUser = {
      name,
      email,
      id: `${users.length + 1}${name}_${email}`,
    };
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <div
      className='min-h-screen w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-base-200 p-6'
      data-theme='light'>
      <div className='card shadow-xl bg-base-300'>
        <div className='card-body'>
          <UserForm onAddUser={addUser} />
        </div>
      </div>
      <div className='card shadow-xl bg-base-300 lg:col-span-2'>
        <div className='card-body'>
          <Userlist users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;
