import React, { useState, useEffect } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import youtube from "../YouTube/API";
import { FaWindowClose } from "react-icons/fa";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/LiveEvents.module.scss";

const Wrap = styled.div`
  border-radius: 0;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
  padding: 5px;

  // a {
  //   border-radius: 0;
  //   cursor: pointer;
  //   display: block;
  //   position: relative;
  //   padding: 0;

  //   img {
  //     cursor: pointer;
  //     width: 100%;
  //     height: 30vh;
  //   }

  //   embed {
  //     cursor: pointer;
  //     width: 100%;
  //     height: 700px;
  //   }

    // &:hover {
    //   padding: 0;
    //   border: 4px solid rgba(249, 249, 249, 0.8);
    //   transition-duration: 300ms;
    // }
  }
`;

function Cards({ vid }) {
  const [video, setVideo] = useState(false);
  const [id, setId] = useState();
  const toogleVideo = () => setVideo(!video);

  return (
    <>
      <Wrap>
        <Card className={styles.cards} style={{ width: "18rem" }}>
          <Card.Img
            onClick={() => {
              toogleVideo();
              setId(vid.id.videoId);
            }}
            variant="top"
            src={vid.snippet.thumbnails.medium.url}
          />
          <Card.Body>
            <Card.Title>{vid.snippet.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card &apos;s content.
            </Card.Text>
            <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
            <Button
              variant="primary"
              onClick={() => {
                toogleVideo();
                setId(vid.id.videoId);
              }}
            >
              Watch
            </Button>
            </div>
          </Card.Body>
          <Modal size="lg" show={video} onHide={toogleVideo} centered>
            <Modal.Header>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "end",
                }}
              >
                <FaWindowClose
                  size={30}
                  cursor="pointer"
                  onClick={toogleVideo}
                />
              </div>
            </Modal.Header>
            <Modal.Body>
              <iframe
                width="100%"
                height="500px"
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"
              />
            </Modal.Body>
          </Modal>
        </Card>
      </Wrap>
    </>
  );
}

export default Cards;
