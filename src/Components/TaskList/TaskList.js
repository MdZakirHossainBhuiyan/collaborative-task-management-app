import React, { useState } from 'react';
import './TaskList.css';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TaskList = ({task, index}) => {
    const {taskId, taskTitle, taskDescription, dueDate, priorityLevel, teamId, assignTo, status} = task;
    const [statusValue, setStatusValue] = useState('');
    const [restTask, setRestTask] = useState(null);
    const [currentTask, setCurrentTask] = useState(task);

    const handleChange = (event) => {
        setStatusValue(event.target.value);
    };

    const handleSubmit = () => {
        console.log('status', statusValue);
        const taskList = JSON.parse(localStorage.getItem("taskLists"));
        const restData = taskList?.filter(task => task?.taskId !== taskId);

        currentTask["taskId"] = taskId;
        currentTask["taskTitle"] = taskTitle;
        currentTask["taskDescription"] = taskDescription;
        currentTask["dueDate"] = dueDate;
        currentTask["priorityLevel"] = priorityLevel;
        currentTask["teamId"] = teamId;
        currentTask["assignTo"] = assignTo;
        currentTask["status"] = statusValue;

        const updatedTaskList = [...restData, currentTask];

        localStorage.setItem("taskLists", JSON.stringify(updatedTaskList));
    }

    return (
        <div className='taskCard'>
            <div className='cardLeft'>
                <p id='title'>{taskTitle}</p>
                <p id='description'>{taskDescription}</p>

                <div className='datePriority'>
                    <p><span className='spanStyle'>Due Date: </span>{dueDate}</p>
                    <p><span className='spanStyle'>Priority: </span>{priorityLevel}</p>
                </div>
                <p id='assign'><span className='spanStyle'>Assign To: </span>
                    {
                        assignTo?.map(member => <span>{" "}{member}{", "}</span>)
                    }
                </p>

                <div className='dropdownButton'>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel id="dropdown-label">{status}</InputLabel>
                        <Select
                            labelId="dropdown-label"
                            id="dropdown"
                            value={statusValue}
                            onChange={handleChange}
                            label="Select an option"
                            fullWidth
                        >
                            <MenuItem value="Pending">Pending</MenuItem>
                            <MenuItem value="Progress">Progress</MenuItem>
                            <MenuItem value="Completed">Completed</MenuItem>
                        </Select>
                    </FormControl>

                    <button className='taskCardButton' onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default TaskList;