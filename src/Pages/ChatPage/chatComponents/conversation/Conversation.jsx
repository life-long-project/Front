import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";
import { Avatar, Img } from "@chakra-ui/react";
import { format } from "timeago.js";

export default function Conversation({ conversation, currentUser,setMyFriend }) {
  const [user, setUser] = useState(null);
  console.log(conversation);

  useEffect(() => {
    const friendId = conversation?.conversation.members?.find(
      (m) => m !== currentUser._id
    );
console.log(conversation);
    const getUser = async () => {
      try {
        const res = await axios.get(
          `https://back-ph2h.onrender.com/user/${friendId}`
        );
        setUser(res.data);
        setMyFriend(res.data.user);
        console.log("a7a", res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
    // setUser(friendId);
  }, [currentUser, conversation]);

  return (
    <>
      {user && (
        <>
          <li className="p-2 border-bottom">
            <a href="#!" className="d-flex justify-content-between">
              <div className="d-flex flex-row">
                <div>
                  {
                    <Avatar
                    className="me-3"
                      name={user.user?.full_name}
                      src={user?.user?.profile_url}
                    />
                  }
                  <span className="badge bg-success badge-dot"></span>
                </div>
                <div className="pt-1">
                  <p className="fw-bold mb-0">{user.user?.full_name}</p>
                  <p className="small text-muted">{conversation.lastMessage.text}</p>
                </div>
              </div>
              <div className="pt-1">
                <p className="small text-muted mb-1">{format(conversation.lastMessage.createdAt)}</p>
                <span className="badge bg-danger rounded-pill float-end">
                  
                </span>
              </div>
            </a>
          </li>
        </>
      )}
    </>
  );
}
