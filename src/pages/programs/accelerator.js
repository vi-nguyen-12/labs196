import styles from "../../../styles/Programs.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import AcceleratorProgram from "../../components/Programs/accelerator";

export default function Accelerator() {
  return (
    <Container className={styles.programsContainer}>
      <Row className={styles.bannerContainer}>
        <Col className={styles.pageTitle}>
          <h1>Accelerator Programs </h1>
        </Col>
        <Col className={styles.topImg}>
          <Image
            src="/images/MainBanner2x.png"
            width="100%"
            height="auto"
            alt=""
          />
        </Col>
      </Row>

      {/* accelerator program info*/}
      <AcceleratorProgram />
    </Container>
  );
}
