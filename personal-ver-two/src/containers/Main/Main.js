import React, {Component} from 'react';
import classes from './Main.module.css';
import {FaReact, FaHtml5, FaCss3, FaJs, FaBootstrap, FaGit, FaDatabase} from 'react-icons/fa';
import ProjectCard from '../ProjectCard/ProjectCard'
import BasicForm from '../../components/BasicForm/BasicForm'



class Main extends Component {

 
    render () {



        return (
            <div className = {classes.MainContainer}>
                <div id = "home" className = {classes.IntroCard}>
                    <h1>Derek Pyle</h1>
                    <h3>Front End Dev</h3>
                    <p>I'm a web developer based in Boston focusing on front-end, aiming to eventually be a full-stack developer.  Right now, I'm working on
                        web apps made primarily with React.  Current goal is an <span style = {{color: "#9ACD32"}}>entry-level</span> position!
                    </p>
                </div>
                <div className = {classes.ToolCard}>
                    <h1>WHAT I WORK WITH</h1>
                    <p>
                        I have experience with the following:
                    </p>
                    <div className = {classes.Icons}>
                        <div className = {classes.Icon}> <FaReact /> <p>React</p></div>
                        <div className = {classes.Icon}> <FaHtml5 /> <p>HTML5</p></div>
                        <div className = {classes.Icon}> <FaCss3 /> <p>CSS3</p></div>
                        <div className = {classes.Icon}> <FaJs /> <p>JavaScript</p></div>
                        <div className = {classes.Icon}> <FaBootstrap /> <p>Bootstrap</p></div>
                        <div className = {classes.Icon}> <FaGit /> <p>Git</p></div>
                        <div className = {classes.Icon}> <FaDatabase /> <p>Firebase</p></div>
                    </div>
                </div>
                <div id = "projects" className = {classes.ProjectCard}>
                    <h1>PROJECTS I'VE WORKED ON</h1>
                    <ProjectCard />
                    
                </div>
                <BasicForm />
            </div>
        )
    }
}

export default Main