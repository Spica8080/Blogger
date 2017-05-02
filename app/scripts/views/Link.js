import React from "react";

export default React.createClass({
  render: function() {
    return (
      <a href={this.props.dest}>
        {this.props.name}
      </a>
    );
  }
});
