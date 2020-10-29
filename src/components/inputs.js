import React, { Component } from 'react'

class Input extends Component {
   constructor(props) {
      super(props);
   
      this.state = {
          inputName: ''
      }
   }
   
   handleInputChange = (event) => {
      const { target: { name, value } } = event
      this.setState({
         [name]: value
      })
   }

   render() {
      const inName = this.props.inputName
      return (
            <div>
               <label>{inName + ": "}</label>
               <input 
               type="text" 
               name={inName}
               value={this.state.inName} 
               onChange={this.handleInputChange}/>
            </div>
            
         
      )
   }
}

// handleChangeMain = (event) => {
  //   this.setState({
  //     mainTitle: event.target.value
  //   });
  // };

  // handleChangeSub = (event) => {
  //   this.setState({
  //     subTitle: event.target.value
  //   });
  // };

  // handleChangeBlurb = (event) => {
  //   this.setState({
  //     blurbTitle: event.target.value
  //   });
  // };

  // handleChangePic = (event) => {
  //   this.setState({
  //     myPicture: event.target.value
  //   });
  // };

  // handleChangeTxt = (event) => {
  //   this.setState({
  //     textbox: event.target.value 
  //   });
  // };
  {/* <input type="text" value={mainTitle} onChange={this.handleChangeMain}/>
          <input type="text" value={subTitle} onChange={this.handleChangeSub}/>
          <input type="text" value={blurbTitle} onChange={this.handleChangeBlurb}/>
          <input type="text" value={myPicture} onChange={this.handleChangePic}/>
          <input type="text" value={textbox} onChange={this.handleChangeTxt} /> */}

export default Input
