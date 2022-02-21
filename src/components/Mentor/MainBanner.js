import styles from "../../../styles/Rewards.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function MainBanner() {
  return (
    <>
      <Container>
        <Row className={styles.titleBanner}>
          <Col className={styles.title}>
            <h1>Mentors</h1>
          </Col>
          <Col>
            <Image
              src="images/MainBanner2x.png"
              className={styles.topImg}
              width="100%"
              objectfit="cover"
              objectposition="center center"
              alt="background"
            />
          </Col>
        </Row>
        <Row className={styles.secondBanner}>
          <Col xs={12} md={4}>
            <h1>Learn from the right people when you need them</h1>
            <h2>
              Consult our mentors if you find yourself in a tricky situation.
            </h2>
          </Col>
          <Col md={8}>
            <p>
              Mentors are available for consultations to guide entrepreneurs.
              Need help with choosing software? Consult our technology mentor.
              Need help with choosing the right marketing agency? You&apos;ll
              have an expert to get a second opinion.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
