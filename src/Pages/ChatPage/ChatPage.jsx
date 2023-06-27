import React, { useMemo, useState } from "react";
import { useAxiosGet } from "../../Hooks/useAxiosGet";
import useAuthContext from "../../Hooks/useAuthContext";
import { useRef } from "react";
import { useLocation } from "react-router";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useEffect } from "react";
export default function ChatPage(props) {
  //const [conversations, setConversations] = useState(null);
  const { user } = useAuthContext();
  const location = useLocation();

  console.log(location.state);
  let decoded = jwt_decode(localStorage.getItem("token"));
  const {
    data: conversations,
    isPending,
    error,
  } = useAxiosGet(
    `https://back-ph2h.onrender.com/conversation/chats/${
      decoded.user?._id
    }/?auth_token=${localStorage.getItem("token")}`
  );

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {conversations &&
        conversations.conversations.map((con, i) => (
          <p key={i}>conversation</p>
        ))}
      {error && <p>{error}</p>}
    </div>
  );
}
