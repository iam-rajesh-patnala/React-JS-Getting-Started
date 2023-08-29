const element = (
  <div className = "bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className = "profile-card"> 
      <img className="img" src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" alt="Person" />
      <h2 className="name">Kiran V</h2>
      <p className="info">Vishnu Institute od Computer Education and Technology, Bhimavaram</p>
      <img className="watch-img" src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" alt="Watch" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById('root'));