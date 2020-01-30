import React from 'react';


function NewsLetter() {
  return (
    <div>
      <h4> Want to follow our news ?</h4>
        <p> Subscribe to the newsletter to receive in your inbox all the news of the site!</p>
        <form>
          <label htmlFor="Lastname">Lastname</label>
          <input type="text" id="Lastname" name="Lastname" required></input>
          <label htmlFor="Firstname">Firstname</label>
          <input type="text" id="Firstname" name="Firstname" required></input>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required></input>
          <button>Send

          </button>
        </form>

    </div>
  );
}

export default NewsLetter;