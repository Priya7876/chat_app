import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { collection, orderBy, onSnapshot, limit, query, QuerySnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import Message from '../Message/Message';
import SendMessage from '../SendMessage/SendMessage';
import "./ChatRoom.css"
const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"), limit(100)
    );
    const unsub = onSnapshot(q, (QuerySnapshot) => {
      const fetchMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchMessages.push({ ...doc.data(), id: doc.id })
      });
      const sortedMessage = fetchMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      )
      setMessages(sortedMessage);
    })
    return () => unsub
  }, [])
  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>
  );
}

export default ChatRoom;
