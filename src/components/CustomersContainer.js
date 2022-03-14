import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCustomerInfo } from '../actions/usersAction'
import CustomersList from './CustomersList'


const CustomersContainer = (props) => {
  const dispatch = useDispatch()
  const customers = useSelector((state) => {
    return state.customer
  })
  
  useEffect(() => {
    dispatch(startCustomerInfo())//api call to get all customers
  }, [])
  return(
    <div>
      <h2>List of Customers - {customers.length}</h2>
      <CustomersList />
    </div>
  )

}
export default CustomersContainer