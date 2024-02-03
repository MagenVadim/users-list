import './App.scss';
import Users from './Components/Users/Users'
import {Success} from './Success'
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([])
  const [isLoading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false)
  
  const [searchValue, setSearchValue] = useState('');

  const onClickInvite = (id)=>{
    if (invites.includes(id)){
      setInvites(prev => prev.filter(_id => _id != id))
    } else {
      setInvites(prev => [...prev, id])
    }
  };

  const onClickSendInvites = ()=>{
    
  }


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
      { success ? (
          <Success/>
      ) : (
          <Users
            onChangeSearchValue={onChangeSearchValue} 
            searchValue={searchValue} 
            items={users} 
            isLoading={isLoading}
            invites={invites}
            onClickInvite={onClickInvite}
          />
      )}
    </div>
  );
}

export default App;
