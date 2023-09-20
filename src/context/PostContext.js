import { createContext, useState } from "react";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Post One" },
    { id: 2, title: "Post Two" },
    { id: 3, title: "Post Three" },
    { id: 4, title: "Post Four" }
  ]);
  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
};

export default PostContext;
