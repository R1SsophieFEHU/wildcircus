import React from 'react';
import axios from 'axios';


class Representation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      representations :[],
      title : "",
      description: "",
      category : ""
    };
  }

  componentDidMount(){
    axios
    .get("http://localhost:8000/representations")
    .then(res => {
      this.setState({representations : res.data });
    });
  }
  
  render (){
    return (
      <div>
      {this.state.representations.map(representation => (
        <article className="space:inset text:center" key={representation.id}>
          <h4 className="space:inline">{representation.title} {representation.category}</h4>
          <p>{representation.description}</p>

        </article>
      
      ))} 
      </div> 
    );
  }
}

export default Representation;