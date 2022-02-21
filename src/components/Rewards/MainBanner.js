import styles from "../../../styles/Rewards.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function MainBanner() {
  return (
    <>
      <Container>
        <Row className={styles.titleBanner}>
          <Col className={styles.title}>
            <h1>Perks & Benefits for Startups</h1>
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
            <h1>Elevate your company</h1>
            <h2>Make your money stretch further.</h2>
          </Col>
          <Col md={8}>
            <p>
              LABS196 is a one-month intense in-person learning accelerator
              program that includes lectures, talks, brainstorming exercises,
              networking sessions, events, hackathons, and contests to help
              startups reach their maximum potential. We are looking for the
              next generation of tech startups with unicorn potential to send up
              to three leadership team members to join us in our accelerator
              program at our state-of-the-art office in Sugar Land, Texas, USA.
            </p>
          </Col>
        </Row>

        <Row className={styles.perks}>
          <Col md={2} className={styles.perksTextLogo}>
            <h1>Current Perks</h1>
          </Col>
          <Col md={3} className={styles.perkLogos}>
            <Image src="/images/aws_logo.png" alt="aws activate" />
          </Col>
          <Col className={styles.perksTextLogo}>
            <h3>AWS Activate Credits and business support</h3>
            <h4>$11,500 Value</h4>
          </Col>
          <Col md={3} className={styles.perkLogos}>
            <Image src="/images/hubspot_logo.png" alt="hubspot" />
          </Col>
          <Col className={styles.perksTextLogo}>
            <h3>Education and access to HubSpot software</h3>
            <h4>$17,500 value</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
}
