import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ChatBox from "./ChatBox";
import axios from "axios";
import styles from "../../../styles/LiveEvents.module.scss";

function UserChat() {
  const { register, handleSubmit, errors } = useForm();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  const onSubmit = async (data) => {
    console.log(data);
    await axios
      .post("/api/users", { userName: data.userName, email: data.email })
      .then((response) => {
        setUser({ _id: response.data._id, userName: response.data.userName });
        setIsLoggedIn(true);
      });
  };
  useEffect(() => {
    const checkIsLoggedIn = async () => {
      await axios.get("/api/isLoggedIn").then((response) => {
        if (response.data.isLoggedIn) {
          setUser({ _id: response.data._id, userName: response.data.userName });
          setIsLoggedIn(true);
        }
      });
    };
    checkIsLoggedIn();
  }, []);
  return (
    <>
      {isLoggedIn ? (
        <ChatBox user={user} />
      ) : (
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
      )}
    </>
  );
}

export default UserChat;
