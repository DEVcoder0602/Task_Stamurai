"use client";
import React from "react";
import FormStore from "../../store/FormStore";
import { observer } from "mobx-react-lite";
import { useTasks, Task } from "@/store/Tasks";
import TaskCard from "../taskCard/TaskCard";

const ShowTask = () => {
  const { tasks } = useTasks();

  // const {formData} = FormStore

  console.log("From contextAPI : ", tasks[0]?.title);

  return (
    <div className="flex justify-center m-4">
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
