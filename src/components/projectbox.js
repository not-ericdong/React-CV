import React from "react";

function ProjectBox (props) {
   const { title, subtitle, textbox } = props

   return (
      <div className="projectbox">
         <h3>{title}</h3>
         <i>{subtitle}</i>
         <p>{textbox}</p>
      </div>
   );
}

export default ProjectBox;