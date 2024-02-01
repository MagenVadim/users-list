import './App.scss';
import Users from './Components/Users/Users'
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  return (
    <div className="App">
      <Users items={users} isLoading={isLoading}/>
    </div>
  );
}

export default App;
