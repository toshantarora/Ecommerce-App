import React, {useState, useEffect} from 'react'
// import './searchbar.css';
import UserDetail from './userDetail';
 
const Searchbar = () => {
      
   const [user, setUserDetails] = useState([]);
   const [search, setSearch] = useState('');
   const [userFiltered, setUserFiltered] = useState([]);
 
 
    useEffect(() => {
          fetch("https://jsonplaceholder.typicode.com/users")
          .then(res => res.json())
          .then((data) => {setUserDetails(data)})
          .catch(error => console.log(error))
        return () => {
           
        }
    }, [])
 
 
   useEffect(() => {
        setUserFiltered(user.filter((users => users.name.toLowerCase().includes(search.toLowerCase()))))
       return () => {
           
       }
   }, [search, user])
 
 
    const handleChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }
    return (
        <div className="searchbar-container">
        {/* {search} */}
            <input className='inputbar' type="text" onChange={handleChange} placeholder="search user details"></input>
 
            
            <div className="card-container">
            {userFiltered.map((users, idx) => (<UserDetail key={idx} {...users}/>))}
              
            </div>
            
        </div>
    )
}
 
export default Searchbar;
