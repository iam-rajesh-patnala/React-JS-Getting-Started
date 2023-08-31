import UserProfiles from "./components/UserProfiles";
import './App.css'


const UserDetailsList = [
  {
    uniqueId : 1,
    name: "Rajesh",
    role: "Software Engineer",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png"
  },
  {
    uniqueId : 2,
    name: "Preethi",
    role: "Software Engineer",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png"
  },
  {
    uniqueId : 3,
    name: "Nishi",
    role: "Software Engineer",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png"
  },
  {
    uniqueId : 4,
    name: "Tom",
    role: "Software Engineer",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png"
  }
]

const App = () => (
  <div className = "list-container">
    <h1 className = "title">User Profiles</h1>
    <ul className = "users-cards-container">
      {UserDetailsList.map((eachUser) => (
        <UserProfiles userDetails = {eachUser} key={eachUser.uniqueId} />
      ))}
    </ul>
  </div>
)

export default App