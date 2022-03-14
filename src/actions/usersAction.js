import axios from "axios";

import swal from "sweetalert";

export const startRegisterUser = (formData, onSuccess) => {
  return (dispatch) => {
    axios
      .post("http://dct-user-auth.herokuapp.com/users/register", formData)

      .then((response) => {
        const result = response.data;

        if (result.hasOwnProperty("errors")) {
          swal({ title: result.message, icon: "error" });
        } else {
          swal({ title: "Successfully created an account", icon: "success" });
          console.log("regUser", result);
          dispatch(registerUser(result));
          onSuccess();
        }
      })

      .catch((err) => {
        alert(err.message);
      });
  };
};
export const registerUser = (users) => {
  return {
    type: "REGISTER_USER",

    payload: users,
  };
};
export const startLoginUser = (formData, onSuccess) => {
  axios
    .post("http://dct-user-auth.herokuapp.com/users/login", formData)

    .then((response) => {
      const result = response.data;

      if (result.hasOwnProperty("errors")) {
        swal({ title: result.errors, icon: "error" });
      } else {
        swal({ title: "successfully logged in", icon: "success" });

        console.log("login", result);

        localStorage.setItem("token", result.token);

        onSuccess();
      }
    })

    .catch((err) => {
      console.log(err.message);
    });
};

export const startUserAccount = () => {
  return (dispatch) => {
    axios
      .get("http://dct-user-auth.herokuapp.com/users/account", {
        headers: {
          "x-auth": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(userAccount(result));
      })

      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const userAccount = (user) => {
  return {
    type: "USER_ACCOUNT",
    payload: user,
  };
};

export const removeAccount = () => {
  return {
    type: "REMOVE_ACCOUNT",
  };
};

export const removeUser = () => {
  return {
    type: "REMOVE_USER",
  };
};

//------Customers API-------

export const startCustomerInfo = () => {
  return(dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      const result = response.data
      console.log(result)
      dispatch(getCustomers(result))
    })
    .catch((err) => {
      alert(err.message)
    })
  }
}

export const getCustomers = (customers) => {
  return{
    type : "GET_CUSTOMERS",
    payload : customers
  }
}

export const removeCustomers = () => {
  return {
    type: "REMOVE_CUSTOMERS",
  };
};