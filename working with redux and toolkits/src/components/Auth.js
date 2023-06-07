import { useState } from 'react';
import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../store';
const Auth = () => {
  const disptach = useDispatch()
  const[Email,seEmail]=useState('')
  const[password,setPassword]=useState('')
  const emailHandler = (e)=>{
    seEmail(e.target.value)
  }
  const passwordHandler = (e)=>{
    setPassword(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email) && password >0){
      console.log('kemo')
      console.log(disptach(AuthActions.login()))

    }else{
      return
    }

  }
  return (
    <main  className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input onChange={emailHandler} type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input onChange={passwordHandler} type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
