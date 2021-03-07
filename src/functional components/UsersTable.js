import React from 'react';

const UsersTable = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button className="btn btn-success mr-3">Edit</button>
                                <button onClick={() => props.deleteUser(user.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="3" className="text-center">No Records Found</td>
                    </tr>
                )}
                
            </tbody>
        </table>
    )
}

export default UsersTable;
