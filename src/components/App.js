import React from "react";
import blogData from "../data/blog";

//components
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  console.log(blogData);

  return (
    <div className="App">
      <Header name={blogData.name} />
      <About about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
