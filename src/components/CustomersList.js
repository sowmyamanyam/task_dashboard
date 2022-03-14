import React from 'react'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

const CustomersList = (props) => {
  const customers = useSelector((state) => {
    return state.customer
  })
  return(
    <div>
      <table className = 'table table-striped table-hover table-dark table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>City</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (<tr key = {customer.id}>
                <td>{customer.name}</td>
                <td>{customer.username}</td>
                <td>{customer.email}</td>
                <td>{customer.address.city}</td>
                <td>{customer.phone}</td>
                <td>{customer.website}</td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  )

}
export default CustomersList