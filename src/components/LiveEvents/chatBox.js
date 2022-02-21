import React, { useState, useEffect } from "react";
import styles from "../../../styles/LiveEvents.module.scss";
import ScrollToBottom from "react-scroll-to-bottom";
import { IoSend } from "react-icons/io5";
import io from "socket.io-client";
import { useForm } from "react-hook-form";
import axios from "axios";

function ChatBox() {
  const { register, handleSubmit, errors } = useForm();
  const [isShow, setIsShow] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [messagesList, setMessagesList] = useState([]);
  const [socket, setSocket] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const getMEssages = async () => {
      await axios.get("/api/messages").then((response) => {
        setMessagesList(response.data);
      });
    };
    const getSocket = () => {
      fetch("/api/socketio").finally(() => {
        const socket = io();
        socket.on("connect", () => {});
        setSocket(socket);
      });
    };
    const checkIsLoggedIn = async () => {
      await axios.get("/api/isLoggedIn").then((response) => {
        if (response.data.isLoggedIn) {
          setUser({ _id: response.data._id, userName: response.data.userName });
          setIsLoggedIn(true);
        }
      });
    };
    checkIsLoggedIn();
    getMEssages();
    getSocket();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.off("message").on("message", (data) => {
        const messageData = {
          userId: data.userId,
          userName: data.userName,
          message: data.message,
        };
        setMessagesList((prev) => [...prev, messageData]);
        setCurrentMessage("");
      });
      socket.off("open_chat").on("open_chat", () => {
        setIsShow(true);
      });
    }
  }, [socket, messagesList]);

  const sendMessage = () => {
    if (currentMessage !== "") {
      socket.emit("send_message", {
        userId: user._id,
        message: currentMessage,
      });
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    await axios
      .post("/api/users", { userName: data.userName, email: data.email })
      .then((response) => {
        setUser({ _id: response.data._id, userName: response.data.userName });
        setIsLoggedIn(true);
      });
  };

  return (
    <>
      {isShow ? (
        isLoggedIn === false ? (
          <div className={styles.userChatContainer}>
            <h4>Please enter your name</h4>
            <form
              className={styles.userChatForm}
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                {...register("userName", { required: true })}
                required
              />
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                {...register("email", { required: true })}
                required
              />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
                  style={{ margin: "10px" }}
                  className="btn btn-primary"
                  type="submit"
                >
                  Join Chat
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className={styles.chatWindow}>
            <div className={styles.chatHeader}>
              <p>Live Chat</p>
            </div>
            <div className={styles.chatBody}>
              <ScrollToBottom className={styles.messageContainer}>
                {messagesList.map((messageContent, idx) => {
                  return (
                    <div
                      className={styles.message}
                      id={
                        messageContent.userId === user._id
                          ? styles.you
                          : styles.other
                      }
                      key={idx}
                    >
                      {/* {messageContent.userId === user._id ? null : randomColor()} */}
                      <div>
                        <div className={styles.messageContent}>
                          <p>{messageContent.message}</p>
                        </div>
                        <div className={styles.messageMeta}>
                          <p id="author">{messageContent.userName}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </ScrollToBottom>
            </div>
            <div className={styles.chatFooter}>
              <input
                type="text"
                className="form-control"
                value={currentMessage}
                placeholder="Type your message here"
                onChange={(event) => {
                  setCurrentMessage(event.target.value);
                }}
                onKeyPress={(event) => {
                  event.key === "Enter" && sendMessage();
                }}
              />
              <button onClick={sendMessage}>
                <IoSend />
              </button>
            </div>
          </div>
        )
      ) : null}
    </>
  );
}

export default ChatBox;
