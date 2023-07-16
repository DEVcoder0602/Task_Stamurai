"use client";
import React from "react";
import FormStore from "../../store/FormStore";
import { observer } from "mobx-react-lite";
import { useTaskContext, Task } from "@/store/Tasks";
import TaskCard from "../taskCard/TaskCard";

const ShowTask = () => {
  const { tasks, editTask, deleteTask } = useTaskContext();

  // const {formData} = FormStore

  const handleEditTask = (index: number) => {
    // Implement your edit logic here
    console.log("Edit task at index", index);
  };

  const handleDeleteTask = (taskId: number) => {
    console.log(`Delete taskId : ${taskId}`);
    deleteTask(taskId);
  };

  // console.log(tasks);

  return (
    <div className="flex flex-col items-center justify-center m-4">
      {tasks.map((task: Task, index) => (
        <TaskCard
          key={index}
          taskID={task.id}
          title={task.title || ""}
          description={task.description || ""}
          onEdit={() => handleEditTask(task.id)}
          onDelete={() => handleDeleteTask(task.id)}
        />
      ))}
    </div>
  );
};

export default ShowTask;
