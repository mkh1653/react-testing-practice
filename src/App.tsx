import { useState } from "react";
import UserForm from "./components/UserForm";
import Userlist from "./components/UserList";
import type { User } from "./components/types/User";

const App = () => {
  const [users, setUsers] = useState<User[]>([
    {id: "1", name: "mmm", email: "mmmm@gmail.com"},
    {id: "2", name: "mmm", email: "mmmm@gmail.com"},
    {id: "3", name: "mmm", email: "mmmm@gmail.com"},
    {id: "4", name: "mmm", email: "mmmm@gmail.com"},
    {id: "5", name: "mmm", email: "mmmm@gmail.com"},
    {id: "6", name: "mmm", email: "mmmm@gmail.com"},
    {id: "7", name: "mmm", email: "mmmm@gmail.com"},
    {id: "8", name: "mmm", email: "mmmm@gmail.com"},
    {id: "9", name: "mmm", email: "mmmm@gmail.com"},
    {id: "10", name: "mmm", email: "mmmm@gmail.com"},
    {id: "11", name: "mmm", email: "mmmm@gmail.com"},
    {id: "12", name: "mmm", email: "mmmm@gmail.com"},
    {id: "13", name: "mmm", email: "mmmm@gmail.com"},
    {id: "14", name: "mmm", email: "mmmm@gmail.com"},
    {id: "15", name: "mmm", email: "mmmm@gmail.com"},
    {id: "16", name: "mmm", email: "mmmm@gmail.com"},
    {id: "17", name: "mmm", email: "mmmm@gmail.com"},
    {id: "18", name: "mmm", email: "mmmm@gmail.com"},
    {id: "19", name: "mmm", email: "mmmm@gmail.com"},
    {id: "20", name: "mmm", email: "mmmm@gmail.com"},
    {id: "21", name: "mmm", email: "mmmm@gmail.com"},
  ]);

  const addUser = ({ name, email }: { name: string; email: string }) => {
    const newUser = {
      name,
      email,
      id: `${users.length + 1}${name}_${email}`,
    };
    setUsers((prev) => [...prev, newUser]);
  };

  const removeUser = (id: string) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <div
      className='max-h-screen h-screen max-w-screen overflow-hidden w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-base-200 p-6'
      data-theme='light'>
      <div className='card shadow-xl bg-base-300'>
        <div className='card-body'>
          <h1 className='card-title capitalize font-bold text-5xl mb-4'>
            create user
          </h1>
          <UserForm onAddUser={addUser} />
        </div>
      </div>
      <div className='card shadow-xl bg-base-300 lg:col-span-2 h-full min-h-0'>
        <div className='card-body overflow-hidden'>
          <h1 className='card-title capitalize font-bold text-5xl mb-4'>
            users list
          </h1>
          <div className="overflow-y-auto">
            <Userlist users={users} onDelete={removeUser} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
