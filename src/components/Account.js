import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector, useDispatch } from "react-redux";

import { startUserAccount } from "../actions/usersAction";

const Account = (props) => {
  const user = useSelector((state) => {
    return state.account;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startUserAccount());
  }, []);

  return (
    <div>
      <hr />
      <h2>User Information</h2>
      <table className = 'table table-striped table-hover table-bordered'>
        <thead>
          <tr  class="table-primary">
            <th>Name</th>
            <th>User Email</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
             <tr key = {user.name} class="table-success">
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Account;