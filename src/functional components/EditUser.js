import React, {useState, useEffect} from 'react';

const EditUser = (props) => {
    const [user, setUser]= useState(props.currentUser);
    useEffect(() => {
        setUser(props.currentUser)
      }, [props])

    const handleInput = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const submitForm= (e) => {
        e.preventDefault();
        props.updateUser(user.id, user);
    }

    return (
        <form onSubmit={submitForm}>
            <div className="form-group">
                <label>Name: </label>
                <input type="text" 
                    name="name" 
                    className="form-control"
                     value={user.name} 
                     onChange={handleInput} 
                    />
            </div>
            <div className="form-group">
                <label>Nsername: </label>
                <input type="text" 
                    name="username" 
                    className="form-control"
                     value={user.username}
                     onChange={handleInput} 
                    />
            </div>
            <button className="btn btn-success">Update</button>
        </form> 
    )
}

export default EditUser;
