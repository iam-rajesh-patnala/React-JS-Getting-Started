const element = (
  <div className = "container">
    <h1 className="heading">Super Over League</h1>
    <div className="imageContainer">
      <img className="img" src="https://assets.ccbp.in/frontend/react-js/rcb-img.png" alt="image1"/>
      <img className="img" src="https://assets.ccbp.in/frontend/react-js/csk-img.png"alt="image2"/>
    </div>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
)