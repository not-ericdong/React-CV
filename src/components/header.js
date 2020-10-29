import React from 'react';

function Header(props) {
   const { backgroundPic, titleA, titleB } = props;

   return (
      <header style={backgroundPic}>
         <h2>{titleA}</h2>
         <h1>{titleB}</h1>
      </header>
   );
}

export default Header;