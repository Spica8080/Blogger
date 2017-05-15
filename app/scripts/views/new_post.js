import React from "react";

export default React.createClass({
  render: function() {
    return (
      <form>
        <h4>Create a New Post</h4>
        <input />
        <h4>Body</h4>
        <textarea className="post-body" />
        <button className="submit-button">Submit</button>
      </form>
    );
  }
});
