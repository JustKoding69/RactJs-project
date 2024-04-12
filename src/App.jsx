import './App.css'
import LoginUser from './Components/Login'
import UserProfile from './Components/Profile'
import UserContextProvider from './Context/YserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <>
        <h1>My Application for Context Application.</h1>
        <LoginUser />
        <UserProfile/>
      </>
    </UserContextProvider>
  )
}

export default App
