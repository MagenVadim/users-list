import './App.scss';
import Users from './Components/Users/Users'
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  useEffect(()=>{
    fetch('https://reqres.in/api/users')
    .then((res)=>res.json())
    .then((json)=>setUsers(json.data))
    .catch((err)=>{
      console.warn(err);
      alert('Error with users getting')
    }).finally(()=> setLoading(false))
  }, []);

  return (
    <div className="App">
      <Users searchValue={searchValue} items={users} isLoading={isLoading}/>
    </div>
  );
}

export default App;
