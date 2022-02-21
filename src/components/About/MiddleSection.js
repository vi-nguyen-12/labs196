import styles from "../../../styles/About.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function MiddleSection() {
  return (
    <Container className={styles.middle}>
      <Row className="pb-4">
        <Col md={6}>
          <Image
            src="/images/LabsFloor.png"
            alt="side banner image"
            width="100%"
          />
        </Col>
        <Col md={6} className="align-self-center">
          <h1>LABS196 Accelerator</h1>
          <p>
            The leadership teams of selected startups are invited to the 40,000
            sq. ft. prime office space of LABS196 headquarters in the Town
            Square of Sugar Land, Texas, USA. The Houston suburb was selected as
            it provides rich access to a wide variety of talent, a diverse
            community, great schools, room for expansion, and provides a vast
            and highly educated talent pool.
          </p>
        </Col>
      </Row>

      <Row className={styles.curriculum}>
        <Col md={6}>
          <h1>Accelerator Curriculum </h1>
          <p>
            EDGE196 provides the organizational support for our portfolio
            companies so founders can focus on what they do best: building and
            deploying disruptive technologies. The LABS196 accelerator
            curriculum takes a holistic approach to scale startups.{" "}
          </p>
        </Col>
        <Col md={6}>
          <ul>
            <li>
              We start working with founders on their products from day one.
            </li>
            <li>
              Turnkey high-tech office space is included with broadband internet
              access.
            </li>
            <li>
              Access to a curated network of more than 100 contributors and
              partners spanning across 100 cities and more than 50 countries is
              immediately provided to LABS196 startups.
            </li>
            <li>
              Integrate a LABS196 internship program with universities to give
              back to the community and provide startups with additional
              resources.
            </li>
          </ul>
        </Col>
      </Row>
      <Row className={styles.cards}>
        <Col xs={12} md={3}>
          <hr />
          <h2>Business </h2>
          <ul>
            <li>Strategy Development</li>
            <li>Organization and structure</li>
            <li>Process Definition</li>
            <li>Market Testing</li>
          </ul>
        </Col>
        <Col xs={12} md={3}>
          <hr />
          <h2>Legal  </h2>
          <ul>
            <li>Business Entity Creation</li>
            <li>Corporate Governance</li>
            <li>
              Compliance: Clearing legal hurdles so companies can focus on scale
              and speed
            </li>
            <li>Contract Administration</li>
            <li>Legal Consulting</li>
          </ul>
        </Col>
        <Col xs={12} md={3}>
          <hr />
          <h2>Marketing </h2>
          <ul>
            <li>Branding and Brand development</li>
            <li>Market Research</li>
            <li>Go-to-Market Strategies</li>
            <li>Media and Events</li>
            <li>Networking Services</li>
          </ul>
        </Col>
        <Col xs={12} md={3}>
          <hr />
          <h2>Leadership </h2>
          <ul>
            <li>Company Culture</li>
            <li>Team Development</li>
            <li>Mentorship Programs</li>
            <li>Coaching and Counseling</li>
            <li>Cross-Cultural Mentoring</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
