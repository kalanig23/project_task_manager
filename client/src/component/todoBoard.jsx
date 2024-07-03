import React, { useState } from "react";
import ToDoCard from "./todocard";
import CollapseIcon from "../assets/codicon_collapse-all.png";
import PlusIcon from "../assets/plus.png";
import "./todoBoard.css";

const ToDoBoard = ({ stepTitle, taskitem, handleStatusSwitch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const collapseAllCard = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className="to-do-container">
      <div className="to-do-header">
        <h3 className="to-do-step">{stepTitle}</h3>
        <div className="plus-collapese">
          {stepTitle === "To do" && (
            <img src={PlusIcon} alt="plus-icon" className="plus-card-icon" />
          )}
          <img
            src={CollapseIcon}
            alt="collapse-icon"
            onClick={collapseAllCard}
            className="collapse-card-icon"
          />
        </div>
      </div>
      <ToDoCard isOpen={isOpen} setIsOpen={setIsOpen} taskitem={taskitem} handleStatusSwitch={handleStatusSwitch}/>
    </div>
  );
};

export default ToDoBoard;
