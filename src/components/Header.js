import React from "react";
import { Link } from "react-router-dom";
import menuData from "../json/menu.json";

function MenuList() {
  const items = menuData.map((el, idx) => (
    <Link to={el.path} key={idx}>
      {el.item}
    </Link>
  ));
  return <>{items}</>;
}

export default function Header() {
  return <div className="flex justify-end gap-8">{MenuList()}</div>;
}
