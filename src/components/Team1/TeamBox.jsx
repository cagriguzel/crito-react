import React from "react";

export default function TeamBox(props) {
  return (
    <div className="card">
      <img className="member--image" src={props.url} alt="member image" />
      <h2>{props.name}</h2>
      <p className="title">{props.title}</p>
    </div>
  );
}
