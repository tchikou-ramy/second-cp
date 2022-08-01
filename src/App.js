// import React from 'react';
import logo from './logo.svg';
import './App.css';
import image from './image.jpg';
import myVideo from './vid.mp4';

// const users = [
//   { name: "John Doe", id: 1 },
//   { name: "Jane Doe", id: 2 },
//   { name: "Billy Doe", id: 3 }
// ];

// const userItems = users.map ((user) => <li key={user.id} >{user.name} </li> )
function App() {
  return (

    <div classNAme="style">

<h1 className="title">Tchikou Ramy</h1>

<br/>

<img src={image} alt="my profile"/>

<br/>
<img src= "/dogs.jpg" alt='my profile'/>

<div>

<video src={myVideo} width='320px'height='240px' controls/>
</div>

  </div>
);
}
export default App;
