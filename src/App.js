import React from 'react';
import './Chat.css';
import axios from 'axios';
import Chat from './Chat';
import { motion } from "framer-motion";
import closeIcon from './icons/closeIcon.svg';
import {useAuth0} from '@auth0/auth0-react';

const App =()=> {
  const {
    loginWithPopup, 
    loginWithRedirect, 
    logout, 
    user,
    isAuthenticated,
    getAccessTokenSilently
  } = useAuth0();

   function callApi (){
    axios.get('http://localhost:4000/')
          .then(response=>console.log(response.data))
          .catch(error=>console.log(error.message));
  };

  async function callProtectedApi () {
    try {
    const token = await getAccessTokenSilently()
    const response = await axios.get('http://localhost:4000/protected', {
      headers: {
        authorization: `Bearer ${token}`,
      }
    })
      console.log(response.data);
  }catch(error){
    console.log(error.message);
  }
  };
      return(
        <div >
          <section>
          <h1>Chatroom App</h1>
          <motion.div animate={{y: [0,150,150,0], rotate: 90}} transition={{duration:3, repeat: 10}}>
          <ul>
            <li>
              <button onClick={loginWithPopup}>Login With Popup</button>
            </li>
            <li>
              <button onClick={loginWithRedirect}>Login With Redirect</button>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
            <ul className="hero">
              <li><button onClick={callApi}>call server route</button></li>
              <li><button onClick={callProtectedApi}>call protected server route</button></li>
            </ul>

          </ul>
          </motion.div>
            <h3>User is {isAuthenticated ? <Chat user={user}/> : "Not Logged in"}</h3>
           
            {isAuthenticated && (
            <pre style={{textAlign: 'start'}}>
              {JSON.stringify(user, null, 2)}
            </pre>
            )}
            </section>
            <img src={closeIcon} alt=""/>
        </div>
      )                                                                                                                                                                                                                                                                                  
  
  
};

export default App;
