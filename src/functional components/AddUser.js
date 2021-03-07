import React, {useState} from 'react';

const AddUser = (props) => {
    const addFormState= {id: null, name: '', username: ''}
    const [user, setUser]= useState(addFormState);

    const handleInput= (e) => {
        const {name, value}= e.target;
        setUser({...user, [name]: value});
    }

    const submitForm= (e) => {
        e.preventDefault();
        if(!user.name || !user.username) return;
        props.addUser(user);
        setUser(addFormState);
    }

    return (
        <form onSubmit={submitForm}>
            <div className="form-group">
                <label>Name: </label>
                <input type="text" 
                    name="name" 
                    className="form-control"
                    value={user.name} 
                    onChange={handleInput} />
            </div>
            <div className="form-group">
                <label>Nsername: </label>
                <input type="text" 
                    name="username" 
                    className="form-control"
                    value={user.username}
                    onChange={handleInput} />
            </div>
            <button className="btn btn-primary">Add</button>
        </form>
    )
}

export default AddUser;
