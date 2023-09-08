import React from 'react';
import './TaskList.css';

const TaskList = ({task, index}) => {
    const {taskId, taskTitle, taskDescription, dueDate, priorityLevel, teamId, assignTo, status} = task;

    return (
        <div className='taskCard'>
            <div className='cardLeft'>
                <h4>{taskTitle}</h4>
                <p>{taskDescription}</p>
                <p>Assign To: 
                    {
                        assignTo?.map(member => <span>{member}{", "}</span>)
                    }
                </p>
            </div>
            <div className='cardRight'>
                <p>Due Date: {dueDate}</p>
                <p>Priority: {priorityLevel}</p>
                <p>Status: {status}</p>
            </div>
        </div>
    );
};

export default TaskList;