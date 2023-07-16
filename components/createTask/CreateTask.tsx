"use client";
import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import FormStore from "../../store/FormStore";
import { observer } from "mobx-react-lite";
import { useTaskContext } from "@/store/Tasks";

interface FormData {
  tasks: {
    title: string;
    description: string;
  }[];
}

const CreateTask = () => {
  const { register, handleSubmit, control, reset } = useForm<FormData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tasks",
  });

  const { addTask } = useTaskContext();

  const onSubmit = (data: FormData) => {
    const tasks = data.tasks.map((task, index) => ({
      id: index + 1,
      title: task.title,
      description: task.description,
    }));
    addTask(tasks);
    // console.log("Created Tasks", tasks);
    reset();
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="my-6 drop-shadow-lg hover:drop-shadow-2xl"
        >
          <div className="flex flex-row items-end mb-4 py-4">
            <label
              htmlFor={`title[${index}]`}
              className="block text-md mx-4 font-bold mb-2"
            >
              Title
            </label>
            <input
              {...register(`tasks.${index}.title` as const)}
              id={`title[${index}]`}
              type="text"
              className="px-4 ms-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex flex-row items-center mb-4">
            <label
              htmlFor={`description[${index}]`}
              className="block text-md mx-4 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              {...register(`tasks.${index}.description` as const)}
              id={`description[${index}]`}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex justify-center pb-4">
            <button
              type="button"
              onClick={() => remove(index)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-center my-8">
        <button
          type="button"
          onClick={() => append({ title: "", description: "" })}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Add Task
        </button>

        {fields.length > 0 ? (
          <button
            type="submit"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        ) : null}
      </div>
    </form>
  );
};

export default CreateTask;
