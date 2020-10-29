import React from "react";
import ProjectBox from "./projectbox"

function Projects(props) {
   const {title, subtitle} = props
   return (
      <div className="projects">
         <h1>{title}</h1>
         <i>{subtitle}</i>
         <div className="row"> 
            <ProjectBox title="Apollo Invaders" subtitle="Classic space shooter game" textbox="A game made in python with pygame. The game features custom art, a controllable player ship, 4 different powerups to help you on your adventure, and cool randomly generated space background. The game is named after my dog, "/>
            <ProjectBox title="Contact Tracing Website" subtitle="COVID19 Contact Tracing" textbox="A website made for small businesses to help with contact tracing during reopenings. The website creates an unique QR code for each participating business. Customers who scan the QR will be automatically alerted of potential contact with infected individuals."/>
            <ProjectBox title="Sale Finder" subtitle="A way to save money!" textbox="A webscraping program written in python that tracks the prices of items you enter and email you once there is a sale. All you have to do is provide an URL."/>
         </div>
      </div>
   )
}

export default Projects;