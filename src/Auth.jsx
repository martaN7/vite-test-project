import React, {useState, useRef } from 'react';
import { supabase } from './supabase';



export default function Auth() {
  const [loading, setLoading] = useState(false)
  
  const emailLoginRef = useRef();
  const passwordLoginRef = useRef();

  const emailSignUpRef = useRef();
  const passwordSignUpRef = useRef();

  const handleLogin = async (e) => {
    e.preventDefault()

    const email = emailLoginRef.current.value;
    const password = passwordLoginRef.current.value;

    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error
      alert('Login successfull')

    } catch (error) {
      alert(error.error_description || error.message)

    } finally {
      setLoading(false)
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault();

    const email = emailSignUpRef.current.value;
    const password = passwordSignUpRef.current.value;

    try {
      setLoading(true)
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error
      alert('Sign up successfull')

    } catch (error) {
      alert(error.error_description || error.message)

    } finally {
      setLoading(false)
    }
  }



    return (
      <>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="input-email-login">Email</label>
        <input id="input-email-login" type="email" ref={emailLoginRef} />

        <label htmlFor="input-password-login">Password</label>
        <input id="input-password-login" type="password" ref={passwordLoginRef} />

        <br />

        <button type="submit">Login</button>
      </form>

      <br />

      <h1>Sign Up</h1>

      <form onSubmit={handleSignUp}>
        <label htmlFor="input-email-signup">Email</label>
        <input id="input-email-signup" type="email" ref={emailSignUpRef} />

        <label htmlFor="input-password-signup">Password</label>
        <input id="input-password-signup" type="password" ref={passwordSignUpRef} />

        <br />

        <button type="submit">Sign up</button>
      </form>
       
    </>
    )
}