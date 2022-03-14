const customersIntialValue = []

const customersReducer = (state = customersIntialValue, action) => {
  switch(action.type){
    case "GET_CUSTOMERS" : {
      return [...action.payload]
    }
    case "REMOVE_CUSTOMERS" : {
      return customersIntialValue
    }
    default :{
      return state
    }
  }
}
export default customersReducer