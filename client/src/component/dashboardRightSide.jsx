import React, { useState } from "react";
import Header from "./header";
import ToDoBoard from "../component/todoBoard";
import Analytics from "./analytics";
import Settings from "./settings";
import AddPeopleIcon from "../assets/addpeople.png";
import "./dashboardRightSide.css";

const DashboardRightSide = ({ selectedElement }) => {
  const toDoBoardList = ["Backlog", "To do", "In progress", "Done"];
  
  const [toDoData, setToDoData] = useState([
    {
      id: 1,
      priority: "high",
      taskTitle:
        "Typography change in the First two screens of th Typography change in the First two screens of Typography change in the First two screens o in the First two screens of Typography change in the First two screens o ",
      status: "To do",
      subtask: [
        {
          isChecked: false,
          task: "Task to be done ede lorem Ipsum is a Dummy text t",
        },
        {
          isChecked: true,
          task: "Task to be done",
        },
        {
          isChecked: true,
          task: "Done Task",
        },
      ],
      endDate: "10 Feb",
    },
    {
      id: 2,
      priority: "low",
      taskTitle: "Typography change in the",
      status: "In progress",
      subtask: [
        {
          isChecked: true,
          task: "Task to be done ede lorem Ipsum is a Dummy text t",
        },
        {
          isChecked: false,
          task: "Task to be done",
        },
        {
          isChecked: true,
          task: "Done Task",
        },
      ],
      endDate: "10 Feb",
    },
    {
      id: 3,
      priority: "moderate",
      taskTitle: "You are going to make a project management appe",
      status: "Done",
      subtask: [
        {
          isChecked: true,
          task: "Task to be done ede lorem Ipsum is a Dummy text t",
        },
      ],
      endDate: "10 Feb",
    },
    {
      id: 4,
      priority: "low",
      taskTitle: "You are going to make a project management appe",
      status: "Backlog",
      subtask: [
        {
          isChecked: true,
          task: "Task to be done ede lorem Ipsum is a Dummy text t",
        },
        {
          isChecked: false,
          task: "Task to be done",
        },
        {
          isChecked: false,
          task: "Task to be done ede lorem Ipsum is a Dummy text t",
        },
      ],
      endDate: "10 Feb",
    },
    {
      id: 5,
      priority: "low",
      taskTitle: "Typography change in the",
      status: "In progress",
      subtask: [
        {
          isChecked: true,
          task: "Task to be done ede lorem Ipsum is a Dummy text t",
        },
        {
          isChecked: false,
          task: "Task to be done",
        },
        {
          isChecked: true,
          task: "Done Task",
        },
      ],
      endDate: "10 Feb",
    },
    {
      id: 6,
      priority: "moderate",
      taskTitle: "You are going to make a project management appe",
      status: "Done",
      subtask: [
        {
          isChecked: true,
          task: "Task to be done ede lorem Ipsum is a Dummy text t",
        },
      ],
      endDate: "10 Feb",
    },
  ]);

  const handleStatusSwitch = (id, new_status) => {
    console.log("handleStatusSwitch", id, new_status);
    setToDoData(prevToDoData =>
      prevToDoData.map(toDo =>
        toDo.id === id ? { ...toDo, status: new_status } : toDo
      )
    );
  };

  return (
    <div className="dashboard-right-side-container">
      {selectedElement === "Board" && <Header />}
      <div className="dashboard-right-side-section">
        <div className="section-title-addpeople">
          <h3 className="section-title">{selectedElement}</h3>
          {selectedElement === "Board" && (
            <ul className="addpeople-list">
              <li className="addpeople">
                <img
                  src={AddPeopleIcon}
                  alt="addpeople-logo"
                  className="addpeople-logo-img"
                />
                &nbsp;<span className="addpeople-title">Add People</span>
              </li>
            </ul>
          )}
        </div>
        {selectedElement === "Board" && (
          <select className="duration-select">
            <option>Select duration</option>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        )}
      </div>
      {selectedElement === "Board" && (
        <div className="to-do-board-list">
          <div className="to-do-main">
            {toDoBoardList.map((listName, i) => (
              <ToDoBoard
                stepTitle={listName}
                handleStatusSwitch={handleStatusSwitch}
                taskitem={toDoData.filter(
                  (taskitem) => taskitem.status === listName
                )}
              />
            ))}
          </div>
        </div>
      )}
      {selectedElement === "Analytics" && <Analytics />}
      {selectedElement === "Settings" && <Settings />}
    </div>
  );
};

export default DashboardRightSide;
