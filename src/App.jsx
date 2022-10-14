import { useMemo, useState } from "react";
import PostsList from "./components/PostsList";
import "./App.css";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      text: "В краю высоких гор и быстрых рек Мы выросли не зная чувства страха.",
      body: "Горы",
    },
    {
      id: 2,
      text: "В бою они не ради славы, сражались,презирая смерть, стояли твердо словно скалы, отважно защищая честь.",
      body: "Реки",
    },
    {
      id: 3,
      text: "Опусти взор...",
      body: "Луга",
    },
    {
      id: 4,
      text: "..Они не верят, кроме как в то, что совпадает с их страстями..",
      body: "Холмы",
    },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortedPosts = useMemo(() => {
    //работает только тогда когда мы удаляем пост, добавляем пост или
    //меняеем алгоритм сортировки.
    console.log("222222222222222");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.body.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, filter.sort]);

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostsList remove={deletePost} posts={sortedAndSearchedPosts} />
    </div>
  );
}

export default App;
