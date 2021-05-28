import React from 'react';
import Chat from './Chat';


const Welcome = ({handleLogout}) =>{


    return(
        <section>
            <nav>
                <h2>Welocome to Chatroom</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <div>
            <Chat/>
            </div>
        </section>
    )
}


export default Welcome;