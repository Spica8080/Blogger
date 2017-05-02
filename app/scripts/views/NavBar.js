import React from "react";
import Link from "./Link";

export default React.createClass({
  render: function() {
    return (
      <nav>
        The Isha Blog
        <Link dest="#blog" name="Blog" />
        <Link dest="#about" name="About" />
        <Link dest="#contact" name="Contact" />
      </nav>
    );
  }
});
