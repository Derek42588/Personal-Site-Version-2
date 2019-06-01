import React, { Component } from 'react';
import classes from './ProjectCard.module.css';
import Blackjack from '../../Images/BlackJackTwo.PNG'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa';
import CatchOfTheDay from '../../Images/CatchOfTheDayTwo.PNG'
import YelpCamp from '../../Images/YelpCampTwo.PNG'

const titles = ["Blackjack Trainer", "Catch Of The Day", "Yelp Camp"]
const subtitles = ["React", "React", "HTML5, CSS3, JavaScript and MongoDB"]
const info = [
"A blackjack game that also tells you the suggested actions for each hand vs. the dealer upcard", 
"A react program showing a restaurant's menu and a customers orders", 
"Yelp-like site supporting usernames and more through MongoDB"
]
const links = [
    ["https://react-blackjack-dcp.firebaseapp.com/","https://github.com/Derek42588/react-blackjack"],
    ["https://5c30e9857c8492796d93e7f5--loving-goldwasser-7c4ad0.netlify.com/","https://github.com/Derek42588/CatchOfTheDay"],
    ["https://infinite-brushlands-98227.herokuapp.com/", "https://github.com/Derek42588/YelpCamp"]
    
]

class ProjectCard extends Component {
    

    state = {

        totalSlides: 2,
        currentIndex: 0,
        tiltes: ["Blackjack Trainer", "Catch Of The Day", "Yelp Camp"],
        subtitles: ["React", "React", "HTML5, CSS3, JavaScript and MongoDB"],
        info: [
        "A blackjack game that also tells you the suggested actions for each hand vs. the dealer upcard", 
        "A react program showing a restaurant's menu and a customers orders", 
        "Yelp-like site supporting usernames, edits, comments, connected through MongoDB"
        ],
        links: [
            ["https://react-blackjack-dcp.firebaseapp.com/","https://github.com/Derek42588/react-blackjack"],
            ["https://5c30e9857c8492796d93e7f5--loving-goldwasser-7c4ad0.netlify.com/","https://github.com/Derek42588/CatchOfTheDay"],
            ["https://infinite-brushlands-98227.herokuapp.com/", "https://github.com/Derek42588/YelpCamp"]
            
        ]

    }

    nextSlide = () => {
        let index = this.state.currentIndex;

        index +=1;

        if (index > this.state.totalSlides) {
            index = 0;
        }

        this.setState(
            {
                currentIndex: index
            }
        )
        
    }

    prevSlide = () => {
        let index = this.state.currentIndex;

        index -=1;

        if (index < 0 ) {
            index = this.state.totalSlides
        }

        this.setState (
            {currentIndex: index}
        )
    }


    render () {
        
        let image = null;
        if (this.state.currentIndex === 0 ) {
            image = (
                <img src = {Blackjack} alt = "Blackjack Demo App"></img>
            )
        }
        if (this.state.currentIndex === 1 ) {
            image = (
                <img src = {CatchOfTheDay} alt = "Catch Of The Day App"></img>
            )
        }
        if (this.state.currentIndex === 2 ) {
            image = (
                <img src = {YelpCamp} alt = "Yelp Camp Demo App"></img>
            )
        }

        return(
            <div className = {classes.ImageSlide}>
                <h3>{titles[this.state.currentIndex]}</h3>
                <div className = {classes.ImageCard}>
                    <FaChevronLeft className = {classes.Icon} onClick = {this.prevSlide}/>
                    <div className = {classes.ImageContainer}>
                        {image}                    
                    </div>
                    <FaChevronRight className = {classes.Icon} onClick = {this.nextSlide}/>
               </div>
               <div className = {classes.SlideInfo}>
                    <p>Created with <span className = {classes.Tools}>{subtitles[this.state.currentIndex]}</span></p>
                    <p>{info[this.state.currentIndex]}</p>
               </div>
               <div className = {classes.Clickers}>
                    <a href = {links[this.state.currentIndex][0]} className = {classes.Button}>Demo</a>
                    <a href = {links[this.state.currentIndex][1]}className = {classes.Button}>Github</a>
                </div>
            </div>
            
        )
    }
    
}

export default ProjectCard;