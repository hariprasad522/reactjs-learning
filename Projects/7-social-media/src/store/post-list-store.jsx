import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi friends I am going to Mumbai for my vactions. Hope to enjoy a lot. Peace out",
    reactions: 2,
    user_id: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Passed bro",
    body: "After all the strugles of 4 years, finally I made it guyss. Hard to beleive it",
    reactions: 15,
    user_id: "user-12",
    tags: ["Graduated", "Unbelievable"],
  },
];

export default PostListProvider;
