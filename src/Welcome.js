import React from 'react';


const Welcome = ({handleLogout}) =>{


    return(
        <section className="hero">
            <nav>
                <h2>Welocome to Chatroom</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}


export default Welcome;