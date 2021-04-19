import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/HomePage/Home/Home';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddService from './Components/Dashboard/AddService/AddService';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Review from './Components/Dashboard/Review/Review';
import ManageService from'./Components/Dashboard/MangeSercie/MangeService';
import OrderList from './Components/Dashboard/OrderList/OrderList';
import AddAdmin from './Components/Dashboard/AddAdmin.js/AddAdmin';

 export const UserContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path ="/">
          <Home></Home>
          </Route>
          <Route path ="/home">
          <Home></Home>
          </Route>
          <PrivateRoute path ="/dashboard/:id">
          <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path ="/login">
          <Login></Login>
          </Route>
          <PrivateRoute path ="/addService">
          <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path ="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path ="/mangeService">
            <ManageService></ManageService>
          </PrivateRoute>
          <PrivateRoute path ="/ordersList">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path ="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
