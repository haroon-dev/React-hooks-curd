import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersTable from './functional components/UsersTable';

const App= () => {
  const userData= [
    {"id": 1, "name": "Leanne Graham", "username": "Bret"},
    {"id": 2, "name": "Ervin Howell", "username": "Antonette"},
    {"id": 3, "name": "Clementine Bauch", "username": "Samantha"}
  ];

  const [users, setUsers]= useState(userData);
  return (
    <div className="container pt-3">
      <h1 className="text-center mb-5">React Hooks Curd</h1>
      <div className="row">
        <div className="col-lg-5"></div>
        <div className="col-lg-7">
          <UsersTable users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
