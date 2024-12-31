import React from "react";

const List = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <p>{props.prod}</p>
      </div>
    </div>
  );
};

export default List;
