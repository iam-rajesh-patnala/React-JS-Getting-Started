import './index.css'


const CardItem = (props) => {
  const { cardDetails } = props;
  const { title, description, imgUrl, className } = cardDetails;
  
  return (
    <li className={`card ${className}`} >
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="image-container">
        <img src={imgUrl} alt={title} className="img"/>
      </div>
    </li>
  )
}

export default CardItem