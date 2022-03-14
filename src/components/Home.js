import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap'


const Home = (props) => {
  const user = useSelector((state) => {
    return state.account
  })
  return (
    <div>
      <h1>Welcome to Customers Dashboard, {user.username}</h1>
      <ul>
        <li>Please visit Dashboard page to view customers information</li>
      </ul>
    </div>
  );
};

export default Home;