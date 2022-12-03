
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser } from './features/user/usersSlice';
import { useState } from 'react';


function App() {
  const[userName, setUserName] = useState()
  const [name, setName ] = useState()
  const dispatch = useDispatch()
  


const handleClick = () => {
  dispatch(addUser({id: userList[userList.length-1].id + 1 ,  name,  username: userName, }))


}


  const userList = useSelector((state) => state.user.value)
  return (
    <div className="App">
     <div className='addUser'>
      <input type="text" placeholder = "Name..." onChange={(event) => setName(event.target.value)}></input>
      <input type="text" placeholder = "Username..." onChange={(event) => setUserName(event.target.value)}></input>
      <button onClick={handleClick}>Add User</button>
     </div>
     <div className='displayUsers'>
      {userList.map((user) => {
        return (
          <div>
               <h1> {user.name}</h1> 
               <h1> {user.username}</h1>
               </div>
     
        )
      })}
     </div>
    </div>
  );
}

export default App;
