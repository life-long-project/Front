import React, { useState } from "react";
import useAuthContext from "../../Hooks/useAuthContext";
import { useRef } from "react";
import { useLocation } from "react-router";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useGetByAction } from "../../Hooks/useGetByAction";
import Conversation from "./chatComponents/conversation/Conversation";
import axios from "axios";
import ScrollToBottom from "react-scroll-to-bottom";
import { io } from "socket.io-client";
import "./ChatPage.css";
import { Avatar, Img } from "@chakra-ui/react";
import { format } from "timeago.js";

export default function ChatPage(props) {
  const { user } = useAuthContext();
  // const location = useLocation();
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [myFriend, setMyFriend] = useState(null);
  const [myProfile, setMyProfile] = useState(null);
  const socket = useRef();
  // let decoded = jwt_decode(localStorage.getItem("token"));

  // socket init
  useEffect(() => {
    socket.current = io("https://back-ph2h.onrender.com");
    socket.current.on("newMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);
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

  console.log(myFriend, "myFriend");
  console.log(myProfile, "myProfile");

  // invoking hook used to get conversations for current user
  const {
    getData: getConversations,
    data: conversatonsRes,
    setData: setConversations,
    isPending: conversationsLoading,
    error: conversationsError,
  } = useGetByAction();
  // action to get conversation once user is ready
  useEffect(() => {
    if (user) {
      getConversations(
        `https://back-ph2h.onrender.com/conversation/chats/${
          user._id
        }/?auth_token=${localStorage.getItem("token")}`
      );
    }
  }, [user]);
  // get my profile
  useEffect(() => {
    if (user) {
      const getUser = async () => {
        try {
          const res = await axios.get(
            `https://back-ph2h.onrender.com/user/${user._id}`
          );

          setMyProfile(res.data.user);
        } catch (err) {
          console.log(err);
        }
      };
      getUser();
    }
  }, [user]);
  // invoking hook to get messages for current converstation
  const {
    getData: getMessages,
    data: MessagesRes,
    setData: setMessages,
    isPending: MessagesLoading,
    error: MessagesError,
  } = useGetByAction();

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
    <>
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
              <div className="card rounded">
                <div className="card-body rounded">
                  <div className="p-2">
                    <div className="input-group rounded mb-3">
                      <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                      />
                      <span
                        className="input-group-text border-0"
                        id="search-addon"
                      >
                        <i className="fas fa-search"></i>
                      </span>
                    </div>

                    <div
                      data-mdb-perfect-scrollbar="true"
                      style={{ position: "relative" }}
                      className="chat-heads-section"
                    >
                      <ul className="list-unstyled mb-0">
                        {conversatonsRes &&
                          conversatonsRes?.conversations?.map((c, key) => (
                            <div
                              onClick={() => {
                                setCurrentChat(c);
                                getMessages(
                                  `https://back-ph2h.onrender.com/conversation/${
                                    c.conversation._id
                                  }/?auth_token=${localStorage.getItem(
                                    "token"
                                  )}`
                                );
                              }}
                            >
                              <Conversation
                                conversation={c}
                                currentUser={user}
                                key={key}
                                setMyFriend={setMyFriend}
                              />
                            </div>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-7 col-xl-8 mb-4 mb-md-0">
              <div className="card px-2">
                <div className="card-body">
                  {currentChat ? (
                    <>
                      <ScrollToBottom className="chat-container-section">
                        <div
                          className="pt-3 pe-3 chat-container-section"
                          data-mdb-perfect-scrollbar="true"
                          style={{ position: "relative" }}
                        >
                          {MessagesLoading && <p>Fetching Your Messages...</p>}
                          {!MessagesLoading &&
                            MessagesRes &&
                            MessagesRes.messages.map((m) => (
                              // ref={scrollRef}
                              <div>
                                {m.sender === user._id ? (
                                  <div className="d-flex flex-row justify-content-end">
                                    <div>
                                      <p className="small p-2 me-2 mb-1 text-white rounded-3 bg-primary">
                                        {m.text}
                                      </p>
                                      <p className="small me-2 mb-3 rounded-3 text-muted">
                                        {format(m.createdAt)}
                                      </p>
                                    </div>
                                    <Avatar
                                      className="ms-2"
                                      name={myProfile && myProfile.full_name}
                                      src={myProfile && myProfile.profile_url}
                                    />
                                  </div>
                                ) : (
                                  <div className="d-flex flex-row justify-content-start">
                                    <Avatar
                                      className="me-2"
                                      name={myFriend && myFriend.full_name}
                                      src={myFriend && myFriend.profile_url}
                                    />
                                    <div>
                                      <p
                                        className="small p-2 ms-3 mb-1 rounded-3"
                                        style={{ backgroundColor: "#f5f6f7" }}
                                      >
                                        {m.text}
                                      </p>
                                      <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                                        {format(m.createdAt)}
                                      </p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                        </div>
                      </ScrollToBottom>
                      <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                      <Avatar
                                      className="me-2"
                                      name={myProfile && myProfile.full_name}
                                      src={myProfile && myProfile.profile_url}
                                    />

                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="exampleFormControlInput2"
                          placeholder="Type message"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <button className="ms-3" onClick={handleSubmit}>
                          <i className="fas fa-paper-plane"></i>
                        </button>
                      </div>
                    </>
                  ) : (
                    <p>
                      Start a conversation{" "}
                      <i className="fa-solid fa-spinner fa-spin ms-2"></i>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
