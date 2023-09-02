import './index.css'
import {Component} from 'react'
// Using Function Component
// const Welcome = (props) => {
//   const { name } = props;
//   return (
//     <div className="heading-container">
//       <h1 className="heading">Welcome {name}</h1>
//     </div>
//   )
// }

// Using Class Component
class Welcome extends Component {
  render() {
    const { fullName } = this.props;
    return (
      <div className='heading-container'>
        <h1 className='heading'>Welcome {fullName}</h1>
      </div>
    )
  }
}

// Using Class Component passing person object

// class Welcome extends Component {
//   render() {
//     const { personInfo } = this.props;
//     const { firstName, lastName, age, gender, location } = personInfo;
//     return (
//       <div className='heading-container'>
//         <h1 className='heading'>Welcome {firstName} {lastName}</h1>
//       </div>
//     )
//   }
// }

export default Welcome