import React from "react";
import CreateTask from "../createTask/CreateTask";
import ShowTask from "../showTask/ShowTask";

const AllTasks = () => {
  return (
    <div>
      <CreateTask />
      <h3 className="text-md font-bold">All Tasks</h3>
      <ShowTask />
    </div>
  );
};

export default AllTasks;
