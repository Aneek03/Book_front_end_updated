import { myAxios } from "./helper";
  
export const signUp = (user) => {
  return myAxios.post("/users/", user).then((response) => response.data);
};

// export const loginUser = (loginDetail) => {
//   const params = new URLSearchParams(loginDetail).toString();
//   return myAxios
//     .post(`/login?${params}`)
//     .then((response) => response.data);
// };



// export const loginUser = (loginDetail) => {
//   return myAxios
//     .post('/users/login', loginDetail)
//     .then((response) => response.data);


// };


// export const loginUser = (loginDetail) => {
//   return myAxios
//     .post("/login", loginDetail)
//     .then((response) => response.data);
// };

// export const loginUser = (email, password) => {
//   return myAxios
//     .post(`/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`)
//     .then((response) => response.data);
// };


// export const getUser = (id) => {
//   // Save the user ID in local storage
//   localStorage.setItem('userId', id);

//   return myAxios.get(`/users/${id}`).then((resp) => resp.data);
// };

// console.log('User ID from local storage:', localStorage.getItem('userId'));


// export const getUser = (id) => {
//   return myAxios.get(`/users/${id}`).then((resp) => resp.data);
// };


export const loginUser = (loginDetail) => {
  return myAxios
    .post('/users/login', loginDetail)
    .then((response) => {
      // Save the 'id' from the response data to local storage
      localStorage.setItem('userId', response.data.id);
      return response.data;
    });
};

export const getUser = () => {
  // Retrieve the 'id' from local storage
  const userId = localStorage.getItem('userId');
  console.log('User ID:', userId);
  if (userId) {
    return myAxios.get(`/users/${userId}`).then((resp) => resp.data);
  } else {
    console.error('No user ID found in local storage.');
    return Promise.reject('No user ID found');
  }
};

// Usage

