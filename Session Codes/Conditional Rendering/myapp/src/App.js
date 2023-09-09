import { Component } from 'react';
import Welcome from './components/Welcome';
import './App.css';


class App extends Component{
  state = {
  isLoggedIn : true
  }

  // --------Using if else statement-------- 
  // renderAuthButton = () => {
  //   const { isLoggedIn } = this.state

  //   if (isLoggedIn) {
  //     return <button className='button'>Logout</button>
  //   }
  //   return <button className='button'>Login</button>
  // }


render(){

  const { isLoggedIn } = this.state
  // --------Using Element Variables-------- 
  // let authButton

  // if (isLoggedIn) {
  //   authButton = <button className='button'>Logout</button>
  // } else {
  //   authButton = <button className='button'>Login</button>
  // }

  return (
    <div className='bg-container'>
      <div className='card-container'>
        <h1 className='title'>Welcome</h1>
        {/* --------Using if else statement-------- */}
        {/* {this.renderAuthButton()} */}

        {/* --------Using Element Variables-------- */}
        {/* {authButton} */}

        {/* -------------Using Ternary Operator----------- */}
        {/* {isLoggedIn? <button className='button'>Logout</button> : <button className='button'>Login</button>} */}

        {/* ------------ Using && Operator ------------- */}
        {isLoggedIn && <button className='button'>Logout</button>}
        {!isLoggedIn && <button className='button'>Login</button>}

        <Welcome firstName={"rajesh"}/>
      </div>
    </div>
  )
}
}

export default App;
