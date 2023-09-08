import React from 'react';
import '../TaskList/TaskList.css';
import TaskList from '../TaskList/TaskList';

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