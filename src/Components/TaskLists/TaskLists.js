import React from 'react';
import '../TaskList/TaskList.css';
import TaskList from '../TaskList/TaskList';

const taskList = [
    {
        taskId: 1,
        taskTitle: "demu task",
        taskDescription: "demu task for testing",
        dueDate: "10th September",
        priorityLevel: 3,
        teamId: 22,
        assignTo: "Md Zakir Hossain Bhuiyan",
        status: "Pending",
    },
    {
        taskId: 2,
        taskTitle: "demu task 2",
        taskDescription: "demu task 2 for testing",
        dueDate: "22nd September",
        priorityLevel: 4,
        teamId: 22,
        assignTo: "Md Zakir Hossain Bhuiyan",
        status: "Progress",
    },
    {
        taskId: 3,
        taskTitle: "demu task 3",
        taskDescription: "demu task 3 for testing",
        dueDate: "29th September",
        priorityLevel: 1,
        teamId: 21,
        assignTo: "Md Zakir Hossain Bhuiyan",
        status: "Completed",
    },
]

const TaskLists = ({selectedTeam}) => {
    const taskList = JSON.parse(localStorage.getItem("taskLists"));

    const selectedTeamTask = taskList?.filter(task => task?.teamId === selectedTeam?.id);

    return (
        <div className='taskListArea'>
            {
                selectedTeamTask?.map((task, index) => <TaskList index={index} key={task?.taskId} task={task} />)
            }
        </div>
    );
};

export default TaskLists;