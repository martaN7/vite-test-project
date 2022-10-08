import React, { useState, useEffect } from 'react';
import Auth from './Auth';
import { supabase } from './supabase';

export default function Dashboard() {

  const [session, setSession] = useState(null);

  useEffect(() =>{
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    console.log(session);
  }, [])
  
  // console.log(supabase.auth.session());

  return (
    <div>
      {!session ? (<Auth />) : (

        <div>
          <p>Welcome!</p>
          <button onClick={() => supabase.auth.signOut()}>Sign out</button>
        </div>
      ) }
      
    </div>
  )

}