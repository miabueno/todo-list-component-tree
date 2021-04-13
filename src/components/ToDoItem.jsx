import React, { useState } from "react";

const Item = (props) => {
  const updateItemState = () => {};

  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.text}
    </li>
  );
};

export default Item;
