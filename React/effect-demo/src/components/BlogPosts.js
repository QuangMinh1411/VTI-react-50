import { useState, useEffect } from "react";

import classes from "./BlogPosts.module.css";

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogPosts = response.json();
  return blogPosts;
}

function BlogPosts() {
  const [loadedPosts, setLoadedPosts] = useState([]);

  useEffect(
    function () {
      fetchPosts().then((fetchedPosts) => setLoadedPosts(fetchedPosts));
      console.log("test");
    },
    [loadedPosts.length]
  );

  return (
    <ul className={classes.posts}>
      {loadedPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default BlogPosts;
