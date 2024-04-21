// import { myAxios } from "./helper";

// // Create post function
// export const createPost = (postData) => {
//   return myAxios
//     .post(
//       `/user/${postData.userId}/category/${postData.categoryId}/posts`,
//       postData
//     )
//     .then((response) => response.data);
// };

// // Get all posts
// export const loadAllPosts = (pageNumber, pageSize) => {
//   return myAxios
//     .get(
//       `/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=desc`
//     )
//     .then((response) => response.data);
// };

// // Load single post of given id
// export const loadPost = (postId) => {
//   return myAxios.get("/posts/" + postId).then((response) => response.data);
// };

// // Create comment
// export const createComment = (comment, postId) => {
//   return myAxios.post(`/post/${postId}/comments`, comment);
// };

// // Upload post banner image
// export const uploadPostImage = (image, postId) => {
//   let formData = new FormData();
//   formData.append("image", image);
//   return myAxios
//     .post(`/post/image/upload/${postId}`, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     })
//     .then((response) => response.data);
// };

// // Get category-wise posts
// export function loadPostCategoryWise(categoryId) {
//   return myAxios
//     .get(`/category/${categoryId}/posts`)
//     .then((response) => response.data);
// }

// // Load user-wise posts
// export function loadPostUserWise(userId) {
//   return myAxios.get(`/user/${userId}/posts`).then((response) => response.data);
// }

// // Delete post
// export function deletePostService(postId) {
//   return myAxios.delete(`/posts/${postId}`).then((response) => response.data);
// }

// // Update post
// export function updatePost(post, postId) {
//   return myAxios.put(`/posts/${postId}`, post).then((response) => response.data);
// }



import { privateAxios } from "./helper";
import { myAxios } from "./helper";
import { getCurrentUserDetail } from "../auth";

//create post function
// export const createPost = (postData) => {
//   //   console.log(postData);
//   return privateAxios
//     .post(
//       `/user/${postData.userId}/category/${postData.categoryId}/posts`,
//       postData
//     )
//     .then((response) => response.data);
// };

// export const createPost = (postData, categoryId) => {
//   const currentUser = getCurrentUserDetail();
//   if (currentUser && currentUser.id) {
//     return privateAxios
//       .post(`/user/${currentUser.id}/category/${categoryId}/posts`, postData)
//       .then((response) => response.data);
//   } else {
//     return Promise.reject("No user logged in..");
//   }
// };

export const createPost = (postData, categoryId) => {
  const userId = getCurrentUserDetail(); // This will now return only the userId
  if (userId) {
    return privateAxios
      .post(`/user/${userId}/category/${postData.categoryId}/posts`, postData)
      .then((response) => response.data);
  } else {
    return Promise.reject("No user logged in.");
  }
};



//get all posts

export const loadAllPosts = (pageNumber, pageSize) => {
  return myAxios
    .get(
      `/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=desc`
    )
    .then((response) => response.data);
};

//load single post of given id
export const loadPost = (postId) => {
  return myAxios.get("/posts/" + postId).then((reponse) => reponse.data);
};

export const createComment = (comment, postId) => {
  const userId = getCurrentUserDetail(); 
  return privateAxios.post(`/post/${postId}/user/${userId}/comments`, comment);
};

//upload post banner image

export const uploadPostImage = (image, postId) => {
  let formData = new FormData();
  formData.append("image", image);
  return privateAxios
    .post(`/post/image/upload/${postId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
};

//get cateory wise posts
export function loadPostCategoryWise(categoryId) {
  return privateAxios
    .get(`/category/${categoryId}/posts`)
    .then((res) => res.data);
}

//to get all posts associated with a particular user

// export function loadPostUserWise(userId) {
//   return privateAxios.get(`/user/${userId}/posts`).then((res) => res.data);
// }

export function loadPostUserWise() {

  const userId = getCurrentUserDetail(); 
  return privateAxios.get(`/user/${userId}/posts`).then((res) => res.data);
}

 

// export function loadPostUserWise() {
//   const currentUser = getCurrentUserDetail();
//   if (currentUser && currentUser.id) {
//     return privateAxios.get(`/user/${currentUser.id}/posts`).then((res) => res.data);
//   } else {
//     return Promise.reject("No user logged in. from post-service");
//   }
// }




//delete post
export function deletePostService(postId) {
  return privateAxios.delete(`/posts/${postId}`).then((res) => res.data);
}

//update post
export function updatePost(post, postId) {
  console.log(post);
  return privateAxios.put(`/posts/${postId}`, post).then((resp) => resp.data);
}
