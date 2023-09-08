import React, { useState } from 'react';
import './TeamDetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import TaskLists from '../TaskLists/TaskLists';
import { Box, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};  

const TeamDetails = () => {
    const { id } = useParams();
    const teamList = JSON.parse(localStorage.getItem("teamLists"));
    const taskList = JSON.parse(localStorage.getItem("taskLists"));

    const [inputValue, setInputValue] = useState(null);
    const [selectedMembers, setSelectedMembers] = useState([]);
    const [users, setUsers] = useState(null);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let navigate = useNavigate();

    const selectedTeam = teamList?.find(team => team?.id === id);

    const handleBlur = e => {
        const allValue = {...inputValue};
        allValue[e.target.name] = e.target.value;
        setInputValue(allValue);
    }

    const handleChange = (event) => {
        setSelectedMembers(event.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        const timestamp = new Date().getTime();
        const random = Math.random();
        const uniqueId = `${timestamp}-${random}`;

        inputValue["taskId"] = uniqueId;
        inputValue["teamId"] = id;
        inputValue["status"] = "Pending";

        if(taskList){
            const oldValues = [...taskList];
            oldValues.push(inputValue);
            localStorage.setItem("taskLists", JSON.stringify(oldValues));
            navigate(`/team/${id}`, { replace: true});
        }
        else{
            const oldValues = [];
            oldValues.push(inputValue);
            localStorage.setItem("taskLists", JSON.stringify(oldValues));
            navigate(`/team/${id}`, { replace: true});
        }
    }

    return (
        <div className='teamDetailsArea'>
            <Header />

            <div className='createTeamArea'>
                <h1>{selectedTeam?.teamTitle}</h1>
                <button onClick={handleOpen}>Create Task</button>
            </div>

            <TaskLists selectedTeam={selectedTeam} />

            <div className='modalStyle'>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <h2 id="parent-modal-title">Create New Task</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='modalInputField'>
                                <TextField onBlur={handleBlur} name="taskTitle" id="standard-basic" label="Task Title" variant="standard" fullWidth required/>
                            </div>
                            <div className='modalInputField'>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Task Description"
                                    multiline
                                    rows={2}
                                    fullWidth
                                    name="taskDescription"
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>
                            <div className='modalInputField'>
                                <InputLabel id="demo-simple-select-label">Due Date</InputLabel>
                                <TextField type='date' onBlur={handleBlur} name="dueDate" id="standard-basic"    variant="standard" fullWidth required/>
                            </div>
                            <div className='modalInputField'>
                                <TextField type='number' onBlur={handleBlur} name="priorityLevel" id="standard-basic" label="Priority Level (1-5)" variant="standard" fullWidth required/>
                            </div>
                            <div className='modalInputField'>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Assign To</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name="assignTo"
                                        label="Assign To"
                                        onBlur={handleBlur}
                                        required
                                        multiple
                                        value={selectedMembers}
                                        onChange={handleChange}
                                    >
                                        {
                                            selectedTeam?.teamMember?.map((member, index) => (
                                                <MenuItem
                                                    key={index}
                                                    value={member}
                                                >
                                                    {member}
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='ModalSubmit'>
                                <button>Send</button>
                                <button className='modalButton' onClick={handleClose} variant="outlined">Close</button>
                            </div>
                        </form>
                    </Box>
                </Modal>
            </div>

        </div>
    );
};

export default TeamDetails;