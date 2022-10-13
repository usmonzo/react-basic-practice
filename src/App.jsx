import { useState } from "react";
import PostsList from "./components/PostsItem/PostsList";
import "./App.css";
import PostForm from "./components/PostsItem/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, text: "бла бла бла бла", body: "Бла" },
    { id: 2, text: "бла бла бла бла", body: "Бла" },
    { id: 3, text: "бла бла бла бла", body: "Бла" },
    { id: 4, text: "бла бла бла бла", body: "Бла" },
  ]);

  return (
    <div className="App">
      <PostForm setPosts={setPosts} posts={posts} />
      <PostsList posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default App;
