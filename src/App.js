import React, { useState } from "react";
//import ClassCounter from "./components/ClassCounter";
//import Counter from "./components/counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/app.css";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "description" },
    { id: 2, title: "Dart", body: "description" },
    { id: 3, title: "GO", body: "description" },
  ]);
  const [posts2, setPosts2] = useState([
    { id: 1, title: "Java", body: "description" },
    { id: 2, title: "Python", body: "description" },
    { id: 3, title: "C++", body: "description" },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title="Фронтенд языки" />
      <PostList posts={posts2} title="Бэкенд языки" />
    </div>
  );
}
export default App;
