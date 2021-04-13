import React, { useState } from "react";

const Item = (props) => {
  const [isItemDone, setItemDone] = useState(false);

  const updateItemState = () => {
    setItemDone((prevValue) => {
      return !prevValue;
    });
  };

  return (
    <li
      onClick={updateItemState}
      style={{ textDecoration: isItemDone ? "line-through" : "none" }}
    >
      {props.text}
    </li>
  );
};

export default Item;
