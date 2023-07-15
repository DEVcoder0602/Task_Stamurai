"use client";
// import { ReactNode, createContext, useContext, useState } from "react";

// export type Task = {
//   data: FormData;
// };

// export type TasksContext = {
//   tasks: Task[];
//   handleCreateTask: (data: FormData) => void;
// };

// export const tasksContext = createContext<TasksContext | null>(null);

// export const TasksProvider = ({ children }: { children: ReactNode }) => {
//   const [tasks, setTasks] = useState<Task[]>([]);

//   const handleCreateTask = (data: FormData) => {
//     setTasks((prev) => {
//       const newTasks: Task[] = [
//         {
//           data,
//         },
//         ...prev,
//       ];
//       return newTasks;
//     });
//   };

//   return (
//     <tasksContext.Provider value={{ tasks, handleCreateTask }}>
//       {children}
//     </tasksContext.Provider>
//   );
// };

// export function useTasks() {
//   const tasksContextValue = useContext(tasksContext);

//   if (!tasksContextValue) {
//     throw new Error("UseContext is used outside of Provider");
//   }

//   return tasksContextValue;
// }


import { ReactNode, createContext, useContext, useState } from "react";

export type Task = {
  title: string;
  description: string;
};

export type TasksContext = {
  tasks: Task[];
  handleCreateTask: (data: Task) => void;
};

export const tasksContext = createContext<TasksContext | null>(null);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleCreateTask = (data: Task) => {
    setTasks((prev) => [...prev, data]);
  };

  return (
    <tasksContext.Provider value={{ tasks, handleCreateTask }}>
      {children}
    </tasksContext.Provider>
  );
};

export function useTasks() {
  const tasksContextValue = useContext(tasksContext);

  if (!tasksContextValue) {
    throw new Error("UseContext is used outside of Provider");
  }

  return tasksContextValue;
}
