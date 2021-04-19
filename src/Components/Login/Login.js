import { UserContext } from '../../App';
import React, { useContext, useState } from 'react';
import firebaseConfig from './Firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import Navbar from '../Shared/Navbar/Navbar';


const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({});
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const googleSignIn = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
    setUser(result.user);
    setLoggedInUser(result.user);
    console.log(result.user);
    history.replace(from);
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode,errorMessage,email,credential);
  });
    }
    return (
        <div>
            <Navbar></Navbar>
       
        <div className="mt-5 text-center">
            <h3>Login </h3>
            <button className="btn btn-primary" onClick={googleSignIn}> Google</button>
        </div>
        </div>
    );
};

export default Login;