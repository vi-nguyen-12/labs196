import React, { useState, useEffect } from "react";
import styles from "../../styles/LiveEvents.module.scss";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import youtube from "../components/YouTube/API";
import ChatBox from "../components/LiveEvents/chatBox";
import Cards from "../components/LiveEvents/Cards";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = styled(Slider)`
  height: 500px;
  width: 100%;
  overflow: hidden;
  border-radius: 0;

  // & > button {
  //   opacity: 0;
  //   height: 100%;
  //   width: 15vw;
  //   z-index: 1;

  //   // &:hover {
  //   //   opacity: 1;
  //   //   transition: opacity 0.2s ease 0s;
  //   // }
  // }

  ul li button {
    &:before {
      top: -3vh;
      font-size: 20px;
      color: gray;
      left: -35px;
      z-index: 1;
    }
  }

  li.slick - active button:before {
    color: black;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    color: black;
  }

  .slick-prev {
    left: 0;
    width: 120px;
    height: 100% !important;
    z-index: 1;
    border: 0;
    margin-left: -40px;
  }

  .slick-next {
    right: 0;
    width: 120px;
    height: 100% !important;
    z-index: 99;
    border: 0;
    margin-right: -40px;
  }
`;

const LiveEvents = () => {
  const [liveVidId, setLiveVidId] = useState();
  const [vidId, setVidId] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const toogleModal = () => setShowModal(!showModal);
  const [col, setCol] = useState(false);
  const handleOnClick = (id) => () => {
    htmlFor === "${id}";
  };

  const settingsSlick = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: vidId.length >= 4 ? 4 : vidId.length,
  };

  // useEffect(async () => {
  //   await youtube
  //     .get("search", {
  //       params: {
  //         channelId: "UCZc3fH0LcrMa4uBUg-B9-wQ",
  //         part: "snippet",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data.items);
  //       const nonLiveVids = res.data.items.filter(
  //         (vid) => vid.snippet.liveBroadcastContent === "none"
  //       );
  //       const liveVid = res.data.items.filter(
  //         (vid) => vid.snippet.liveBroadcastContent === "live"
  //       );
  //       console.log(liveVid);
  //       liveVid.map((vid) => {
  //         vid.id.videoId ? setLiveVidId(vid.id.videoId) : setLiveVidId(null);
  //       });
  //       setVidId(nonLiveVids);
  //     });
  // }, []);

  return (
    <Container>
      <Row style={{ display: "flex", textAlign: "center", margin: "10px" }}>
        <h1 className={styles.title}>Live Events</h1>
      </Row>

      <Row
        style={{
          height: "100%",
          marginBottom: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {liveVidId ? (
          <Col style={{ height: "600px" }}>
            <iframe
              title="live events"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${liveVidId}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
        ) : (
          <Col
            md={6}
            className="shadow p-3 bg-white rounded"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="./images/Webinar.png" alt="webinar" width="100%" />
          </Col>
        )}
        <Col>
          <ChatBox />
        </Col>
      </Row>
      <Row
        style={{ height: "600px", display: "flex", justifyContent: "center" }}
      >
        {/* <Col
          style={{ height: "600px", display: "flex", justifyContent: "center" }}
        > */}
        <Carousel {...settingsSlick}>
          {vidId.map((vid, index) => (
            <Cards vid={vid} key={index} />
          ))}
        </Carousel>
        {/* </Col> */}
      </Row>
    </Container>
  );
};

export default LiveEvents;
