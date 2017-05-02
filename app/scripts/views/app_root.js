import React from "react";
import NavBar from "./NavBar";
import BlogPost from "./blog_post";

export default React.createClass({
  render: function() {
    return (
      <main>
        <NavBar />
        <BlogPost />

      </main>
    );
  }
});
