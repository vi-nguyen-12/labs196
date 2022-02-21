import styles from "../../../styles/HomePage.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function MiddleSection() {
  return (
    <Container className={styles.middle}>
      <Row className="pb-4">
        <Col md={6} className="align-self-center">
          <h1>
            Benefits of the <br /> Accelerator Program
          </h1>
          <p>
            LABS196 is revolutionizing the venture capital investment industry.
            Our accelerator program is designed to support startups with unicorn
            potential due to their innovative ideas and exceptional team to get
            investor-ready and launch their project to the moon.
          </p>
        </Col>
        <Col md={6}>
          <Image
            src="/images/LabsFloor1.png"
            alt="side banner image"
            width="100%"
          />
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <hr />
          <h2>Advanced Training</h2>
          <p>
            Our goal is to help innovative startups and leadership teams reach
            their full potential and become the unicorns of tomorrow.
          </p>
        </Col>
        <Col md={3}>
          <hr />
          <h2>
            Learn <br /> New Skills
          </h2>
          <p>
            Fill in the knowledge gaps and get hands-on advice and support from
            experts in areas such as finance, technology, marketing, management,
            HR, and more.{" "}
          </p>
        </Col>
        <Col md={3}>
          <hr />
          <h2>Money, Mentors & Market Access</h2>
          <p>
            Our 3-M model provides startups with access to single-source
            funding, world-class mentorship from expert entrepreneurs and access
            to a global market through our extensive network.{" "}
          </p>
        </Col>
        <Col md={3}>
          <hr />
          <h2>
            Unique <br /> Perks
          </h2>
          <p>
            {
              " Get access to free and heavily-subsidised technology marketing and financial solutions from some of the world's top vendors. "
            }
          </p>
        </Col>
      </Row>
    </Container>
  );
}
