import React from 'react';
import AboutTextbox from "./aboutTextbox";

function About(props) {
   const { picture, title, subtitle, aboutMe } = props;

   return (
      <div className="bodyText">
         <h1>{title}</h1>
         <i>{subtitle}</i>
         <p>{aboutMe}</p>
         <img src={picture}/>
         <div className="row">
            <AboutTextbox textboxTitle="Software Developement" textboxWords="I love how programming allows me to solve complex problems while making useful products. I have a multitude of projects I created listed below."/>
            <AboutTextbox textboxTitle="Cloud Computing" textboxWords="As a certified AWS solutions architect I am able to quickly deploy applications to the cloud. I would like the opportunity to use my skills in cloud architecture to tackle real world problems."/>
            <AboutTextbox textboxTitle="System Administration" textboxWords="I have lots of experience with managing enterprise systems of varying sizes. I have managed mix server environments (Unix/Linux/Windows) to ensure 99.9% uptime."/>
            <AboutTextbox textboxTitle="Interests" textboxWords="I enjoy spending my free time playing badminton, working out, and playing video games. Once I have begun my career in the tech industry I want to begin practicing astrophotography as a hobby and transform this website into a gallery for my pictures."/>
         </div>
      </div>
   );
}

export default About;