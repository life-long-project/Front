import React, { useState } from "react";
import useAuthContext from "../../Hooks/useAuthContext";
import { useRef } from "react";
import { useLocation } from "react-router";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useGetByAction } from "../../Hooks/useGetByAction";
import Conversation from "./chatComponents/conversation/Conversation";

//styles
import "./ChatPage.css";

export default function ChatPage(props) {
  const { user } = useAuthContext();
  const location = useLocation();
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  let decoded = jwt_decode(localStorage.getItem("token"));

  const {
    getData,
    data: conversatonsRes,
    isPending,
    error: conversationError,
  } = useGetByAction();
  console.log();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const message = {
    //   sender: user._id,
    //   text: newMessage,
    //   conversationId: currentChat._id,
    // };

    // const receiverId = currentChat.members.find(
    //   (member) => member !== user._id
    // );

    // socket.current.emit("sendMessage", {
    //   senderId: user._id,
    //   receiverId,
    //   text: newMessage,
    // });

    // try {
    //   const res = await axios.post("/messages", message);
    //   setMessages([...messages, res.data]);
    //   setNewMessage("");
    // } catch (err) {
    //   console.log(err);
    // }
  };

  useEffect(() => {
    if (user) {
      console.log(user._id);
      getData(
        `https://back-ph2h.onrender.com/conversation/chats/${
          user._id
        }/?auth_token=${localStorage.getItem("token")}`
      );
    }
  }, [user]);

  console.log(location.state);

  // const {
  //   data: conversations,
  //   isPending,
  //   error,
  // } = useAxiosGet(
  //   `https://back-ph2h.onrender.com/conversation/chats/${
  //     decoded.user?._id
  //   }/?auth_token=${localStorage.getItem("token")}`
  // );

  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder="Search for friends" className="chatMenuInput" />
          {conversatonsRes &&
            conversatonsRes.conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {currentChat ? (
            <>
              <div className="chatBoxTop">
                {messages &&
                  messages.map((m) => (
                    // <div ref={scrollRef}>
                    //   <Message message={m} own={m.sender === user._id} />
                    // </div>
                    <p>message</p>
                  ))}
              </div>
              <div className="chatBoxBottom">
                <textarea
                  className="chatMessageInput"
                  placeholder="write something..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                ></textarea>
                <button className="chatSubmitButton" onClick={handleSubmit}>
                  Send
                </button>
              </div>
            </>
          ) : (
            <span className="noConversationText">
              Open a conversation to start a chat.
            </span>
          )}
        </div>
      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          {/* <ChatOnline
          onlineUsers={onlineUsers}
          currentId={user._id}
          setCurrentChat={setCurrentChat}
        /> */}
        </div>
      </div>
    </div>
  );
}
