"use client";
import React from "react";
import FormStore from "../../store/FormStore";
import { observer } from "mobx-react-lite";
import { useTasks } from "@/store/Tasks";

const ShowTask = () => {
  const { tasks } = useTasks();

  console.log("From contextstore", tasks);

  // const {formData} = FormStore

  return (
    <div>
      <h3>Task 1</h3>
      <p>Title: </p>
      <p>Title: </p>
    </div>
  );
};

export default observer(ShowTask);
