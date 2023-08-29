import React ,{useState}from 'react';
import {auth,db} from '../../firebase';
import "../SendMessage/SendMessage.css"
import { addDoc,collection,serverTimestamp } from 'firebase/firestore';
const SendMessage = () => {
    const [message,setMessage] = useState("");
    const sendMessage = async(event)=>{
        event.preventDefault();
        if(message.trim()==""){
            alert("Please enter a vaild message")
             return;
        }
        console.log(auth.currentUser);
        const {uid,displayName,photoURL}= auth.currentUser;
        await addDoc(collection(db,"messages"),
        {
            text : message,
            name: displayName,
            avatar:photoURL,
            createdAt : serverTimestamp(),
            uid,
    


        }
        
        
        );
        setMessage("");
    }
  return (
    
    <form  onSubmit={(event) => sendMessage(event)} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="form-input__input"
        placeholder="type message..."
      />
      <button   className ="button1" type="submit">Send</button>
    </form>
  );
}

export default SendMessage;
