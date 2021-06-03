//code to line through when item is clicked
// import React, { useState } from "react";


import React from "react";


function TodoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}
export default TodoItem;
