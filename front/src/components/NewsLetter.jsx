import React from 'react';


function NewsLetter() {
  return (
    <div className="flex:row flex-both:center">
      <div>
      <h4> Want to follow our news ?</h4>
        <p> Subscribe to the newsletter to receive in your inbox all the news of the site!</p>
        </div>
        <form className="flex:column flex-both:center">
        <div className="flex:column flex-cross:center space:stack">
          <label className="space:stack" htmlFor="Lastname">Lastname</label>
          <input className="flex:1 space:inset-squish" type="text" id="Lastname" name="Lastname" required></input>
          <label className="space:stack" htmlFor="Firstname">Firstname</label>
          <input className="flex:1 space:inset-squish" type="text" id="Firstname" name="Firstname" required></input>
          <label className="space:stack" htmlFor="email">Email</label>
          <input className="flex:1 space:inset-squish" type="email" id="email" name="email" required></input>
          <button>Send

          </button>
          </div>
        </form>

    </div>
  );
}

export default NewsLetter;