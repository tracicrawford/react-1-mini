import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      picture: "",
      name: ""
    };
  }

updatePicture(value) {
  this.setState({ picture: value });
}

updateName(value) {
  this.setState({ name: value});

}
addFriend() {
  const { friends, picture, name } = this.state;
  let copy = friends.slice();
  copy.push({picture, name});
  this.setState({friends: copy, name: "", picture: ""});
}

  render() {
    console.log("this.state", this.state);
    const friends = 
    this.state.friends.map((friend, i) => {
      this.return ( 
    return (
      <div>
          <img src={friend.picture} />
          <span>{friend.name}</span>
        </div>
      );
    });
    return (
      <div className="App">
        <span>Picture:</span>
        <input value= {this.state.picture} 
        onChange={e => {this.updatePicture(e.target.value);
        }}
        />

        <span>Name:</span>
        <input value = {this.state.name}
        onChange = {e => this.updateName(e.target.value)} 
        />

        <button onClick={() => this.addFriend()}>Add Friend</button>
        {friends}
      </div>
    );
  }
}
export default App;

