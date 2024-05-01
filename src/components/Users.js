import React, { Component } from "react";
import User from "./User";
import 'bootstrap/dist/css/bootstrap.min.css';


class Users extends Component {
    render() {
        const { users, deleteUser } = this.props;
        return (
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">EMAİL</th>
                        <th scope="col">DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            const {id,name,email} = user;

                            return <User
                                key={id}
                                id={id}
                                name={name}
                                email={email}
                                deleteUser={deleteUser}/>

                        })
                    }
                </tbody>
                
            </table>
        )
    }
}

export default Users;