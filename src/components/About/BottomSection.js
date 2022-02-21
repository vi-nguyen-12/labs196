import styles from "../../../styles/About.module.scss";
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";

export default function BottomSection() {
  return (
    <section className={styles.bottom}>
      <Container>
        <Row>
          <Col  md={4} className={styles.headingTitle}>
            <h1>A holistic approach to scale startups</h1>
            <h5>
            Learn through experience 
            </h5>
          </Col>
          <Col xs={12} md={8} className={styles.headingText}>
            <p>
              Participating startups get the financial support they need because
              they have the opportunity of receiving additional funding from our
              global investor network, contingent on achieving milestones. We
              provide mentorship from our seasoned worldwide professional
              network along with market access to the world&apos;s most significant
              markets, in addition to money.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
