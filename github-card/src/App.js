// import './App.css';
import React from 'react';
import UserCard from './components/UserCard'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Github User Cards</h1>
          <UserCard/>
      </div>
    )
  }
}

export default App;
