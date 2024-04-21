import { myAxios } from "../services/helper";


// isLoggedIn=>
export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  return data != null;
};

// doLogin=> data=>set to localstorage
export const doLogin = (data, next) => {
  // Assuming 'data' contains the user details you want to store
  localStorage.setItem("data", JSON.stringify({ user: data }));
  next();
};

// export const doLogin = (data, next) => {
//   // Assuming 'data' contains the user details including the ID you want to store
//   localStorage.setItem("data", JSON.stringify({ user: data, id: data.id }));
//   next();
// };

// doLogout=> remove from localStorage
export const doLogout = (next) => {
  localStorage.removeItem("data");
  next();
};

//get currentUser
// export const getCurrentUserDetail = () => {
//   if (isLoggedIn()) {
//     return JSON.parse(localStorage.getItem("data")).user;
//   } else {
//     return undefined;
//   }
// };

//2nd getCurrentUserDetails

// export const getCurrentUserDetail = () => {
//   if (isLoggedIn()) {
//     let data = JSON.parse(localStorage.getItem("data"));
//     // Ensure that 'user' and 'userId' are both returned
//     return { user: data.user};
//   } else {
//     return undefined;
//   }
// };


export const getCurrentUserDetail = () => {
  if (isLoggedIn()) {
    // Retrieve the 'userId' from local storage
    let userId = localStorage.getItem("userId");
    // Return only the 'userId'
    return userId;
  } else {
    return undefined;
  }
};


export const getUser = (id) => {
  // Save the user ID in local storage
  localStorage.setItem('userId', id);

  return myAxios.get(`/users/${id}`).then((resp) => resp.data);
};

console.log('User ID from local storage:', localStorage.getItem('userId'));


// //isLoggedIn=>

// export const isLoggedIn = () => {
//   let data = localStorage.getItem("data");
//   if (data != null) return true;
//   else return false;
// };

// //doLogin=> data=>set to localstorage

// export const doLogin = (data,next) => {
//   localStorage.setItem("data", JSON.stringify(data));
//   next()
// };

// //doLogout=> remove from localStorage

// export const doLogout = (next) => {
//   localStorage.removeItem("data");
//   next()
// };

// //get currentUser
// export const getCurrentUserDetail = () => {
//   if (isLoggedIn()) {
//     return JSON.parse(localStorage.getItem("data")).user;
//   } else {
//     return undefined;
//   }
// };

// export const getToken=()=>{
//   if(isLoggedIn()){
//     return JSON.parse(localStorage.getItem("data")).token
//   }else{
//     return null;
//   }
// }
