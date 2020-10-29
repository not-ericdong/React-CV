import { Component } from 'react';
import './App.css';
import About from "./components/about"
import Input from "./components/inputs"
import Header from "./components/header"
import bpic from "./imgs/toronto.jpg"
import mePic from "./imgs/leme (1).png"
import Projects from "./components/projects"

class App extends Component {
  constructor () {
    super();
    this.state = {

    }
  }


  render() {
    // const {} = this.state;
    const bpicStyle = {
      width: "100%",
      backgroundImage: `url(${bpic})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }
    const aboutMe = "Don't be fooled by the domain name this is in fact my website. I am a recent graduate of the Physics program at The University of Waterloo. I am currently dedicating my time to become a better programmer. I have some projects I built listed below, if you're interested please take a look. I also have my previous work experiences listed below as well. I'm looking for an opportunity to apply my skillset in a real world setting."
    
    

    return (
    <div className="App">
      <Header titleA="Hi, my name is" titleB="eric dong" backgroundPic={bpicStyle}/>

      <body>
        {/* <form onSubmit={this.generateCV}>
          <Input inputName="Title"/>
          <Input inputName="Subtitle"/>
          <button type="submit">Generate</button>
        </form> */}


        <About title="Thanks for visiting my brand new website!" subtitle="I use this website to showcase my personal projects and hobbies." aboutMe={aboutMe} picture={mePic}/>

        <Projects title="PERSONAL PROJECTS" subtitle="Here are some of my personal software projects. I had a lot of fun making and designing these from scratch."/>

      </body>
    </div>
  ); 
  }
  
}

export default App;
