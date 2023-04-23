import React from "react";
import { Link } from "react-router-dom";

const menu = [
  {
    item: "Home",
    path: "/",
  },
  {
    item: "About",
    path: "/about",
  },
];

function MenuList(props) {
  const items = props.map((el) => <Link to={el.path}>{el.item}</Link>);
  return <>{items}</>;
}

export default function Header() {
  return <div className="flex justify-end gap-8">{MenuList(menu)}</div>;
}
