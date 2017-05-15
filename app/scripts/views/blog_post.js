import React from "react";

export default React.createClass({
  getInitialState: function() {
    return {
      hiddenBody: false
    };
  },
  handleclick: function() {
    this.setState({ hiddenBody: !this.state.hiddenBody });
  },
  render: function() {
    if (this.state.hiddenBody === true) {
      return (
        <article className="blog-post">
          <h2 className="blog-title" onClick={this.handleclick}>
            {this.props.title}
          </h2>

        </article>
      );
    } else {
      return (
        <article className="blog-post">
          <h2 className="blog-title" onClick={this.handleclick}>
            {this.props.title}
          </h2>
          <p>{this.props.body}</p>
        </article>
      );
    }
  }
});
