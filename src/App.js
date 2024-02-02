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

  const onChangeSearchValue = (event) =>{
    setSearchValue(event.target.value);
  }


  return (
    <div className="App">
      <Users
      onChangeSearchValue={onChangeSearchValue} 
      searchValue={searchValue} 
      items={users} 
      isLoading={isLoading}
      />
    </div>
  );
}

export default App;
