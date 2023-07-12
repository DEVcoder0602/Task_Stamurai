import React from "react";
import Task from "../task/Task";

const AllTasks = () => {
  return (
    <div>
      <Task num={1} />
      <h3 className="text-md">All Tasks</h3>
    </div>
  );
};

export default AllTasks;
