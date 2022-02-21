import styles from "../../../styles/Programs.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import InternshipProgram from "../../components/Programs/internship";

export default function Programs() {
  return (
    <Container className={styles.programsContainer}>
      <Row className={styles.bannerContainer}>
        <Col className={styles.pageTitle}>
          <h1>Internship Programs </h1>
        </Col>
        <Col className={styles.topImg}>
          <Image
            src="/images/internship.png"
            width="100%"
            height="auto"
            alt=""
          />
        </Col>
      </Row>

      {/* internship program  info*/}
      <InternshipProgram />
    </Container>
  );
}
