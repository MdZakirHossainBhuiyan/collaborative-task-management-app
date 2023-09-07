import React, { useContext, useEffect, useState } from 'react';
import './Index.css';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import TeamLists from '../TeamLists/TeamLists';
import { Box, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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

const Index = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [inputValue, setInputValue] = useState(null);
    const [users, setUsers] = useState(null);
    const [teamLists, setTeamLists] = useState(null);
    const [selectedMembers, setSelectedMembers] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let navigate = useNavigate();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("userInfo"));
        const teamList = JSON.parse(localStorage.getItem("teamLists"));
        setUsers(userData);
        setTeamLists(teamList);
    }, [])

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

        if(teamLists){
            const oldValues = [...teamLists];
            oldValues.push(inputValue);
            localStorage.setItem("teamLists", JSON.stringify(oldValues));
            navigate("/index", { replace: true});
        }
        else{
            const oldValues = [];
            oldValues.push(inputValue);
            localStorage.setItem("teamLists", JSON.stringify(oldValues));
            navigate("/index", { replace: true});
        }
    }

    // console.log('team data -> ', inputValue);
    // console.log('selected member -> ', selectedMembers);

    return (
        <div>
            <Header />
            <div className='createTeamArea'>
                <h1>Collaborative Task Management App</h1>
                <button onClick={handleOpen}>Create Team</button>
            </div>

            <TeamLists />

            <div className='modalStyle'>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <h2 id="parent-modal-title">Create New Team</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='modalInputField'>
                                <TextField onBlur={handleBlur} name="teamTitle" id="standard-basic" label="Team Title" variant="standard" fullWidth required/>
                            </div>
                            <div className='modalInputField'>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Team Description"
                                    multiline
                                    rows={2}
                                    fullWidth
                                    name="description"
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>
                            <div className='modalInputField'>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select Team Members</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name="teamMember"
                                        label="Invite Team Members"
                                        onBlur={handleBlur}
                                        required
                                        multiple
                                        value={selectedMembers}
                                        onChange={handleChange}
                                    >
                                        {
                                            users?.map((user) => (
                                                <MenuItem
                                                    key={user?.userName}
                                                    value={user?.userName}
                                                >
                                                    {/* <img className='dropdownImage' src={user?.image} alt='image' /> */}
                                                    {user?.userName}
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

export default Index;