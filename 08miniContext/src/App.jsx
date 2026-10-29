
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import UserContextProvider from "./context/UserContextProvider.jsx";

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App