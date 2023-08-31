const Notification = props => {
  //  Write your code here.
  const { className, text, url } = props
  return (
    <div className={`notification ${className}`}>
      <img src={url} className="icon"/>
      <p className="text">{text}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className = "bg-container">
    <h1 className="heading">Notifications</h1>
    <div className = "notifications-container">
      <Notification className = "info" text = "Information Message" url = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>
      <Notification className = "success" text = "Success Message" url = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png"/>
      <Notification className = "warn" text = "Warning Message" url = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"/>
      <Notification className = "error" text = "Error Message" url = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"/>
    </div>
  </div>

)

ReactDOM.render(element, document.getElementById('root'))
