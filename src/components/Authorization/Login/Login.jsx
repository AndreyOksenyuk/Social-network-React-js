import React from 'react';
import style from './Login.module.scss'
import LoginReduxForm from './LoginForm';
import TestAccountData from '../TestAccountData';

const Login = (props) => {
   let submitLogin = (value) => {
      props.loginThankCreator(value.email, value.password, value.rememberMe)
   }
   return (
      <div className={style.Login}>
         <TestAccountData />
         <h3>Авторизация</h3>
         <LoginReduxForm onSubmit={submitLogin} isAuth={props.isAuth}/>
      </div>
   );
}

export default Login;
