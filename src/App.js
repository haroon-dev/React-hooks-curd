import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersTable from './functional components/UsersTable';
import AddUser from "./functional components/AddUser"; 

const App= () => {
  const userData= [
    {"id": 1, "name": "Leanne Graham", "username": "Bret"},
    {"id": 2, "name": "Ervin Howell", "username": "Antonette"},
    {"id": 3, "name": "Clementine Bauch", "username": "Samantha"}
  ];

  const [users, setUsers]= useState(userData);

  const addUser = (user) => {
    user.id= users.length + 1;
    setUsers([...users, user]);
  }

  const deleteUser = (id) => {
      setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <div className="container pt-3">
      <h1 className="text-center mb-5">React Hooks Curd</h1>
      <div className="row">
        <div className="col-lg-5">
          <AddUser addUser={addUser}/>
        </div>
        <div className="col-lg-7">
          <UsersTable users={users} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
