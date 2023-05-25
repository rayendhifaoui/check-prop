import React from 'react';
import './App.css';
import Profile from './profile/profile';

function App() {
  const handleName=(name) => alert('My name is ${name}');
  return (
    <div className="App">
      <Profile fullName="rayen me" bio = "i'm 20 years old and im employeed "profession = "emloyeed" handleName={handleName}>
        <img src='/my photo.jpg' alt='me' style={{with:200,height:180,border:'solid red 2px'}}></img>

      </Profile>


      </div>

  );
}
export default App;