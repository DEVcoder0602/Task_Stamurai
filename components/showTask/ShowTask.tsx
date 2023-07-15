"use client";
import React from "react";
import FormStore from "../../store/FormStore";
import { observer } from "mobx-react-lite";
import { useTaskContext, Task } from "@/store/Tasks";
import TaskCard from "../taskCard/TaskCard";

const ShowTask = () => {
  const { tasks } = useTaskContext();

  // const {formData} = FormStore

  return (
    <div className="flex flex-col items-center justify-center m-4">
      {tasks.map((task: Task, index: number) => (
        <TaskCard
          key={index}
          title={task.title || ""}
          description={task.description || ""}
          // onEdit={() => handleEditTask(index)}
          // onDelete={() => handleDeleteTask(index)}
        />
      ))}
    </div>
  );
};

export default ShowTask;
