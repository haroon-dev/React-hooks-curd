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
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <strong className="text-danger">No Records Found</strong>
                )}
                
            </tbody>
        </table>
    )
}

export default UsersTable;
