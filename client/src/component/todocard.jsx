import React from "react";
import ThreeDot from "../assets/threedot.png";
import DownArrow from "../assets/ArrowDown.png";
import UpArrow from "../assets/ArrowUp.png";
import checkIcon from "../assets/checkedicon.png";
import UncheckIcon from "../assets/uncheckedicon.png";
import "./todocard.css";

const taskstatus = ["Backlog", "To do", "In progress", "Done"];

const ToDoCard = ({ isOpen, setIsOpen, taskitem, handleStatusSwitch }) => {

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    {taskitem.map((taskitemlist,idx)=>(
      <div className="to-do-card-grid" key={idx}>
        <div className="to-do-card-priority-btn">
          <div className="priority">
            <div
              className="notation-priority"
              style={{
                background:
                  taskitemlist.priority === "high"
                    ? "#FF2473"
                    : taskitemlist.priority === "low"
                    ? "#63C05B"
                    : taskitemlist.priority === "moderate"
                    ? "#18B0FF"
                    : null,
              }}
            ></div>
            <h5 className="priority-name">
              {taskitemlist.priority.toUpperCase()} PRIORITY
            </h5>
            <div className="todo-assign-user">AK</div>
          </div>
          <img src={ThreeDot} alt="three-dot" className="three-dot" />
        </div>
        <div className="todo-card-title" data-tooltip={taskitemlist.taskTitle}>
          <p>{taskitemlist.taskTitle}</p>
        </div>
        <div className="checklist-collapse-list">
          <div className="checklist-with-button" onClick={toggleCard}>
            <h3>Checklist &#40;1/3&#41;</h3>
            <img
              src={isOpen ? UpArrow : DownArrow}
              alt="arrow"
              className="checklist-btn"
            />
          </div>
          {isOpen &&
            taskitemlist?.subtask?.map((item, indx) => (
              <div className="check-item-list" key={indx}>
                <img
                  src={item.isChecked ? checkIcon : UncheckIcon}
                  alt="check-uncheck-icon"
                  className="checklist-input"
                />
                <h5 className="list-name">{item.task}</h5>
              </div>
            ))}
        </div>
        <div className="date-task-status">
          <div className="task-date">{taskitemlist.endDate}</div>
          <div className="task-status-block">
            {taskstatus.map(
              (task_status, index) =>
                taskitemlist.status !== task_status && (
                  <h4
                    className="status"
                    key={taskitemlist.id}
                    onClick={() => handleStatusSwitch(taskitemlist.id, task_status)}
                  >
                    {task_status}
                  </h4>
                )
            )}
          </div>
        </div>
      </div>
    ))}
    </>
  );
};

export default ToDoCard;
