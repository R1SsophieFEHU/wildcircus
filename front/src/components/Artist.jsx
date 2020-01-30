import React from 'react';
import axios from 'axios';


class Artist extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      artists :[],
      lastname : "",
      firstname : "",
      description: "",
      avatar : ""
    };
  }

  componentDidMount(){
    axios
    .get("http://localhost:8000/artists")
    .then(res => {
      this.setState({artists : res.data });
    });
  }
  
  render (){
    return (
      <div>
      {this.state.artists.map(artist => (
        <article className="space:inset text:center" key={artist.id}>
          <h4 className="space:inline">{artist.lastname} {artist.firstname}</h4>
          <p>{artist.description}</p>

        </article>
      
      ))} 
      </div> 
    );
  }
}

export default Artist;