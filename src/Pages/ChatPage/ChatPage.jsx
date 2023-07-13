import React, { useState } from "react";
import useAuthContext from "../../Hooks/useAuthContext";
import { useRef } from "react";
import { useLocation } from "react-router";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useGetByAction } from "../../Hooks/useGetByAction";
import Conversation from "./chatComponents/conversation/Conversation";
import Message from "./chatComponents/Message/Message";
import axios from "axios";
import ScrollToBottom from "react-scroll-to-bottom";
import { io } from "socket.io-client";

//styles
import "./ChatPage.css";

export default function ChatPage(props) {
  const { user } = useAuthContext();
  // const location = useLocation();
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();
  // let decoded = jwt_decode(localStorage.getItem("token"));

  // socket init
  useEffect(() => {
    socket.current = io("https://back-ph2h.onrender.com");
    socket.current.on("newMessage", (data) => {
      console.log(data.text);
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);
  console.log(arrivalMessage);
  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages({ messages: [...MessagesRes.messages, arrivalMessage] });
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    if (user) {
      socket.current.emit("addUser", user._id);
      socket.current.on("getUsers", (users) => {
        // setOnlineUsers(
        //   user.followings.filter((f) => users.some((u) => u.userId === f))
        // );
      });
    }
  }, [user, currentChat]);

  // invoking hook used to get conversations for current user
  const {
    getData: getConversations,
    data: conversatonsRes,
    setData: setConversations,
    isPending: conversationsLoading,
    error: conversationsError,
  } = useGetByAction();
// console.log(conversatonsRes.conversations);
  // action to get conversation once user is ready
  useEffect(() => {
    if (user) {
      console.log(user._id);
      getConversations(
        `https://back-ph2h.onrender.com/conversation/chats/${
          user._id
        }/?auth_token=${localStorage.getItem("token")}`
      );
    }
  }, [user]);
  console.log(user);
  // invoking hook to get messages for current converstation
  const {
    getData: getMessages,
    data: MessagesRes,
    setData: setMessages,
    isPending: MessagesLoading,
    error: MessagesError,
  } = useGetByAction();
  console.log(MessagesRes);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      conversationId: currentChat.conversation._id,
      text: newMessage,
    };

    const receiverId = currentChat.conversation.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      conversationId: currentChat.conversation_id,
      senderId: user._id,
      receiverId,
      text: newMessage,
    });
    console.log(message);
    try {
      const res = await axios.post(
        `https://back-ph2h.onrender.com/conversation/new_message/?auth_token=${localStorage.getItem(
          "token"
        )}`,
        message
      );
      setMessages({ messages: [...MessagesRes.messages, res.data] });
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder="Search for friends" className="chatMenuInput" />
          {conversatonsRes &&
            conversatonsRes?.conversations?.map((c) => (
              <div
                onClick={() => {
                  setCurrentChat(c);
                  getMessages(
                    `https://back-ph2h.onrender.com/conversation/${
                      c.conversation._id
                    }/?auth_token=${localStorage.getItem("token")}`
                  );
                }}
              >
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
                <ScrollToBottom>
                  {MessagesLoading && <p>Fetching Your Messages...</p>}
                  {!MessagesLoading &&
                    MessagesRes &&
                    MessagesRes.messages.map((m) => (
                      // ref={scrollRef}
                      <div>
                        <Message message={m} own={m.sender === user._id} />
                      </div>
                    ))}
                </ScrollToBottom>
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
