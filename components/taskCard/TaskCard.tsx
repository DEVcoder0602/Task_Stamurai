import React from "react";

interface TaskCardProps {
  title: string;
  description: string;
}
const TaskCard = ({ title, description }: TaskCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-1/4">
      <h2 className="text-xl  mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4 flex justify-center bg-white">
        <button
          className="mr-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          // onClick={onEdit}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          // onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
