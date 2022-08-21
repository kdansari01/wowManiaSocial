import { SET_ALL_POSTS, SET_POST, DELETE_POST } from "./constants";

export const setAllPost = (posts) => ({
  type: SET_ALL_POSTS,
  payload: posts,
});

export const setPost = (post) => ({
  type: SET_POST,
  payload: post,
});

export const deletePost = (post) => ({
  type: DELETE_POST,

  payload: post,
});
