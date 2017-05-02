import React from "react";
import NavBar from "./NavBar";
import BlogPost from "./blog_post";
import NewPost from "./new_post";

export default React.createClass({
  render: function() {
    return (
      <main>
        <NavBar />
        <BlogPost
          title="Sadhguru"
          body="The very life within you is longing to be #joyful because joyfulness is the nature of the source of creation"
        />
        <BlogPost
          title="Yogi"
          body="This #mind is not about drawing #conclusion - this is a tool for exploration."
        />
        <BlogPost
          title="Mystic"
          body="This is not about being superhuman - this is about realizing that being human is super!"
        />
        <BlogPost
          title="Visionary"
          body="Work is an expression of who you are, so who you are needs to be worked at."
        />
        <BlogPost
          title="Spiritual Master"
          body="There is an intellignece within you, where there is no memory."
        />
        <NewPost />

      </main>
    );
  }
});
