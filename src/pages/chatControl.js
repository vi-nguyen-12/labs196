import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import io from "socket.io-client";

function ChatControl() {
  const { register, handleSubmit, errors } = useForm();
  // const [socket, setSocket] = useState();

  // useEffect(() => {
  //   const getSocket = () => {
  //     fetch("/api/socketio").finally(() => {
  //       const socket = io();
  //       socket.on("connect", () => {});
  //       setSocket(socket);
  //     });
  //   };
  //   getSocket();
  // }, []);

  // const onSubmit = async (data) => {
  //   if (socket) {
  //     if (data !== "") {
  //       socket.emit("start_chat", {
  //         data,
  //       });
  //     }
  //   }
  // };
  return (
    <Row>
      <Col
        style={{
          width: "100%",
          height: "70vh",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          // onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            className="form-control"
            style={{ marginBottom: "20px" }}
            type="text"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
          <Button type="submit">Start</Button>
        </form>
      </Col>
    </Row>
  );
}

export default ChatControl;
