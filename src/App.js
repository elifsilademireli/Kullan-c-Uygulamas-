import React, { Component } from 'react';
import AddUser from './components/AddUser';
import Users from './components/Users';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  
  constructor(props){
    super(props);
    this.deleteUser= this.deleteUser.bind(this);
    this.state = {
      users: [
        {
          id:1,
          name: "Elif Sıla DEMİRELİ",
          email: "elifsdemireli@gmail.com"
        },
        {
          id:2,
          name: "Defne DEMİRELİ",
          email: "ddemireli@gmail.com"
        },
        {
          id:3,
          name: "Cevahir YILMAZ",
          email: "cyilmaz@gmail.com"
        }
      ]
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.AddUser= this.AddUser.bind(this);
  }

  AddUser(newUser){
    let updateUsers=this.state.users;
    updateUsers.push(newUser);

    this.setState({
      users: updateUsers
    })
  }
  
  deleteUser(id){
    let updateUsers= this.state.users;
    updateUsers=updateUsers.filter(user => user.id !==id);
    this.setState({
      users: updateUsers
    })

  }

  render(){
    return(
      <div className="container">
        <h4>UserApp</h4>
        <hr/>
        <AddUser AddUser={this.AddUser} />
        <hr/>
        <Users deleteUser={this.deleteUser} users={this.state.users}/>


      </div>
    );
  }
}

export default App;
