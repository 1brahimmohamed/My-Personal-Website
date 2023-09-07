import {experimentalStyled as styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import React from "react";
import ArrowIcon from "../Icons/ArrowIcon";

const skills: string[] = [
    'JavaScript',
    'TypeScript',
    'C/C++',
    'C Language',
    'Python',
    'React.js',
    "UI/UX",
    'Node.js',
    "Flask",
    "Express.js",
    "MongoDB",
    "SQL",
    "Linux (Ubuntu)",    "Git/GitHub",

    "Docker",
    "Kubernetes",
];

const concepts: string[] = [
    'Data Structures',
    'Algorithms',
    'Object Oriented Programming',
    'Problem Solving',
    'Microservices',
    'RESTful APIs',
    'Agile Methodologies',
    'DevOps',
]


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#070f1c',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
    '&:hover': {
        color: "#1A2027",
        backgroundColor: '#64ffda', // Change the background color on hover
        cursor: 'pointer', // Change the cursor to a pointer on hover
    },
}));

const MySkills = () => {
    return (
        <div
            id="MySkillsSection"
            className="flex flex-col space-y-7 w-100 h-100 items-center bg-AAprimary"
            style={{marginTop: "7rem"}}>

            <section className="flex flex-row items-center">
                <div className="flex flex-row items-center">
                    <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"}/>
                    <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 04.</span>
                </div>

                <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
                    I am proficient in
                </span>
                <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
            </section>

            <div className="flex flex-row space-x-2 items-center">
                <span className=" font-sans text-AAsecondary text-base">Technologies & Languages</span>
            </div>

            <Box sx={{flexGrow: 1}} style={{maxWidth: '80rem', padding: '0 2rem'}}>
                <Grid container spacing={{xs: 2, md: 1}} columns={{xs: 4, sm: 8, md: 12}}>
                    {
                        skills.map((skill, index) => (
                            <Grid item xs={2} sm={4} md={3} key={skill}>
                                <Item>{skill}</Item>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>

            <div className="flex flex-row space-x-2 items-center">
                <span className=" font-sans text-AAsecondary text-base">Concepts</span>
            </div>

            <Box sx={{flexGrow: 1}} style={{maxWidth: '80rem', padding: '0 2rem'}}>
                <Grid container spacing={{xs: 2, md: 1}} columns={{xs: 4, sm: 8, md: 12}}>
                    {
                        concepts.map((concept, index) => (
                            <Grid item xs={2} sm={4} md={3} key={concept}>
                                <Item>{concept}</Item>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </div>
    );
};

export default MySkills;
