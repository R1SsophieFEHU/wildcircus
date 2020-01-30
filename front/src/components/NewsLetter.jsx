import React from 'react';
import axios from 'axios';


class NewsLetter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newsletterInfos: [],
      email : "",
      lastname : "",
      firstname : ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  sendEmail = () => {
    axios
      .post("http://localhost:8000/newsletter", {

        lastname : this.state.lastname,
        firstname : this.state.firstname,
        email: this.state.email
      })
      .then(res => {
        this.setState({newsletterInfos : [...this.state.newsletterInfos, res.data] }, () => alert("Email will be send to you"));
      });
  }; 
  

  render (){
    return (
      <div className="flex:row flex-both:center ">
        <div style={{marginRight:"7vh"}}>
        <h4> Want to follow our news ?</h4>
          <p> Subscribe to the newsletter to receive in your inbox all the news of the site!</p>
          </div>
          <form className="flex:column">
            <div className="flex:column flex-cross:center space:stack ">
              <label className="space:stack" htmlFor="lastname">Lastname</label>
              <input 
              className="flex:1 space:inset-squish" 
              type="text" 
              id="lastname" 
              name="lastname" 
              onChange={this.handleChange}
              value={this.state.lastname}
              required>

              </input>
              <label className="space:stack" htmlFor="firstname">Firstname</label>
              <input 
              className="flex:1 space:inset-squish" 
              type="text" 
              id="firstname" 
              name="firstname" 
              onChange={this.handleChange}
              value={this.state.firstname}
              required>
              </input>

              <label className="space:stack" htmlFor="email">Email</label>
              <input 
              className="flex:1 space:inset-squish" 
              type="email" 
              id="email" 
              name="email" 
              onChange={this.handleChange}
              value={this.state.email}
              required>                
              </input>

              <button 
              style={{marginTop: "1rem"}}
              type="submit" onClick = {this.sendEmail}>Send</button>
            </div>
          </form>

      </div>
    );
  }
}

export default NewsLetter;