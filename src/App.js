import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersTable from './functional components/UsersTable';
import AddUser from "./functional components/AddUser"; 
import EditUser from "./functional components/EditUser";

const App= () => {
  const userData= [
    {"id": 1, "name": "Leanne Graham", "username": "Bret"},
    {"id": 2, "name": "Ervin Howell", "username": "Antonette"},
    {"id": 3, "name": "Clementine Bauch", "username": "Samantha"}
  ];

  const intialState= {id: null, name: '', username: ''}

  const [users, setUsers]= useState(userData);
  const [editing, setEditing]= useState(false);
  const [currentUser, setCurrentUser]= useState(intialState);

  const addUser = (user) => {
    user.id= users.length + 1;
    setUsers([...users, user]);
  }

  const deleteUser = (id) => {
      setUsers(users.filter((user) => user.id !== id));
  }

  const editUser= (user) => {
      setEditing(true);
      setCurrentUser({id: user.id, name: user.name, username: user.username});
  }

  const updateUser = (id, updatedUser) => {
      setEditing(false);
      setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container pt-3">
      <h1 className="text-center mb-5">React Hooks Curd</h1>
      <div className="row">
        <div className="col-lg-5">
        {editing ? (
          <EditUser setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}/>
        ) : (
          <AddUser addUser={addUser}/>
        )}
          
        </div>
        <div className="col-lg-7">
          <UsersTable users={users} deleteUser={deleteUser} editUser={editUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
