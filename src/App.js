import logo from './logo.svg';
import './App.css';
import { auth } from "./firebase";
import { Routes,Route,BrowserRouter, Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from './Components/NavBar/NavBar';
import ChatRoom from './Components/ChatRoom/ChatRoom';
import Welcome from './Components/Welcome/Welcome';
function App() {
  const [user] = useAuthState(auth);
  return (
  <div className="App">
    <NavBar/>
     {!user? <Welcome/>   : <ChatRoom/>}
    </div>
  );
}

export default App;
