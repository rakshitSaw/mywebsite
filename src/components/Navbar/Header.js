import React from "react";
import { Link } from "react-router-dom";
import userImage from "../../images/IMG_2803.JPG";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img src={userImage} />
      </div>
    </div>
  );
}
