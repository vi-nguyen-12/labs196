import React, { useState, useEffect } from "react";
import styles from "../../../styles/Programs.module.scss";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";
import io from "socket.io-client";

export default function Accelerator() {
  const [socket, setSocket] = useState();
  const handleOnClick = async () => {
    socket.emit("start_chat", { email: "james.sherwood@labs196.com" });
  };
  useEffect(() => {
    const getSocket = () => {
      fetch("/api/socketio").finally(() => {
        const socket = io();
        console.log(socket);
        socket.on("connect", () => {});
        setSocket(socket);
      });
    };
    getSocket();
  }, []);
  return (
    <section className={styles.acceleratorInfo}>
      <button onClick={handleOnClick}>Click here to open</button>
      <h4 className={styles.sectionTitle}>Accelerator Program</h4>
      <hr />
      <Row className={styles.hero}>
        <Col md={4}>
          <h1>A one-million-dollar seed investment</h1>
          <h5 className={styles.styledText}>
            Leadership training for your startup
          </h5>
        </Col>
        <Col md={8}>
          <p>
            LABS196 is a one-month intense in-person learning accelerator
            program that includes lectures, talks, brainstorming exercises,
            networking sessions, events, hackathons, and contests to help
            startups reach their maximum potential. We are looking for the next
            generation of tech startups with unicorn potential to send up to
            three leadership team members to join us in our accelerator program
            at our state-of-the-art office in Sugar Land, Texas, USA.
          </p>
        </Col>
      </Row>

      <Row className="py-4">
        <Col md={6} className="align-self-center">
          <h1>
            Benefits of the
            <br />
            Accelerator Program
          </h1>
          <p>
            EDGE196 is revolutionizing the venture capital investment industry.
            Our accelerator program is designed to support startups with unicorn
            potential due to their innovative ideas and exceptional team to get
            investor-ready and launch their project to the moon.
          </p>
        </Col>
        <Col md={6}>
          <Image src="/images/LabsFloor6.png" width="100%" alt="labs floor" />
        </Col>
      </Row>

      <Row className={styles.cards}>
        <Col md={3}>
          <hr />
          <h4>Advanced Training</h4>
          <p>
            Our goal is to help innovative startups and leadership teams reach
            their full potential and become the unicorns of tomorrow.{" "}
          </p>
        </Col>
        <Col md={3}>
          <hr />
          <h4>Learn New Things</h4>
          <p>
            Fill in the knowledge gasp and get hands-on advice and support from
            experts in areas such as finance, technology, marketing, management,
            HR, and more.{" "}
          </p>
        </Col>
        <Col md={3}>
          <hr />
          <h4>Money, Mentoring &amp; Market Access</h4>
          <p>
            Our &quot;3-M&quot; model provides startups with access to
            single-source funding, world-class mentorship from expert
            entrepreneurs, and access to a global market through our extensive
            network.{" "}
          </p>
        </Col>
        <Col md={3}>
          <hr />
          <h4>Unique Perks</h4>
          <p>
            Get access to free and heavily subsidized technology marketing and
            financial solutions from some of the world&aposs top vendors.{" "}
          </p>
        </Col>
      </Row>

      <Row>
        <h1 id="accelerator-form">Apply to join</h1>
        <iframe
          className={styles.acceleratorForm}
          frameBorder="0"
          style={{ height: "1150px", width: "100%", border: "none" }}
          src="https://forms.zohopublic.com/outreach4/form/AcceleratorPageSignup/formperma/60jbtI43sa8nTEe2oqAs74B3yy83kl0IBuBHk7ty7to"
        ></iframe>
      </Row>
    </section>
  );
}
