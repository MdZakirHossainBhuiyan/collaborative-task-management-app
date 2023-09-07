import React from 'react';
import './TeamLists.css';
import TeamList from '../TeamList/TeamList';

const teamList = [
    {
        id: 1,
        teamName: "Task Management App - Frontend",
        description: "Frontend Team for Task Management App: Crafting intuitive user interfaces to enhance productivity and user experience. Making task management a breeze.",
        teamMember: [
            {
                memberName: "Md zakir Hossain Bhuiyan",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZj30GqCw6ppxNeuEwU4Spr3-nIU3eM5PwtA&usqp=CAU",
            },
            {
                memberName: "Sabbir Hassan Anik",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZj30GqCw6ppxNeuEwU4Spr3-nIU3eM5PwtA&usqp=CAU",
            },
            {
                memberName: "Md Kamrul Hasan Rabby",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZj30GqCw6ppxNeuEwU4Spr3-nIU3eM5PwtA&usqp=CAU",
            },
        ]
    },
    {
        id: 2,
        teamName: "Task Management App - Backend",
        description: "Backend Team for Task Management App: Crafting intuitive user interfaces to enhance productivity and user experience. Making task management a breeze.",
        teamMember: [
            {
                memberName: "Md zakir Hossain Bhuiyan",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZj30GqCw6ppxNeuEwU4Spr3-nIU3eM5PwtA&usqp=CAU",
            },
            {
                memberName: "Sabbir Hassan Anik",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZj30GqCw6ppxNeuEwU4Spr3-nIU3eM5PwtA&usqp=CAU",
            },
            {
                memberName: "Md Kamrul Hasan Rabby",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZj30GqCw6ppxNeuEwU4Spr3-nIU3eM5PwtA&usqp=CAU",
            },
        ]
    },
    {
        id: 3,
        teamName: "Task Management App - SQ Team",
        description: "Backend Team for Task Management App: Crafting intuitive user interfaces to enhance productivity and user experience. Making task management a breeze.",
        teamMember: [
            {
                memberName: "Md zakir Hossain Bhuiyan",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZj30GqCw6ppxNeuEwU4Spr3-nIU3eM5PwtA&usqp=CAU",
            },
            {
                memberName: "Sabbir Hassan Anik",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZj30GqCw6ppxNeuEwU4Spr3-nIU3eM5PwtA&usqp=CAU",
            },
            {
                memberName: "Md Kamrul Hasan Rabby",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZj30GqCw6ppxNeuEwU4Spr3-nIU3eM5PwtA&usqp=CAU",
            },
        ]
    }
]

const TeamLists = () => {
    return (
        <div className='teamListArea'>
            {
                teamList.map((team) => <TeamList key={team?.id} team={team} />)
            }
        </div>
    );
};

export default TeamLists;