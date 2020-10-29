import React from "react";

function AboutTextbox (props) {
   const { textboxTitle, textboxWords } = props;

   return (
      <div className="aboutTextbox">
         <h4>{textboxTitle}</h4>
         <p>
            {textboxWords}
         </p>
      </div>
   )
}

export default AboutTextbox;