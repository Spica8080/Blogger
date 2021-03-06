import React from "react";
import Link from "./Link";

export default React.createClass({
  render: function() {
    return (
      <nav className="nav-bar">
        The Isha Blog
        <Link dest="#blog" name="Blog" />
        <Link dest="#about" name="About" />
        <Link dest="#contact" name="Contact" />
      </nav>
    );
  }
});
